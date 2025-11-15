"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import SectionTitle from '../universal/section-title'
import { Button } from '../ui/button'
import Image from 'next/image'
import { LineStroke } from '../vectors/line-stroke'
import { ResolvedPost, TextBlock } from '@/types/post'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

interface FeaturedArticlesProps {
    articles: ResolvedPost[]
}

export default function FeaturedArticle({ articles }: FeaturedArticlesProps) {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

    const featuredArticle = articles[0] ?? [];
    const getExcerpt = (): string => {
        if (!featuredArticle.body) return '';

        const firstTextBlock = featuredArticle?.body.find(
            (block): block is TextBlock =>
                block._type === 'block' && block.style === 'normal'
        );

        return firstTextBlock?.children?.[0]?.text || '';
    };

    const excerpt = getExcerpt();

    return (
        <div ref={sectionRef}>
            <Container className='pt-8 pb-16 mt-8'>
                <div className='w-full flex flex-col justify-between gap-8 md:flex-row lg:gap-[120px]'>
                    <div className='w-full'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionTitle text="Featured Article" />
                        </motion.div>
                        <div className='flex flex-col gap-3 mt-4'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {featuredArticle?.title}
                            </motion.h2>
                            <motion.div
                                className="flex"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className='flex gap-2 items-center'>
                                    <Image
                                        src={featuredArticle?.author?.image ? urlForImage(featuredArticle?.author?.image).url() : '/images/placeholder.png'}
                                        alt={featuredArticle?.mainImage?.alt || featuredArticle?.title || 'Article image'}
                                        width={24}
                                        height={24}
                                    />
                                    <p className='font-medium text-xs whitespace-nowrap lg:text-base'>{featuredArticle?.author?.name}</p>
                                    <LineStroke className='ml-2' />
                                </div>
                                <div className='flex gap-4 items-center pl-4'>
                                    <p className='font-medium text-xs whitespace-nowrap lg:text-base'>5 minutes</p>
                                    <LineStroke />
                                </div>
                                <div className='flex gap-4 items-center pl-4'>
                                    <div className={`rounded-md text-xs whitespace-nowrap lg:text-sm font-medium px-2 py-1`} style={{ backgroundColor: '#EEE5FF', color: '#5214CC' }}>
                                        {featuredArticle?.categories?.[0]?.title || 'Category'}
                                    </div>
                                </div>
                            </motion.div>
                            <motion.p
                                className='mt-3'
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {excerpt}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Link href={featuredArticle?.slug?.current ? `/press/${featuredArticle.slug.current}` : '/'}>
                                    <Button className='w-fit'>Read Full Article</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        className='w-full rounded-2xl md:rounded-3xl overflow-hidden'
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src={featuredArticle?.mainImage ? urlForImage(featuredArticle?.mainImage).url() : '/images/placeholder.png'}
                            className='w-full object-cover'
                            width={620}
                            height={448}
                            alt='cinnamon website - featured article image'
                        />
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}
