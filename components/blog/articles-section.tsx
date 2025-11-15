"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import { Search } from 'lucide-react'
import Pagination from '../universal/pagination'
import ArticleCard from './article-card'
import { ResolvedPost } from '@/types/post'
import { motion, useInView } from 'framer-motion'

interface ArticlesSectionProps {
    articles: ResolvedPost[]
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [searchTerm, setSearchTerm] = React.useState('')
    const itemsPerPage = 6

    const headerRef = useRef(null)
    const gridRef = useRef(null)
    const recentRef = useRef(null)
    const headerInView = useInView(headerRef, { once: false, amount: 0.3 })
    const gridInView = useInView(gridRef, { once: false, amount: 0.1 })
    const recentInView = useInView(recentRef, { once: false, amount: 0.2 })

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const filteredArticles = articles.filter(article => {
        if (!article) return false;

        const matchesSearch =
            article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.author?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.categories?.some(cat =>
                cat.title?.toLowerCase().includes(searchTerm.toLowerCase())
            );

        return matchesSearch;
    });

    const totalItems = filteredArticles.length
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentArticles = filteredArticles.slice(startIndex, endIndex)

    React.useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm])

    return (
        <Container className='pt-8 pb-16 flex-col px-0'>
            <div>
                <div ref={headerRef} className='flex flex-col w-full justify-start md:items-center gap-4 md:gap-[120px] md:flex-row'>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                    >
                        All episodes
                    </motion.h2>
                    <motion.div
                        className='relative bg-[#F5F5FA] pl-10 pr-4 border border-[#D9D9E5] rounded-[80px]'
                        initial={{ opacity: 0, x: 30 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <input
                            placeholder='Search'
                            className='py-2 text-[#C1C1CC] border-none outline-none bg-transparent'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search color='#C1C1CC' className='absolute left-3 top-2' />
                    </motion.div>
                </div>
                {searchTerm && (
                    <motion.div
                        className="mt-4 text-sm text-gray-600"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        Found {totalItems} article{totalItems !== 1 ? 's' : ''} matching &quot;{searchTerm}&quot;
                    </motion.div>
                )}
                <div ref={gridRef} className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-16">
                    {currentArticles.length > 0 ? (
                        currentArticles.map((article, index) => (
                            <motion.div
                                key={article._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ArticleCard article={article} />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            className="col-span-3 text-center py-8 text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {searchTerm ? 'No articles found matching your search.' : 'No articles available.'}
                        </motion.div>
                    )}
                </div>
                {totalItems > itemsPerPage && (
                    <motion.div
                        className='mb-16 w-full'
                        initial={{ opacity: 0, y: 20 }}
                        animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Pagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                            initialPage={currentPage}
                            key={searchTerm}
                        />
                    </motion.div>
                )}
                <div ref={recentRef} className='mt-8 mb-16'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={recentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Recent Articles
                    </motion.h2>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {articles.slice(0, 3).map((article, index) => (
                            <motion.div
                                key={`recent-${article._id}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={recentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <ArticleCard article={article} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}