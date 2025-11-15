"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'sonner'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

type ContactFormData = {
    email: string;
    name: string;
    message: string;
    service: string;
}

export default function ContactForm() {
    const { register, handleSubmit, reset, control, formState: { errors } } = useForm<ContactFormData>({
        mode: 'all', defaultValues: {
            email: '',
            name: '',
            message: '',
        }
    })

    const headerRef = useRef(null)
    const formRef = useRef(null)
    const headerInView = useInView(headerRef, { once: false, amount: 0.3 })
    const formInView = useInView(formRef, { once: false, amount: 0.2 })

    const onSubmit = async (fields: ContactFormData) => {
        const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
        const API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

        const TABLE_NAME = "tbltthL3lKCaWJFBZ";

        const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

        const headers = {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        }

        const body = JSON.stringify({
            records: [
                {
                    fields: {
                        ...fields
                    },
                },
            ],
        });

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: body,
            });

            if (!response.ok && typeof window !== 'undefined') {
                toast.error("An error occored")
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            if (typeof window !== 'undefined') {
                toast.success("Your response was submitted succesfully!")
                reset()
            }

        } catch (error) {
            console.error("Error posting record to Airtable:", error);
        }
    };

    const selectOption = [
        { label: 'Marketing', value: 'marketing' },
        { label: 'Cloud computing', value: 'cloud-computing' },
        { label: 'Advance AI integration', value: 'ai-integration' },
    ]

    return (
        <Container className='mb-8 px-0 flex-col'>
            <div className='w-full'>
                <div ref={headerRef} className='flex flex-col items-center gap-6 py-16'>
                    <motion.h3
                        className='principle-card-title max-w-[640px] text-center'
                        style={{ color: '#1F1F99' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Build the Recognition your Expertise Deserves?
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={'#contact-form'}>
                            <Button>Book Consultation</Button>
                        </Link>
                    </motion.div>
                </div>
                <div ref={formRef} className='flex w-full h-fit'>
                    <motion.div
                        className='hidden bg-[#1F1F99] min-h-[500px] w-full rounded-l-[40px] lg:block'
                        initial={{ opacity: 0, x: -50 }}
                        animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.div
                        className='h-full w-full rounded-3xl md:rounded-tl-none lg:rounded-bl-none lg:rounded-r-[40px] py-16 px-4 lg:px-[88px] border lg:border-y lg:border-r lg:border-l-0'
                        initial={{ opacity: 0, x: 50 }}
                        animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3' id='contact-form'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <label htmlFor="email" className='sr-only'>Email</label>
                                <input {...register('email', { required: 'This field is required' })} type="email" name='email' id='email' placeholder='Email address' className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]' />
                                {errors.email && (
                                    <p className='text-sm text-red-600 mt-1'>{errors.email.message}</p>
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <label htmlFor="name" className='sr-only'>Name </label>
                                <input {...register('name', { required: 'This field is required' })} type="name" name='name' placeholder='Name' className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]' />
                                {errors.name && (
                                    <p className='text-sm text-red-600 mt-1'>{errors.name.message}</p>
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Controller
                                    name="service"
                                    control={control}
                                    rules={{ required: 'Please select a service type' }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger
                                                className={`border-[#E1E1E5] border rounded-[8px] h-14 outline-none text-sm text-[#737380] w-full font-normal ${errors.service ? 'border-red-600' : ''}`}
                                            >
                                                <SelectValue placeholder="What do you want to do? (select a service type)" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {selectOption.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.service && (
                                    <p className='text-sm text-red-600 mt-1'>{errors.service.message}</p>
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <label htmlFor="message" className='sr-only'>Message</label>
                                <textarea {...register('message', { required: 'This field is required' })} name="message" placeholder='Please type your message' id="message" className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]' rows={6} cols={4}></textarea>
                                {errors.message && (
                                    <p className='text-sm text-red-600 mt-1'>{errors.message.message}</p>
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={formInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <Button type='submit' className='w-fit'>Send message</Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </Container>
    )
}