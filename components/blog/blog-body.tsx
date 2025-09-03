// components/blog/blog-body.tsx
import React from 'react'
import Container from '../universal/container'
import Image from 'next/image'
import { LineStroke } from '../vectors/line-stroke'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import ArticleCard from './article-card'
import { ResolvedPost, ImageBlock, BodyBlock } from '@/types/post'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'


interface BlogBodyProps {
    article: ResolvedPost;
    allArticles: ResolvedPost[];
}

interface TextChild {
    _type: string;
    text?: string;
    [key: string]: unknown;
}


export default function BlogBody({ article, allArticles }: BlogBodyProps) {
    const similarArticles = allArticles
        .filter(item => item._id !== article._id)
        .slice(0, 3);

    const portableTextComponents: PortableTextComponents = {
        types: {
            image: ({ value }: { value: ImageBlock }) => (
                <div className='flex w-full justify-center my-8'>
                    <Image
                        src={urlForImage(value).url()}
                        alt={value.alt || 'Article image'}
                        width={800}
                        height={600}
                        className='rounded-2xl max-w-full h-auto'
                    />
                </div>
            ),
        },
        block: {
            h1: ({ children }) => (
                <h1 className='text-2xl md:text-4xl font-bold mb-4 text-[#14141A]'>{children}</h1>
            ),
            h2: ({ children }) => (
                <h2 className='text-xl md:text-3xl font-bold mb-4 text-[#14141A]'>{children}</h2>
            ),
            h3: ({ children }) => (
                <h3 className='text-lg md:text-2xl font-bold mb-3 text-[#14141A]'>{children}</h3>
            ),
            h4: ({ children }) => (
                <h4 className='text-base md:text-xl font-bold mb-2 text-[#14141A]'>{children}</h4>
            ),
            normal: ({ children }) => (
                <p className='text-sm md:text-xl leading-normal md:leading-[32px] -tracking-[0.003em] text-[#737380] mb-4'>
                    {children}
                </p>
            ),
            li: ({ children }) => (
                <li className='text-sm md:text-xl leading-normal md:leading-[32px] -tracking-[0.003em] text-[#737380] mb-4'>
                    {children}
                </li>
            ),
            a: ({ children }) => (
                <a className='text-[#5214CC] underline' href="">{children}</a>
            )
        },
    };

    const getReadingTime = (body: BodyBlock[]): string => {
        if (!body) return '5 minutes';

        const wordCount = body.reduce((count, block) => {
            if (block._type === 'block' && block.children) {
                return count + block.children.reduce((blockCount: number, child: TextChild) => {
                    return blockCount + (child.text ? child.text.split(' ').length : 0);
                }, 0);
            }
            return count;
        }, 0);

        const readingTime = Math.ceil(wordCount / 200);
        return `${readingTime} minute${readingTime !== 1 ? 's' : ''}`;
    };

    return (
        <Container>
            <div>
                <Link href={'/press'}>
                    <Button variant={'outline'} className='text-[#14141A] flex w-fit rounded-full'>
                        <ArrowLeft />
                    </Button>
                </Link>

                <div className='py-6 flex flex-col gap-3'>
                    <h2 className='text-2xl md:text-4xl font-bold text-[#14141A]'>
                        {article.title}
                    </h2>

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
                                <p className='font-medium'>{article.author.name}</p>
                                <LineStroke className='ml-2' />
                            </div>
                        )}

                        <div className='flex gap-4 items-center pl-4'>
                            <p className='font-medium'>{getReadingTime(article.body || [])}</p>
                            <LineStroke />
                        </div>

                        {article.categories?.map((category, index) => (
                            <div key={category._key || index} className='flex gap-4 items-center pl-4'>
                                <div
                                    className="rounded-md text-sm font-medium px-2 py-1"
                                    style={{ backgroundColor: '#5214CC', color: '#EEE5FF' }}
                                >
                                    {category.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Article Image */}
                {article.mainImage && (
                    <div className="flex justify-center mb-8">
                        <Image
                            src={urlForImage(article.mainImage).url()}
                            alt={article.mainImage.alt || article.title || 'Article image'}
                            width={852}
                            height={400}
                            className='rounded-2xl max-w-full h-auto'
                        />
                    </div>
                )}

                {/* Article Content */}
                <div className="flex justify-center">
                    <div className='mb-16 py-8 px-4 md:px-16 w-full max-w-[852px]'>
                        {article.body && (
                            <div className="prose prose-lg max-w-none">
                                <PortableText
                                    value={article.body}
                                    components={portableTextComponents}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Similar Articles */}
                {similarArticles.length > 0 && (
                    <div className='mt-8 mb-16'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-8'>Similar Articles</h2>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {similarArticles.map((item) => (
                                <ArticleCard key={item._id} article={item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Container>
    )
}