"use client"
import React, { useState, useMemo } from 'react'
import { ArrowLeft } from '../vectors/arrow-left'

interface PaginationProps {
    totalItems?: number
    itemsPerPage?: number
    onPageChange?: (page: number) => void
    initialPage?: number
}

interface HandlePageChange {
    (page: number): void
}

export default function Pagination({
    totalItems = 0,
    itemsPerPage = 10,
    onPageChange = () => { },
    initialPage
}: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(initialPage ?? 1)

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems)

    const pageNumbers = useMemo(() => {
        const pages = []
        const maxVisiblePages = 5

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            pages.push(1)

            let startPage = Math.max(2, currentPage - 1)
            let endPage = Math.min(totalPages - 1, currentPage + 1)

            if (currentPage <= 3) {
                endPage = 4
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - 3
            }

            if (startPage > 2) {
                pages.push('...')
            }

            for (let i = startPage; i <= endPage; i++) {
                if (i !== 1 && i !== totalPages) {
                    pages.push(i)
                }
            }

            if (endPage < totalPages - 1) {
                pages.push('...')
            }

            if (totalPages > 1) {
                pages.push(totalPages)
            }
        }

        return pages
    }, [currentPage, totalPages])

    // Mobile version with limited page numbers
    const mobilePageNumbers = useMemo(() => {
        const pages = []

        // Show current page and one on each side (max 3 numbers)
        let start = Math.max(1, currentPage - 1)
        let end = Math.min(totalPages, currentPage + 1)

        // Adjust if we're at the beginning or end
        if (currentPage === 1) {
            end = Math.min(totalPages, 3)
        } else if (currentPage === totalPages) {
            start = Math.max(1, totalPages - 2)
        }

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        return pages
    }, [currentPage, totalPages])

    const handlePageChange: HandlePageChange = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            setCurrentPage(page)
            onPageChange(page)
        }
    }

    const handlePrevious = () => {
        handlePageChange(currentPage - 1)
    }

    const handleNext = () => {
        handlePageChange(currentPage + 1)
    }

    if (totalPages <= 1) {
        return null
    }

    return (
        <div className='mt-8'>
            {/* Desktop version */}
            <div className='hidden md:flex w-full items-center justify-between px-4 py-2 text-[#919199] border border-[#E6E6F2] rounded-2xl'>
                <div className='w-full'>
                    Showing <span className='font-medium text-gray-900'>{startItem}-{endItem}</span> of{' '}
                    <span className='font-medium text-gray-900'>{totalItems.toLocaleString()}</span> episodes
                </div>

                <div className='flex w-full items-center justify-center gap-1'>
                    {pageNumbers.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && handlePageChange(page)}
                            disabled={page === '...'}
                            className={`
                                px-3 py-2 min-w-[40px] flex items-center justify-center text-sm rounded-lg
                                transition-colors duration-200
                                ${page === currentPage
                                    ? 'text-primary font-bold'
                                    : page === '...'
                                        ? 'text-[#919199] cursor-default'
                                        : 'text-[#919199] hover:text-primary hover:bg-gray-50'
                                }
                            `}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <div className='flex gap-2 w-full justify-end'>
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`
                            size-12 inline-flex justify-center items-center cursor-pointer border rounded-lg p-3
                            transition-colors duration-200
                            ${currentPage === 1
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-[#C1C1CC] text-gray-600 hover:border-gray-400 hover:text-gray-800'
                            }
                        `}
                        aria-label="Previous page"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`
                            size-12 inline-flex justify-center items-center border rounded-lg p-3 cursor-pointer
                            transition-colors duration-200
                            ${currentPage === totalPages
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-[#C1C1CC] text-gray-600 hover:border-gray-400 hover:text-gray-800'
                            }
                        `}
                        aria-label="Next page"
                    >
                        <ArrowLeft className="rotate-180" />
                    </button>
                </div>
            </div>

            {/* Mobile version */}
            <div className='md:hidden space-y-4'>
                {/* Mobile stats */}
                <div className='text-center text-sm text-[#919199]'>
                    Showing <span className='font-medium text-gray-900'>{startItem}-{endItem}</span> of{' '}
                    <span className='font-medium text-gray-900'>{totalItems.toLocaleString()}</span>
                </div>

                {/* Mobile navigation */}
                <div className='flex items-center justify-between px-4'>
                    {/* Previous button */}
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`
                            flex items-center gap-2 px-3 py-2 text-sm rounded-lg border
                            transition-colors duration-200
                            ${currentPage === 1
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-[#C1C1CC] text-gray-600 hover:border-gray-400 hover:text-gray-800'
                            }
                        `}
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>

                    {/* Page numbers - simplified for mobile */}
                    <div className='flex items-center gap-1'>
                        {mobilePageNumbers.map((page, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(page)}
                                className={`
                                    px-3 py-2 min-w-[40px] flex items-center justify-center text-sm rounded-lg
                                    transition-colors duration-200
                                    ${page === currentPage
                                        ? 'text-primary font-bold bg-blue-50 border border-blue-200'
                                        : 'text-[#919199] hover:text-primary hover:bg-gray-50'
                                    }
                                `}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    {/* Next button */}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`
                            flex items-center gap-2 px-3 py-2 text-sm rounded-lg border
                            transition-colors duration-200
                            ${currentPage === totalPages
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-[#C1C1CC] text-gray-600 hover:border-gray-400 hover:text-gray-800'
                            }
                        `}
                    >
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                    </button>
                </div>

                {/* Mobile page indicator */}
                {/* <div className='text-center text-xs text-[#919199]'>
                    Page {currentPage} of {totalPages}
                </div> */}
            </div>
        </div>
    )
}