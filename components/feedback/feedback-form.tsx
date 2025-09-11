"use client"
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { motion } from 'motion/react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

interface FeedbackFormData {
    name: string
    email: string
    rating: number
    category: string
    message: string
}

export default function FeedBackForm() {
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
    const [submitSuccess, setSubmitSuccess] = React.useState<boolean>(false)

    const feedbackForm = useForm<FeedbackFormData>({
        defaultValues: {
            name: '',
            email: '',
            rating: 5,
            category: '',
            message: ''
        }
    })
    const onFeedbackSubmit = async (fields: FeedbackFormData) => {
        const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
        const API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

        const TABLE_NAME = "tblGfivxnNO9XM6Yt";

        const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

        const headers = {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        }
        setIsSubmitting(true)

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
                setIsSubmitting(false)
                toast.error("An error occored")
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            if (typeof window !== 'undefined') {
                toast.success("Your response was submitted succesfully!")
                feedbackForm.reset()
                setIsSubmitting(false)
                setSubmitSuccess(true)
                setTimeout(() => setSubmitSuccess(false), 5000)
            }

        } catch (error) {
            console.error("Error posting record to Airtable:", error);
        }
    };
    return (
        <div className='my-8'>
            {submitSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-8 flex items-center gap-3 max-w-4xl mx-auto"
                >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-medium">Feedback submitted successfully! Thank you for your input.</span>
                </motion.div>
            )}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-4 md:p-8"
            >
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="feedbackName" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                            <input
                                {...feedbackForm.register('name', { required: 'This field is required' })}
                                id="feedbackName"
                                placeholder="Your name"
                                className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                            />
                            {feedbackForm.formState.errors.name && (
                                <p className="text-sm text-red-600 mt-1">{feedbackForm.formState.errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="feedbackEmail" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                            <input
                                {...feedbackForm.register('email', {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Please enter a valid email address'
                                    }
                                })}
                                type="email"
                                id="feedbackEmail"
                                placeholder="your.email@example.com"
                                className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                            />
                            {feedbackForm.formState.errors.email && (
                                <p className="text-sm text-red-600 mt-1">{feedbackForm.formState.errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Overall Rating *
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <button
                                    key={rating}
                                    type="button"
                                    onClick={() => feedbackForm.setValue('rating', rating)}
                                    className={`p-2 rounded-lg transition-all ${feedbackForm.watch('rating') >= rating
                                        ? 'text-yellow-500'
                                        : 'text-gray-300 hover:text-yellow-500'
                                        }`}
                                >
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            {feedbackForm.watch('rating') === 1 && 'Very Poor'}
                            {feedbackForm.watch('rating') === 2 && 'Poor'}
                            {feedbackForm.watch('rating') === 3 && 'Average'}
                            {feedbackForm.watch('rating') === 4 && 'Good'}
                            {feedbackForm.watch('rating') === 5 && 'Excellent'}
                        </p>
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <Controller
                            name="category"
                            control={feedbackForm.control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="border-[#E1E1E5] border rounded-[8px] h-14 outline-none text-sm text-[#737380] w-full font-normal">
                                        <SelectValue placeholder="Select feedback category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="general">General Feedback</SelectItem>
                                        <SelectItem value="platform">Platform Experience</SelectItem>
                                        <SelectItem value="matching">Speaker Matching</SelectItem>
                                        <SelectItem value="communication">Communication</SelectItem>
                                        <SelectItem value="suggestion">Feature Suggestion</SelectItem>
                                        <SelectItem value="bug">Bug Report</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>

                    <div>
                        <label htmlFor="feedbackMessage" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <textarea
                            {...feedbackForm.register('message', {
                                required: 'This field is required',
                                minLength: {
                                    value: 10,
                                    message: 'Please provide a detailed message (at least 10 characters)'
                                }
                            })}
                            id="feedbackMessage"
                            placeholder="Share your thoughts, suggestions, or concerns..."
                            rows={5}
                            className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px] resize-none"
                        />
                        {feedbackForm.formState.errors.message && (
                            <p className="text-sm text-red-600 mt-1">{feedbackForm.formState.errors.message.message}</p>
                        )}
                    </div>

                    <Button
                        type="button"
                        onClick={feedbackForm.handleSubmit(onFeedbackSubmit)}
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/80"
                    >
                        {isSubmitting ? 'Submitting Feedback...' : 'Submit Feedback'}
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}
