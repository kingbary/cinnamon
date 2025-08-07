import { Author, Post } from "@/sanity.types";
import { loadQuery } from "./client";

// Type for the expanded podcast query result
export interface ExpandedPodcast {
  _id: string;
  title: string;
  duration: string;
  videoFileUrl: string | null;
  posterImageUrl: string | null;
  authorData: {
    name: string;
    imageUrl: string | null;
  } | null;
  tag?: {
    text: string;
    bgColor?: string;
    textColor?: string;
  };
  description?: string;
  publishedAt?: string;
}

export const fetchAuthor = () =>
  loadQuery<Author[]>({
    query: `*[_type == "author"]`,
  });

export const fetchBlogArticles = () =>
  loadQuery<Post[]>({
    query: `*[_type == "post"]`,
  });

// Updated fetchPodcasts with expanded references
export const fetchPodcasts = () =>
  loadQuery<ExpandedPodcast[]>({
    query: `*[_type == "podcasts"] | order(publishedAt desc) {
      _id,
      title,
      duration,
      "videoFileUrl": videoFile.asset->url,
      "posterImageUrl": posterImage.asset->url,
      "authorData": author-> {
        name,
        "imageUrl": image.asset->url
      },
      tag,
      description,
      publishedAt
    }`,
  });

// Alternative: If you only want featured podcasts
// export const fetchFeaturedPodcasts = () =>
//   loadQuery<ExpandedPodcast[]>({
//     query: `*[_type == "podcasts" && featured == true] | order(publishedAt desc) {
//       _id,
//       title,
//       duration,
//       "videoFileUrl": videoFile.asset->url,
//       "posterImageUrl": posterImage.asset->url,
//       "authorData": author-> {
//         name,
//         "imageUrl": image.asset->url
//       },
//       tag,
//       description,
//       publishedAt
//     }`,
//   });
