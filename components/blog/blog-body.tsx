import React from 'react'
import Container from '../universal/container'
import Image from 'next/image'
import { LineStroke } from '../vectors/line-stroke'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { articles } from '@/data/articles'
import ArticleCard from './article-card'

export default function BlogBody() {
    return (
        <Container>
            <div>
                <Link href={'/blog'} >
                    <Button variant={'outline'} className=' text-[#14141A] flex w-fit rounded-full'><ArrowLeft /></Button>
                </Link>
                <div className='py-6 flex flex-col gap-3'>
                    <h2>Lorem ipsum molestie nunc egestas pretium scelerisque turpis magna.</h2>
                    <div className="flex">
                        <div className='flex gap-2 items-center'>
                            <Image src={'/images/avatar.png'} width={24} height={24} alt='avatar image' />
                            <p className='font-medium'>John Doe</p>
                            <LineStroke className='ml-2' />
                        </div>
                        <div className='flex gap-4 items-center pl-4'>
                            <p className='font-medium'>5 minutes</p>
                            <LineStroke />
                        </div>
                        <div className='flex gap-4 items-center pl-4'>
                            <div className={`rounded-md text-sm font-medium px-2 py-1`} style={{ backgroundColor: '#5214CC', color: '#EEE5FF' }}>
                                Lifestyle and Travel
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className='mb-16 py-8 px-16 w-full max-w-[852px]'>
                        <h4 className='mb-2'>Content menu</h4>
                        <article className='text-sm md:text-xl leading-normal md:leading-[32px] -tracking-[0.003em] text-[#737380]'>Lorem ipsum proin a turpis facilisi rhoncus nisi erat egestas ac pellentesque sed cursus neque massa nibh nibh imperdiet non nec nisi sodales sagittis sem felis fringilla volutpat mus dignissim mauris iaculis nullam tellus massa sit accumsan a arcu pellentesque erat rhoncus volutpat tincidunt mauris risus urna mattis at nunc ut cursus pretium at faucibus aliquet tellus viverra venenatis mollis ut faucibus sem varius semper massa et urna risus gravida scelerisque proin dolor amet ut tristique scelerisque massa odio aliquet massa nullam gravida ullamcorper sit sit tempus ut neque egestas ultrices massa tincidunt elementum gravida duis aenean eleifend amet nunc vitae ullamcorper non augue libero tincidunt varius duis morbi amet turpis volutpat lacus ultrices urna pretium lectus nunc senectus et.</article>
                        <div className='flex w-full justify-center gap-6 my-8'>
                            <Image src={'/images/article-img-1.png'} width={490} height={416} className='rounded-2xl' alt='' />
                            <Image src={'/images/article-img-1.png'} width={490} height={416} className='rounded-2xl' alt='' />
                        </div>
                        <h4 className='mb-2'>Content menu</h4>
                        <article className='text-sm md:text-xl leading-normal md:leading-[32px] -tracking-[0.003em] text-[#737380]'>Lorem ipsum proin a turpis facilisi rhoncus nisi erat egestas ac pellentesque sed cursus neque massa nibh nibh imperdiet non nec nisi sodales sagittis sem felis fringilla volutpat mus dignissim mauris iaculis nullam tellus massa sit accumsan a arcu pellentesque erat rhoncus volutpat tincidunt mauris risus urna mattis at nunc ut cursus pretium at faucibus aliquet tellus viverra venenatis mollis ut faucibus sem varius semper massa et urna risus gravida scelerisque proin dolor amet ut tristique scelerisque massa odio aliquet massa nullam gravida ullamcorper sit sit tempus ut neque egestas ultrices massa tincidunt elementum gravida duis aenean eleifend amet nunc vitae ullamcorper non augue libero tincidunt varius duis morbi amet turpis volutpat lacus ultrices urna pretium lectus nunc senectus et.</article>
                    </div>
                </div>
                <div className='mt-8 mb-16'>
                    <h2>Similar Articles</h2>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {articles.slice(0, 3).map((item, index) => (
                            <ArticleCard key={index} props={item} />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}
