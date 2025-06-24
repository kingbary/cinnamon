import { Author, Post } from "@/sanity.types";
import { loadQuery } from "./client";

export const fetchAuthor = () =>
  loadQuery<Author[]>({
    query: `*[_type == "author"]`,
  });

export const fetchBlogArticles = () =>
  loadQuery<Post[]>({
    query: `*[_type == "post"]`,
  });
