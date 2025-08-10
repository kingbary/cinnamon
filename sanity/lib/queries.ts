import { Author, Post } from "@/sanity.types";
import { loadQuery } from "./client";
export interface ExpandedPodcast {
  _id: string;
  title: string;
  duration: string;
  videoUrl: string | null;
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
  featured?: boolean;
}

export const fetchAuthor = () =>
  loadQuery<Author[]>({
    query: `*[_type == "author"]`,
  });

export const fetchBlogArticles = () =>
  loadQuery<Post[]>({
    query: `*[_type == "post"]`,
  });

export const fetchPodcasts = () =>
  loadQuery<ExpandedPodcast[]>({
    query: `*[_type == "podcasts"] | order(publishedAt desc) {
      _id,
      title,
      duration,
      videoUrl,
      "posterImageUrl": posterImage.asset->url,
      "authorData": author-> {
        name,
        "imageUrl": image.asset->url
      },
      tag,
      description,
      publishedAt,
      featured
    }`,
  });
