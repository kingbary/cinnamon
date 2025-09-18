import SubBlog from '@/components/blog/sub-blog'
import { fetchBlogArticles, fetchBlogBySlug } from '@/sanity/lib/queries';
import { ResolvedPost } from '@/types/post';
import React, { Suspense } from 'react'
import { notFound } from 'next/navigation';
import { Metadata } from "next";

interface BlogPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params;
    let currentArticle: ResolvedPost | null = null;
    try {
        const articleResult = await fetchBlogBySlug(slug);
        currentArticle = articleResult.data;
    } catch {
        // fallback values
    }
    if (!currentArticle) {
        return {
            title: "Press | Cinnamon",
            description: "Explore Cinnamon's press features, articles, and media coverage.",
        };
    }
    const description = currentArticle.title || "Read this press feature from Cinnamon.";
    const imageUrl = "https://thecinnamon.io/cinnamon.png";
    return {
        title: `Cinnamon | ${currentArticle.title}`,
        description,
        openGraph: {
            title: `Cinnamon | ${currentArticle.title}`,
            description,
            url: `https://thecinnamon.io/press/${slug}`,
            siteName: "Cinnamon",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: currentArticle.title,
                },
            ],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `Cinnamon | ${currentArticle.title}`,
            description,
            images: [imageUrl],
            site: "@thecinnamonio",
        },
    };
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