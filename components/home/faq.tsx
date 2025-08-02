import React from 'react'
import Container from '../universal/container'
import Image from 'next/image'
import SectionTitle from '../universal/section-title'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export default function FAQ() {
    const faq = [
        { question: "What kind of professionals do you work with?", answer: "We work with high-performing individuals across tech, business, and the creative industries, especially those looking to build international recognition or enhance their thought leadership." },
        { question: "Do you only work with people pursuing global recognition?", answer: "Not at all. While many of our clients are building international profiles, we also support professionals focused on local impact, thought leadership, career transitions, or speaking opportunities. If you’re serious about being seen, we’re here to help." },
        { question: "Can I be featured in the press if I don’t have a big following on social media?", answer: "Absolutely. Our work is grounded in your expertise and story, not your social metrics. We know how to position your achievements in a way that resonates with journalists and audiences depending on your goals." },
        { question: "Do you guarantee placements?", answer: "We don’t offer blanket guarantees. No reputable PR agency should. What we do promise is a tailored strategy, strong editorial judgment, and access to a network of trusted media and podcast contacts." },
        { question: "How soon can I get started?", answer: "Once we’ve had a discovery call and aligned on your goals, we typically begin onboarding within a week." },
    ]
    return (
        <Container className='my-8 pt-8 pb-16'>
            <div className='w-full flex flex-col justify-between items-center gap-8 lg:flex-row lg:gap-[120px]'>
                <div className='w-full hidden lg:block'>
                    <Image src={'/images/faq-image.png'} width={504} height={728} alt='Lady thinking' loading='lazy' />
                </div>
                <div className='w-full'>
                    <SectionTitle text='Frequently asked questions' />
                    <div>
                        <Accordion type="single" collapsible>
                            {faq.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className='cursor-pointer'>{item.question}</AccordionTrigger>
                                    <AccordionContent> {item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </Container>
    )
}
