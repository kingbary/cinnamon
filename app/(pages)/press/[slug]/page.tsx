import SubBlog from '@/components/blog/sub-blog'
import { Post } from '@/sanity.types';
import { fetchBlogArticles } from '@/sanity/lib/queries';
import React, { Suspense } from 'react'

export default async function IndividualBlogPage() {
    let articles: { data: Post[] } = { data: [] };
    try {
        articles = await fetchBlogArticles();
    } catch (error) {
        console.error('error', error);
    }
    console.log("articles:", articles)
    return (
        <Suspense>
            <div className='mx-2'>
                <SubBlog />
            </div>
        </Suspense>
    )
}
