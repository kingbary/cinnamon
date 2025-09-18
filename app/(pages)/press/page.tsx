import ArticlesSection from '@/components/blog/articles-section'
import FeaturedArticle from '@/components/blog/featured-article'
import PageHeader from '@/components/universal/page-header'
import { fetchBlogArticles } from '@/sanity/lib/queries';
import { ResolvedPost } from '@/types/post';
import React, { Suspense } from 'react'

export const metadata = {
    title: "Press | Cinnamon",
    description:
        "Explore Cinnamon's press features, articles, and media coverage. Discover how our clients and team are making headlines, sharing expertise, and building global visibility through impactful stories and thought leadership.",
    openGraph: {
        title: "Press | Cinnamon",
        description:
            "Explore Cinnamon's press features, articles, and media coverage. Discover how our clients and team are making headlines, sharing expertise, and building global visibility through impactful stories and thought leadership.",
        url: "https://thecinnamon.io/press",
        siteName: "Cinnamon",
        images: [
            {
                url: "https://thecinnamon.io/cinnamon.png",
                width: 1200,
                height: 630,
                alt: "Cinnamon",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Press | Cinnamon",
        description:
            "Explore Cinnamon's press features, articles, and media coverage. Discover how our clients and team are making headlines, sharing expertise, and building global visibility through impactful stories and thought leadership.",
        images: ["https://thecinnamon.io/cinnamon.png"],
        site: "@thecinnamonio",
    },
};

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
                <FeaturedArticle articles={articles} />
                <ArticlesSection articles={articles} />
            </div>
        </Suspense>
    )
}