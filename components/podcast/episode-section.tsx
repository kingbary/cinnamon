"use client"
import React from 'react'
import Container from '../universal/container'
import { Search } from 'lucide-react'
import VideoCard, { VideoProps } from '../universal/video-card'
import Pagination from '../universal/pagination'
import { ExpandedPodcast } from '@/sanity/lib/queries'



export default function EpisodeSection({ allEpisodes }: { allEpisodes: ExpandedPodcast[] }) {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [searchTerm, setSearchTerm] = React.useState('')
    const itemsPerPage = 4

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const transformPodcastData = (item: ExpandedPodcast): VideoProps => ({
        title: item.title || "Untitled Podcast",
        name: item.authorData?.name || "Unknown Author",
        avatarUrl: item.authorData?.imageUrl || "/images/avatar.png",
        duration: item.duration || "Unknown duration",
        videoUrl: item.videoUrl || "/video.mp4", // Use videoUrl directly - VideoCard will handle conversion
        posterUrl: item.posterImageUrl || "/images/video-overlay.png",
        tag: {
            text: item.tag?.text || "Podcast",
            bgColor: item.tag?.bgColor || "#E5FFFF",
            textColor: item.tag?.textColor || "#14CCCC"
        }
    });

    const transformedEpisodes = allEpisodes.map(transformPodcastData);

    const filteredEpisodes = transformedEpisodes.filter(episode =>
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
            <div className='flex flex-col items-start w-full' id='all-episodes'>
                <div className='flex flex-col w-full justify-start md:items-center gap-4 md:gap-[120px] md:flex-row'>
                    <h2 className='text-center md:text-left'>All episodes</h2>
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
                            <VideoCard key={`current-${startIndex + index}`} props={item} />
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

                <div className='mt-8 w-full'>
                    <h2 className='text-center md:text-left'>Popular episodes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                        {transformedEpisodes.slice(0, 2).map((item, index) => (
                            <VideoCard key={`popular-${index}`} props={item} />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}