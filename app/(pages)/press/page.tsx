import ArticlesSection from '@/components/blog/articles-section'
import FeaturedArticle from '@/components/blog/featured-article'
import PageHeader from '@/components/universal/page-header'
import { fetchBlogArticles } from '@/sanity/lib/queries';
import { ResolvedPost } from '@/types/post';
import React, { Suspense } from 'react'

export default async function BlogPage() {
    let articles: ResolvedPost[] = [];

    try {
        const result = await fetchBlogArticles();
        articles = result.data || [];
    } catch (error) {
        console.error('error', error);
    }

    return (
        <Suspense>
            <div className='mx-2'>
                <PageHeader title='press' />
                <FeaturedArticle />
                <ArticlesSection articles={articles} />
            </div>
        </Suspense>
    )
}