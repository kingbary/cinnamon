// components/blog/sub-blog.tsx
import React from 'react'
import BlogHeader from './blog-header'
import BlogBody from './blog-body'
import { ResolvedPost } from '@/types/post'

interface SubBlogProps {
    article: ResolvedPost;
    allArticles: ResolvedPost[];
}

export default function SubBlog({ article, allArticles }: SubBlogProps) {
    return (
        <>
            <BlogHeader />
            <BlogBody article={article} allArticles={allArticles} />
        </>
    )
}