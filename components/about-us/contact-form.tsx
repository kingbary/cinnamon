"use client"
import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type ContactFormData = {
    email: string;
    name: string;
    message: string;
}

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
        mode: 'all', defaultValues: {
            email: '',
            name: '',
            message: ''
        }
    })

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
                reset( )

            }

        } catch (error) {
            console.error("Error posting record to Airtable:", error);
        }
    };

    return (
        <Container className='mb-8 px-0'>
            <div className='flex w-full h-[500px]'>
                <div className='hidden bg-[#1F1F99] h-full w-full rounded-l-[40px] md:block'></div>
                <div className='h-full w-full rounded-3xl md:rounded-tl-none md:rounded-bl-none md:rounded-r-[40px] py-16 px-4 md:px-[88px] border md:border-y md:border-r md:border-l-0'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                        <div>
                            <label htmlFor="email" className='sr-only'>Email</label>
                            <input {...register('email', { required: 'This field is required' })} type="email" name='email' id='email' placeholder='Email address' className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg' />
                            {errors.email && (
                                <p className='text-sm text-red-600 mt-1'>{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="name" className='sr-only'>Name </label>
                            <input {...register('name', { required: 'This field is required' })} type="name" name='name' placeholder='Name' className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg' />
                            {errors.name && (
                                <p className='text-sm text-red-600 mt-1'>{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className='sr-only'>Message</label>
                            <textarea {...register('message', { required: 'This field is required' })} name="message" placeholder='Please type your message' id="message" className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg' rows={6} cols={4}></textarea>
                            {errors.message && (
                                <p className='text-sm text-red-600 mt-1'>{errors.message.message}</p>
                            )}
                        </div>
                        <Button type='submit' className='w-fit'>Send message</Button>
                    </form>
                </div>
            </div>
        </Container>
    )
}
