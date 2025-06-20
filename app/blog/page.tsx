import ArticlesSection from '@/components/blog/articles-section'
import FeaturedArticle from '@/components/blog/featured-article'
import PageHeader from '@/components/universal/page-header'
import React from 'react'

export default function BlogPage() {
    return (
        <>
            <PageHeader title='blog' />
            <FeaturedArticle />
            <ArticlesSection />
        </>
    )
}
