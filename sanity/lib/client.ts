import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { QueryParams } from "sanity";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const { result } = await client.fetch<QueryResponse>(query, params ?? {}, {
    filterResponse: false,
  });
  return {
    data: result,
  };
}
