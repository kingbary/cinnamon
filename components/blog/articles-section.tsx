"use client"
import React from 'react'
import Container from '../universal/container'
import { Search } from 'lucide-react'
import Pagination from '../universal/pagination'
import ArticleCard from './article-card'

export default function ArticlesSection() {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [searchTerm, setSearchTerm] = React.useState('')
    const itemsPerPage = 6

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const articles = [
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            author: "John Doe",
            avatarUrl: "/images/avatar.png",
            readTime: "5 minutes",
            tag: "Lifestyle and Travel",
            content: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.",
            id: "1",
            articleImg: "/images/article-img-1.png"
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            author: "John Doe",
            avatarUrl: "/images/avatar.png",
            readTime: "5 minutes",
            tag: "Lifestyle and Travel",
            content: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.",
            id: "2",
            articleImg: "/images/article-img-2.png"
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            author: "John Doe",
            avatarUrl: "/images/avatar.png",
            readTime: "5 minutes",
            tag: "Lifestyle and Travel",
            content: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.",
            id: "3",
            articleImg: "/images/article-img-3.png"
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            author: "John Doe",
            avatarUrl: "/images/avatar.png",
            readTime: "5 minutes",
            tag: "Lifestyle and Travel",
            content: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.",
            id: "4",
            articleImg: "/images/article-img-1.png"
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            author: "John Doe",
            avatarUrl: "/images/avatar.png",
            readTime: "5 minutes",
            tag: "Lifestyle and Travel",
            content: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.",
            id: "5",
            articleImg: "/images/article-img-2.png"
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            author: "John Doe",
            avatarUrl: "/images/avatar.png",
            readTime: "5 minutes",
            tag: "Lifestyle and Travel",
            content: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.",
            id: "6",
            articleImg: "/images/article-img-3.png"
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            author: "John Doe",
            avatarUrl: "/images/avatar.png",
            readTime: "5 minutes",
            tag: "Lifestyle and Travel",
            content: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.",
            id: "7",
            articleImg: "/images/article-img-3.png"
        },

    ]
    const filteredArticles = articles.filter(episode =>
        episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.tag.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const totalItems = filteredArticles.length
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentArticle = filteredArticles.slice(startIndex, endIndex)

    React.useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm])
    return (
        <Container className='pt-8 pb-16 flex-col'>
            <div>
                <div className='flex w-full justify-start gap-[120px] items-center'>
                    <h2>All episodes </h2>
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
                        Found {totalItems} article matching &quot;{searchTerm}&quot;
                    </div>
                )}
                <div className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentArticle.length > 0 ? (
                        currentArticle.map((item, index) => (
                            <ArticleCard key={index} props={item} />
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-8 text-gray-500">
                            {searchTerm ? 'No episodes found matching your search.' : 'No episodes available.'}
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
                        {articles.slice(0, 3).map((item, index) => (
                            <ArticleCard key={startIndex + index} props={item} />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}
