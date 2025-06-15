import React from 'react'
import Container from '../universal/container'
import Image from 'next/image'
import SectionTitle from '../universal/section-title'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export default function FAQ() {
    const faq = [
        { question: "Lorem ipsum molestie nunc egestas pretium scelerisque turpis magna.", answer: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim." },
        { question: "Lorem ipsum amet tristique fames ut sapien bibendum vel donec felis vel varius tristique non integer.", answer: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim." },
        { question: "Lorem ipsum lectus nunc risus diam eu risus lacus lacus vitae commodo vitae quis dolor parturient.", answer: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim." },
        { question: "Lorem ipsum porttitor nam condimentum faucibus ornare a mauris nec mauris diam convallis gravida lorem morbi.", answer: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim." },
        { question: "Lorem ipsum purus id velit odio duis cras nibh tortor habitant quis porttitor vitae mauris arcu.", answer: "Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim." },
    ]
    return (
        <Container className='my-8 pt-8 pb-16'>
            <div className='w-full flex flex-col justify-between gap-8 md:flex-row lg:gap-[120px]'>
                <div className='w-full'>
                    <Image src={'/images/faq-image.png'} width={504} height={728} alt='Lady thinking' loading='lazy' />
                </div>
                <div className='w-full'>
                    <SectionTitle text='Frequently asked questions' />
                    <div>
                        <Accordion type="single" collapsible>
                            {faq.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
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
