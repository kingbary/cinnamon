"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { motion } from 'motion/react'
import { Send, MessageSquare, Star, CheckCircle } from 'lucide-react'
import Container from '@/components/universal/container'
interface QuoteFormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
    serviceType: string
    budget: string
    timeline: string
    description: string
    additionalServices: string[]
}

interface FeedbackFormData {
    name: string
    email: string
    rating: number
    category: string
    message: string
}

const serviceTypes = [
    'Media Relations',
    'Crisis Communication',
    'Event PR',
    'Product Launch',
    'Brand Reputation',
    'Social Media PR',
    'Internal Communications',
    'Other'
]

const budgetRanges = [
    'Under ₦100,000',
    '₦100,000 - ₦250,000',
    '₦250,000 - ₦500,000',
    '₦500,000 - ₦1,000,000',
    '₦1,000,000+'
]

const timelineOptions = [
    'Immediate (1-2 weeks)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)'
]

const additionalServices = [
    'Press Release Writing',
    'Media Kit Creation',
    'Press Conference Organization',
    'Media Training',
    'Social Media Management',
    'Content Creation',
    'Analytics & Reporting'
]

export default function RequestQuote() {
    const [activeTab, setActiveTab] = useState<'quote' | 'feedback'>('quote')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const quoteForm = useForm<QuoteFormData>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            serviceType: '',
            budget: '',
            timeline: '',
            description: '',
            additionalServices: []
        }
    })

    const feedbackForm = useForm<FeedbackFormData>({
        defaultValues: {
            name: '',
            email: '',
            rating: 5,
            category: '',
            message: ''
        }
    })

    const onQuoteSubmit = async () => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setSubmitSuccess(true)
        quoteForm.reset()

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
    }

    const onFeedbackSubmit = async () => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setSubmitSuccess(true)
        feedbackForm.reset()

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
    }

    return (
        <Container className="mb-8 px-0 flex-col py-5">
            <div className="w-full">
                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-[#EDEDFA] rounded-2xl p-2 flex gap-2 border border-[#E1E1E5]">
                        <button
                            onClick={() => setActiveTab('quote')}
                            className={`px-4 md:px-8 py-3 rounded-xl font-medium transition-all ${activeTab === 'quote'
                                ? 'bg-[#1F1F99] text-white shadow-lg'
                                : 'text-[#737380] hover:text-[#1F1F99]'
                                }`}
                        >
                            <Send className="w-4 h-4 mr-2 inline" />
                            Request Quote
                        </button>
                        <button
                            onClick={() => setActiveTab('feedback')}
                            className={`px-4 md:px-8 py-3 rounded-xl font-medium transition-all ${activeTab === 'feedback'
                                ? 'bg-[#1F1F99] text-white shadow-lg'
                                : 'text-[#737380] hover:text-[#1F1F99]'
                                }`}
                        >
                            <MessageSquare className="w-4 h-4 mr-2 inline" />
                            Share Feedback
                        </button>
                    </div>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-8 flex items-center gap-3 max-w-2xl mx-auto"
                    >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-700 font-medium">
                            {activeTab === 'quote'
                                ? 'Quote request submitted successfully! We\'ll get back to you within 24 hours.'
                                : 'Feedback submitted successfully! Thank you for your input.'
                            }
                        </span>
                    </motion.div>
                )}

                {/* Quote Request Form */}
                {activeTab === 'quote' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex w-full h-fit"
                    >
                        <div className="hidden bg-[#1F1F99] min-h-[600px] w-full rounded-l-[40px] lg:block"></div>
                        <div className="h-full w-full rounded-3xl md:rounded-tl-none lg:rounded-bl-none lg:rounded-r-[40px] py-16 px-4 lg:px-[88px] border lg:border-y lg:border-r lg:border-l-0">
                            <div className="text-center mb-8">
                                <h3 className="principle-card-title max-w-[640px] text-center mx-auto" style={{ color: '#1F1F99' }}>
                                    Ready to Build the Recognition your Expertise Deserves?
                                </h3>
                                <p className="text-[#737380] max-w-2xl mx-auto mt-4">
                                    Tell us about your PR needs and we&apos;ll provide you with a customized strategy and quote
                                    tailored to your business objectives.
                                </p>
                            </div>

                            <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="flex flex-col gap-3">
                                {/* Personal Information */}
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="firstName" className="sr-only">First Name</label>
                                        <input
                                            {...quoteForm.register('firstName', { required: 'This field is required' })}
                                            id="firstName"
                                            placeholder="First Name"
                                            className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                        />
                                        {quoteForm.formState.errors.firstName && (
                                            <p className="text-sm text-red-600 mt-1">{quoteForm.formState.errors.firstName.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="sr-only">Last Name</label>
                                        <input
                                            {...quoteForm.register('lastName', { required: 'This field is required' })}
                                            id="lastName"
                                            placeholder="Last Name"
                                            className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                        />
                                        {quoteForm.formState.errors.lastName && (
                                            <p className="text-sm text-red-600 mt-1">{quoteForm.formState.errors.lastName.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input
                                            {...quoteForm.register('email', {
                                                required: 'This field is required',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Please enter a valid email address'
                                                }
                                            })}
                                            type="email"
                                            id="email"
                                            placeholder="Email Address"
                                            className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                        />
                                        {quoteForm.formState.errors.email && (
                                            <p className="text-sm text-red-600 mt-1">{quoteForm.formState.errors.email.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="sr-only">Phone</label>
                                        <input
                                            {...quoteForm.register('phone')}
                                            id="phone"
                                            placeholder="Phone Number (Optional)"
                                            className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="sr-only">Company</label>
                                    <input
                                        {...quoteForm.register('company')}
                                        id="company"
                                        placeholder="Company/Organization (Optional)"
                                        className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                    />
                                </div>

                                {/* Service Details */}
                                <div className="grid md:grid-cols-3 gap-3">
                                    <div>
                                        <Controller
                                            name="serviceType"
                                            control={quoteForm.control}
                                            rules={{ required: 'Please select a service type' }}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger
                                                        className={`border-[#E1E1E5] border rounded-[8px] h-14 outline-none text-sm text-[#737380] w-full font-normal ${quoteForm.formState.errors.serviceType ? 'border-red-600' : ''}`}
                                                    >
                                                        <SelectValue placeholder="Service Type *" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {serviceTypes.map((service) => (
                                                            <SelectItem key={service} value={service}>
                                                                {service}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {quoteForm.formState.errors.serviceType && (
                                            <p className="text-sm text-red-600 mt-1">{quoteForm.formState.errors.serviceType.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Controller
                                            name="budget"
                                            control={quoteForm.control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger
                                                        className="border-[#E1E1E5] border rounded-[8px] h-14 outline-none text-sm text-[#737380] w-full font-normal"
                                                    >
                                                        <SelectValue placeholder="Budget Range" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {budgetRanges.map((budget) => (
                                                            <SelectItem key={budget} value={budget}>
                                                                {budget}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>

                                    <div>
                                        <Controller
                                            name="timeline"
                                            control={quoteForm.control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger
                                                        className="border-[#E1E1E5] border rounded-[8px] h-14 outline-none text-sm text-[#737380] w-full font-normal"
                                                    >
                                                        <SelectValue placeholder="Timeline" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {timelineOptions.map((timeline) => (
                                                            <SelectItem key={timeline} value={timeline}>
                                                                {timeline}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="sr-only">Project Description</label>
                                    <textarea
                                        {...quoteForm.register('description', {
                                            required: 'This field is required',
                                            minLength: {
                                                value: 50,
                                                message: 'Please provide a detailed description (at least 50 characters)'
                                            }
                                        })}
                                        id="description"
                                        placeholder="Describe your PR needs, goals, and any specific requirements..."
                                        rows={6}
                                        className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px] resize-none"
                                    />
                                    {quoteForm.formState.errors.description && (
                                        <p className="text-sm text-red-600 mt-1">{quoteForm.formState.errors.description.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#5C5C66] mb-3">
                                        Additional Services (Optional)
                                    </label>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {additionalServices.map((service) => (
                                            <label key={service} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    value={service}
                                                    {...quoteForm.register('additionalServices')}
                                                    className="w-4 h-4 text-[#1F1F99] bg-[#EDEDFA] border border-[#E1E1E5] rounded focus:ring-[#1F1F99] focus:ring-2"
                                                />
                                                <span className="text-[#737380] text-sm">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-fit mt-4">
                                    {isSubmitting ? 'Submitting...' : 'Get Your Quote'}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}

                {/* Feedback Form */}
                {activeTab === 'feedback' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex w-full h-fit"
                    >
                        <div className="hidden bg-[#1F1F99] min-h-[600px] w-full rounded-l-[40px] lg:block"></div>
                        <div className="h-full w-full rounded-3xl md:rounded-tl-none lg:rounded-bl-none lg:rounded-r-[40px] py-16 px-4 lg:px-[88px] border lg:border-y lg:border-r lg:border-l-0">
                            <div className="text-center mb-8">
                                <h3 className="principle-card-title max-w-[640px] text-center mx-auto" style={{ color: '#1F1F99' }}>
                                    Share Your Feedback
                                </h3>
                                <p className="text-[#737380] max-w-2xl mx-auto mt-4">
                                    We value your opinion! Help us improve our services by sharing your experience,
                                    suggestions, or any concerns you may have.
                                </p>
                            </div>

                            <form onSubmit={feedbackForm.handleSubmit(onFeedbackSubmit)} className="flex flex-col gap-3 max-w-2xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="feedbackName" className="sr-only">Name</label>
                                        <input
                                            {...feedbackForm.register('name', { required: 'This field is required' })}
                                            id="feedbackName"
                                            placeholder="Name"
                                            className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                        />
                                        {feedbackForm.formState.errors.name && (
                                            <p className="text-sm text-red-600 mt-1">{feedbackForm.formState.errors.name.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="feedbackEmail" className="sr-only">Email</label>
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
                                            placeholder="Email Address"
                                            className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                        />
                                        {feedbackForm.formState.errors.email && (
                                            <p className="text-sm text-red-600 mt-1">{feedbackForm.formState.errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#5C5C66] mb-3">
                                        Rating *
                                    </label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((rating) => (
                                            <button
                                                key={rating}
                                                type="button"
                                                onClick={() => feedbackForm.setValue('rating', rating)}
                                                className={`p-2 rounded-lg transition-all ${feedbackForm.watch('rating') >= rating
                                                    ? 'text-yellow-500 bg-yellow-500/20'
                                                    : 'text-gray-400 hover:text-yellow-500'
                                                    }`}
                                            >
                                                <Star className="w-6 h-6 fill-current" />
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-sm text-[#737380] mt-2">
                                        {feedbackForm.watch('rating') === 1 && 'Poor'}
                                        {feedbackForm.watch('rating') === 2 && 'Fair'}
                                        {feedbackForm.watch('rating') === 3 && 'Good'}
                                        {feedbackForm.watch('rating') === 4 && 'Very Good'}
                                        {feedbackForm.watch('rating') === 5 && 'Excellent'}
                                    </p>
                                </div>

                                <div>
                                    <Controller
                                        name="category"
                                        control={feedbackForm.control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger
                                                    className="border-[#E1E1E5] border rounded-[8px] h-14 outline-none text-sm text-[#737380] w-full font-normal"
                                                >
                                                    <SelectValue placeholder="Select feedback category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="general">General Feedback</SelectItem>
                                                    <SelectItem value="service">Service Quality</SelectItem>
                                                    <SelectItem value="communication">Communication</SelectItem>
                                                    <SelectItem value="suggestion">Suggestion</SelectItem>
                                                    <SelectItem value="complaint">Complaint</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="feedbackMessage" className="sr-only">Message</label>
                                    <textarea
                                        {...feedbackForm.register('message', {
                                            required: 'This field is required',
                                            minLength: {
                                                value: 20,
                                                message: 'Please provide a message (at least 20 characters)'
                                            }
                                        })}
                                        id="feedbackMessage"
                                        placeholder="Share your thoughts, suggestions, or concerns..."
                                        rows={6}
                                        className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px] resize-none"
                                    />
                                    {feedbackForm.formState.errors.message && (
                                        <p className="text-sm text-red-600 mt-1">{feedbackForm.formState.errors.message.message}</p>
                                    )}
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-fit mt-4">
                                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </div>
        </Container>
    )
}
