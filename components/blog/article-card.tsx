import React from 'react'
import Image from 'next/image'
import { LineStroke } from '../vectors/line-stroke'
import Link from 'next/link';

type Props = {
    title: string;
    author: string;
    avatarUrl: string;
    readTime: string;
    tag: string;
    content: string;
    id: string;
    articleImg: string;
}

export default function ArticleCard({ props }: { props: Props }) {
    return (
        <div className='bg-white rounded-4xl flex flex-col gap-2 w-full p-1 overflow-hidden z-50 shadow-custom'>
            <div className='bg-[#00000033] w-full h-[320px] rounded-[28px]' style={{ backgroundImage: `url(${props.articleImg})` }}>
            </div>
            <div className='py-6 px-4 flex flex-col gap-3'>
                <h4>{props.title}</h4>
                <div className="flex">
                    <div className='flex gap-2 items-center'>
                        <Image src={props.avatarUrl} width={24} height={24} alt='avatar image' />
                        <p className='font-medium text-sm xl:text-base whitespace-nowrap'>{props.author}</p>
                        <LineStroke className='ml-2' />
                    </div>
                    <div className='flex gap-4 items-center pl-4'>
                        <p className='font-medium text-sm xl:text-base whitespace-nowrap'>{props.readTime}</p>
                        <LineStroke />
                    </div>
                    <div className='flex gap-4 items-center pl-4'>
                        <div className={`rounded-md text-xs xl:text-sm whitespace-nowrap font-medium px-2 py-1`} style={{ backgroundColor: '#CC1452', color: '#FFE5EE' }}>
                            {props.tag}
                        </div>
                    </div>
                </div>
                <div className='text-[#737380]'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {props.content}
                </div>
                <div>
                    <Link href={`/blog/${props.id}`} className='text-primary font-medium hover:underline'>Read Full Article</Link>
                </div>
            </div>
        </div>
    )
}
