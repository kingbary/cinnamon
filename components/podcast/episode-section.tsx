"use client"
import React from 'react'
import Container from '../universal/container'
import { Search } from 'lucide-react'
import VideoCard from '../universal/video-card'
import Pagination from '../universal/pagination'

export default function EpisodeSection() {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [searchTerm, setSearchTerm] = React.useState('')
    const itemsPerPage = 4

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const allEpisode = [
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            name: "John Doe",
            avatarUrl: "/images/avatar.png",
            duration: "5 minutes",
            tag: {
                text: "Lifestyle and Travel",
                bgColor: "#E5FFFF",
                textColor: "#14CCCC"
            }
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            name: "John Doe",
            avatarUrl: "/images/avatar.png",
            duration: "5 minutes",
            tag: {
                text: "Lifestyle and Travel",
                bgColor: "#E5FFFF",
                textColor: "#14CCCC"
            }
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            name: "John Doe",
            avatarUrl: "/images/avatar.png",
            duration: "5 minutes",
            tag: {
                text: "Lifestyle and Travel",
                bgColor: "#E5FFFF",
                textColor: "#14CCCC"
            }
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            name: "John Doe",
            avatarUrl: "/images/avatar.png",
            duration: "5 minutes",
            tag: {
                text: "Lifestyle and Travel",
                bgColor: "#E5FFFF",
                textColor: "#14CCCC"
            }
        },
        {
            title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
            name: "John Doe",
            avatarUrl: "/images/avatar.png",
            duration: "5 minutes",
            tag: {
                text: "Lifestyle and Travel",
                bgColor: "#E5FFFF",
                textColor: "#14CCCC"
            }
        },
        {
            title: "Episode 6 - Another interesting episode title here",
            name: "Jane Smith",
            avatarUrl: "/images/avatar.png",
            duration: "8 minutes",
            tag: {
                text: "Technology",
                bgColor: "#FFE5F1",
                textColor: "#FF1744"
            }
        },
        {
            title: "Episode 7 - More content for pagination testing",
            name: "Mike Johnson",
            avatarUrl: "/images/avatar.png",
            duration: "12 minutes",
            tag: {
                text: "Business",
                bgColor: "#E5F3FF",
                textColor: "#2196F3"
            }
        },
        {
            title: "Episode 8 - Final episode in our test data",
            name: "Sarah Wilson",
            avatarUrl: "/images/avatar.png",
            duration: "6 minutes",
            tag: {
                text: "Health",
                bgColor: "#E8F5E8",
                textColor: "#4CAF50"
            }
        }
    ]

    const filteredEpisodes = allEpisode.filter(episode =>
        episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.tag.text.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const totalItems = filteredEpisodes.length
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentEpisodes = filteredEpisodes.slice(startIndex, endIndex)

    React.useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm])

    return (
        <Container className='pt-8 pb-16 flex-col px-0'>
            {/* All episodes  */}
            <div className='flex flex-col items-start w-full'>
                <div className='flex flex-col w-full justify-start md:items-center gap-4 md:gap-[120px] md:flex-row'>
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
                        Found {totalItems} episodes matching &quot;{searchTerm}&quot;
                    </div>
                )}

                <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentEpisodes.length > 0 ? (
                        currentEpisodes.map((item, index) => (
                            <VideoCard key={startIndex + index} props={item} />
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
                <div className='mt-8'>
                    <h2>Popular episodes </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                        {currentEpisodes.slice(0, 2).map((item, index) => (
                            <VideoCard key={startIndex + index} props={item} />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}