import { Author } from "@/sanity.types";
import { loadQuery } from "./client";
import { ResolvedPost } from "@/types/post";
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
  loadQuery<ResolvedPost[]>({
    query: `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body[]{
      ...,
      _type == "block" => {
        ...,
        children[]{
          ...
        }
      }
    },
    author->{
      name,
      image
    },
    categories[]->{
      title
    }
  }
`,
  });

export const fetchBlogBySlug = (slug: string) =>
  loadQuery<ResolvedPost>({
    query: `
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        body[]{
          ...,
          _type == "block" => {
            ...,
            children[]{
              ...
            }
          },
          _type == "image" => {
            ...,
            asset-> {
              _id,
              url
            }
          }
        },
        author->{
          name,
          image {
            asset-> {
              _id,
              url
            }
          }
        },
        categories[]->{
          _id,
          title
        }
      }
    `,
    params: { slug },
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
