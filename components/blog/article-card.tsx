import React from 'react'
import { LineStroke } from '../vectors/line-stroke'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import { ResolvedPost, TextBlock } from '@/types/post'
import Image from 'next/image'

interface ArticleCardProps {
    article: ResolvedPost
}

export default function ArticleCard({ article }: ArticleCardProps) {
    const getExcerpt = (): string => {
        if (!article.body) return '';

        const firstTextBlock = article.body.find(
            (block): block is TextBlock =>
                block._type === 'block' && block.style === 'normal'
        );

        return firstTextBlock?.children?.[0]?.text || '';
    };

    const excerpt = getExcerpt();

    return (
        <div className='bg-white rounded-4xl flex flex-col gap-2 w-full p-1 overflow-hidden z-50 shadow-custom'>
            {article.mainImage && (
                <div className='bg-[#00000033] w-full h-[320px] rounded-[28px] relative overflow-hidden'>
                    <Image
                        src={urlForImage(article.mainImage).url()}
                        alt={article.mainImage.alt || article.title || 'Article image'}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className='py-6 px-4 flex flex-col gap-3'>
                <h4>{article.title}</h4>
                <div className="flex flex-wrap gap-2 items-center">
                    {article.author?.image && (
                        <div className='flex gap-2 items-center'>
                            <Image
                                src={urlForImage(article.author.image).url()}
                                width={24}
                                height={24}
                                alt={article.author.name || 'Author image'}
                                className="rounded-full"
                            />
                            <p className='font-medium text-sm xl:text-base whitespace-nowrap'>
                                {article.author.name}
                            </p>
                            <LineStroke className='ml-2' />
                        </div>
                    )}
                    {article.publishedAt && (
                        <div className='flex gap-4 items-center'>
                            <p className='font-medium text-sm xl:text-base whitespace-nowrap'>
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </p>
                            <LineStroke />
                        </div>
                    )}
                    {article.categories?.map((category, index) => (
                        <div key={category._key || index} className='flex gap-4 items-center'>
                            <div
                                className="rounded-md text-xs xl:text-sm whitespace-nowrap font-medium px-2 py-1"
                                style={{ backgroundColor: '#CC1452', color: '#FFE5EE' }}
                            >
                                {category.title}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-[#737380] line-clamp-3'>
                    {excerpt}
                </div>
                <div>
                    <Link
                        href={`/press/${article.slug?.current}`}
                        className='text-primary font-medium hover:underline'
                    >
                        Read Full Article
                    </Link>
                </div>
            </div>
        </div>
    )
}