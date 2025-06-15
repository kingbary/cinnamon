import React from 'react'
import { PlayIcon } from '../vectors/play-icon'
import Image from 'next/image'
import { LineStroke } from '../vectors/line-stroke'

type Props = {
    title: string;
    name: string;
    avatarUrl: string;
    duration: string;
    tag: {
        text: string;
        bgColor: string;
        textColor: string;
    }
}

export default function VideoCard({ props }: { props: Props }) {
    return (
        <div className='bg-white rounded-4xl flex flex-col gap-2 w-full p-1 overflow-hidden z-50'>
            <div className='relative bg-[#00000033] bg-[url(/images/video-overlay.png)] w-full h-[320px] rounded-[28px]'>
                <span className='absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 z-50'>
                    <PlayIcon />
                </span>
            </div>
            <div className='py-6 px-4 flex flex-col gap-3'>
                <h4>{props.title}</h4>
                <div className="flex">
                    <div className='flex gap-2 items-center'>
                        <Image src={props.avatarUrl} width={24} height={24} alt='avatar image' />
                        <p className='font-medium'>{props.name}</p>
                        <LineStroke className='ml-2' />
                    </div>
                    <div className='flex gap-4 items-center pl-4'>
                        <p className='font-medium'>{props.duration}</p>
                        <LineStroke />
                    </div>
                    <div className='flex gap-4 items-center pl-4'>
                        <div className={`rounded-md text-sm font-medium px-2 py-1`} style={{backgroundColor: props.tag.bgColor, color: props.tag.textColor}}>
                            {props.tag.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
