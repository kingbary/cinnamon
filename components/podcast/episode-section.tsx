"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import { Search } from 'lucide-react'
import VideoCard, { VideoProps } from '../universal/video-card'
import Pagination from '../universal/pagination'
import { ExpandedPodcast } from '@/sanity/lib/queries'
import { motion, useInView } from 'framer-motion'



export default function EpisodeSection({ allEpisodes }: { allEpisodes: ExpandedPodcast[] }) {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [searchTerm, setSearchTerm] = React.useState('')
    const itemsPerPage = 4

    const headerRef = useRef(null)
    const gridRef = useRef(null)
    const popularRef = useRef(null)
    const headerInView = useInView(headerRef, { once: false, amount: 0.3 })
    const gridInView = useInView(gridRef, { once: false, amount: 0.1 })
    const popularInView = useInView(popularRef, { once: false, amount: 0.2 })

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const transformPodcastData = (item: ExpandedPodcast): VideoProps => ({
        title: item.title || "Untitled Podcast",
        name: item.authorData?.name || "Unknown Author",
        avatarUrl: item.authorData?.imageUrl || "/images/avatar.png",
        duration: item.duration || "Unknown duration",
        videoUrl: item.videoUrl || "/video.mp4",
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
                <div ref={headerRef} className='flex flex-col w-full justify-start md:items-center gap-4 md:gap-[120px] md:flex-row'>
                    <motion.h2 
                        className='text-center md:text-left'
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
                        Found {totalItems} episodes matching &quot;{searchTerm}&quot;
                    </motion.div>
                )}

                <div ref={gridRef} className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentEpisodes.length > 0 ? (
                        currentEpisodes.map((item, index) => (
                            <motion.div
                                key={`current-${startIndex + index}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <VideoCard props={item} />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div 
                            className="col-span-2 text-center py-8 text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {searchTerm ? 'No episodes found matching your search.' : 'No episodes available.'}
                        </motion.div>
                    )}
                </div>

                {totalItems > itemsPerPage && (
                    <motion.div 
                        className='mb-16 w-full'
                        initial={{ opacity: 0, y: 20 }}
                        animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
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

                <div ref={popularRef} className='mt-8 w-full'>
                    <motion.h2 
                        className='text-center md:text-left'
                        initial={{ opacity: 0, y: 20 }}
                        animate={popularInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Popular episodes
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                        {transformedEpisodes.slice(0, 2).map((item, index) => (
                            <motion.div
                                key={`popular-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={popularInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <VideoCard props={item} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}