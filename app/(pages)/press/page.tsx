import ArticlesSection from '@/components/blog/articles-section'
import FeaturedArticle from '@/components/blog/featured-article'
import PageHeader from '@/components/universal/page-header'
import { Post } from '@/sanity.types';
import { fetchBlogArticles } from '@/sanity/lib/queries';
import React, { Suspense } from 'react'

export default async function BlogPage() {
    let articles: { data: Post[] } = { data: [] };
    try {
        articles = await fetchBlogArticles();
    } catch (error) {
        console.error('error', error);
    }
    console.log("articles:", articles)
    return (
        <Suspense>
            <PageHeader title='press' />
            <FeaturedArticle />
            <ArticlesSection />
        </Suspense>
    )
}
