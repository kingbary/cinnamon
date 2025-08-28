"use client"
import React from 'react'
import Container from '../universal/container'
import { Search } from 'lucide-react'
import Pagination from '../universal/pagination'
import ArticleCard from './article-card'
import { ResolvedPost } from '@/types/post'
interface ArticlesSectionProps {
    articles: ResolvedPost[]
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [searchTerm, setSearchTerm] = React.useState('')
    const itemsPerPage = 6

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
                <div className='flex flex-col w-full justify-start md:items-center gap-4 md:gap-[120px] md:flex-row'>
                    <h2>All episodes</h2>
                    <div className='relative bg-[#F5F5FA] pl-10 pr-4 border border-[#D9D9E5] rounded-[80px]'>
                        <input
                            placeholder='Search'
                            className='py-2 text-[#C1C1CC] border-none outline-none bg-transparent'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search color='#C1C1CC' className='absolute left-3 top-2' />
                    </div>
                </div>
                {searchTerm && (
                    <div className="mt-4 text-sm text-gray-600">
                        Found {totalItems} article{totalItems !== 1 ? 's' : ''} matching &quot;{searchTerm}&quot;
                    </div>
                )}
                <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-16">
                    {currentArticles.length > 0 ? (
                        currentArticles.map((article) => (
                            <ArticleCard
                                key={article._id}
                                article={article}
                            />
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-8 text-gray-500">
                            {searchTerm ? 'No articles found matching your search.' : 'No articles available.'}
                        </div>
                    )}
                </div>
                {totalItems > itemsPerPage && (
                    <div className='mb-16 w-full'>
                        <Pagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                            initialPage={currentPage}
                            key={searchTerm}
                        />
                    </div>
                )}
                <div className='mt-8 mb-16'>
                    <h2>Recent Articles</h2>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {articles.slice(0, 3).map((article) => (
                            <ArticleCard
                                key={`recent-${article._id}`}
                                article={article}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}
