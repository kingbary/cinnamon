// types/post.ts
export interface ResolvedPost {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: {
    current?: string;
    _type: "slug";
  };
  author?: ResolvedAuthor;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      url?: string;
    };
    alt?: string;
    _type: "image";
  };
  categories?: ResolvedCategory[];
  publishedAt?: string;
  body?: BodyBlock[];
}

export interface ResolvedAuthor {
  _id: string;
  name?: string;
  image?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export interface ResolvedCategory {
  _id: string;
  _key?: string;
  title: string;
  description?: string;
}

export interface TextBlock {
  _type: 'block';
  _key?: string;
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
  listItem?: 'bullet' | 'number';
  level?: number;
  children: Array<{
    _key?: string;
    _type: 'span';
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
}

export interface ImageBlock {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
    url?: string;
  };
  alt?: string;
}

export type BodyBlock = TextBlock | ImageBlock;