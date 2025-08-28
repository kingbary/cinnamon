import SubBlog from '@/components/blog/sub-blog'
import { fetchBlogArticles, fetchBlogBySlug } from '@/sanity/lib/queries';
import { ResolvedPost } from '@/types/post';
import React, { Suspense } from 'react'
import { notFound } from 'next/navigation';

interface BlogPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function IndividualBlogPage({ params }: BlogPageProps) {
    const { slug } = await params;

    let currentArticle: ResolvedPost | null = null;
    let allArticles: ResolvedPost[] = [];

    try {
        const articleResult = await fetchBlogBySlug(slug);
        currentArticle = articleResult.data;

        const articlesResult = await fetchBlogArticles();
        allArticles = articlesResult.data;
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }

    if (!currentArticle) {
        notFound();
    }

    return (
        <Suspense fallback={<div className="flex justify-center py-8">Loading...</div>}>
            <div className='mx-2'>
                <SubBlog article={currentArticle} allArticles={allArticles} />
            </div>
        </Suspense>
    );
}