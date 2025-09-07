"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { motion } from 'motion/react'
import { Send, MessageSquare, CheckCircle } from 'lucide-react'
import Container from '@/components/universal/container'

interface RequestFormData {
    requestType: string
    speakerType: string
    description: string
    venue: string
    deadline: string
    doNotPromote: boolean
    isFeeBasedOpportunity: boolean
    eventType: 'webinar' | 'lecture' | 'conference'
}

interface FeedbackFormData {
    name: string
    email: string
    rating: number
    category: string
    message: string
}


const venues = [
    'Your Publication',
    'Podcast',
    'Event',
    'Conference',
    'Educational Institution',
    'Corporate Training',
    'Workshop',
    'Panel Discussion',
    'Other'
]

export default function RequestForm() {
    const [activeTab, setActiveTab] = useState<'request' | 'feedback'>('request')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const requestForm = useForm<RequestFormData>({
        defaultValues: {
            requestType: 'Speakers',
            speakerType: '',
            description: '',
            venue: '',
            deadline: '',
            doNotPromote: false,
            isFeeBasedOpportunity: false,
            eventType: 'webinar'
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

    const onRequestSubmit = async (data: RequestFormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('Request submitted:', data)
        setIsSubmitting(false)
        setSubmitSuccess(true)
        requestForm.reset()

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
    }

    const onFeedbackSubmit = async (data: FeedbackFormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('Feedback submitted:', data)
        setIsSubmitting(false)
        setSubmitSuccess(true)
        feedbackForm.reset()

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
    }

    return (
        <Container className="mb-8 px-0 flex-col py-5">
            <div className="w-full max-w-6xl mx-auto">

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-[#EDEDFA] rounded-2xl p-2 flex gap-2 border border-[#E1E1E5]">
                        <button
                            onClick={() => setActiveTab('request')}
                            className={`px-4 md:px-8 py-3 rounded-xl font-medium transition-all ${activeTab === 'request'
                                ? 'bg-[#1F1F99] text-white shadow-lg'
                                : 'text-[#737380] hover:text-[#1F1F99]'
                                }`}
                        >
                            <Send className="w-4 h-4 mr-2 inline" />
                            New Request
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
                        className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-8 flex items-center gap-3 max-w-4xl mx-auto"
                    >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-700 font-medium">
                            {activeTab === 'request'
                                ? 'Request submitted successfully! We\'ll match you with suitable candidates.'
                                : 'Feedback submitted successfully! Thank you for your input.'
                            }
                        </span>
                    </motion.div>
                )}

                {/* Request Form */}
                {activeTab === 'request' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >

                        <div className="bg-white border border-gray-200 rounded-lg p-8">
                            <form onSubmit={requestForm.handleSubmit(onRequestSubmit)} className="space-y-6">
                                {/* Speaker Type */}
                                <div>
                                    <label htmlFor="speakerType" className="block text-sm font-medium text-gray-700 mb-2">
                                        What type of speaker are you looking for? *
                                    </label>
                                    <p className="text-sm text-gray-500 mb-3 italic">
                                        ex: Seeking panelist for webinar on cyber security in the financial sector
                                    </p>
                                    <input
                                        {...requestForm.register('speakerType', { required: 'This field is required' })}
                                        id="speakerType"
                                        placeholder="Describe the type of speaker you need..."
                                        className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                    />
                                    {requestForm.formState.errors.speakerType && (
                                        <p className="text-sm text-red-600 mt-1">{requestForm.formState.errors.speakerType.message}</p>
                                    )}
                                </div>

                                {/* Concerned About Revealing Your Story Idea */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-blue-700 font-medium italic">
                                        Concerned About Revealing Your Story Idea?
                                    </p>
                                </div>

                                {/* Description */}
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                        Add a description
                                    </label>
                                    <textarea
                                        {...requestForm.register('description')}
                                        id="description"
                                        placeholder="Be as specific as possible about the type of speaker you need!"
                                        rows={6}
                                        className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px] resize-none"
                                    />
                                </div>

                                {/* Venue */}
                                <div>
                                    <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                                        Where will this speaker appear?
                                    </label>
                                    <Controller
                                        name="venue"
                                        control={requestForm.control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="border-[#E1E1E5] border rounded-[8px] h-14 outline-none text-sm text-[#737380] w-full font-normal ">
                                                    <SelectValue placeholder="ex: Your Publication, Podcast, Event, Conference, Educational Institutions, etc." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {venues.map((venue) => (
                                                        <SelectItem key={venue} value={venue}>
                                                            {venue}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    <p className="text-sm text-gray-500 mt-1 italic">
                                        Can&apos;t find your company? Just include it in the description.
                                    </p>
                                </div>

                                {/* Deadline */}
                                <div>
                                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                                        Add a deadline *
                                    </label>
                                    <div className="relative">
                                        <input
                                            {...requestForm.register('deadline', { required: 'This field is required' })}
                                            type="date"
                                            id="deadline"
                                            className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                                            {/* <Calendar className="w-5 h-5 text-gray-400" />
                                            <Clock className="w-5 h-5 text-gray-400" /> */}
                                        </div>
                                    </div>
                                    {requestForm.formState.errors.deadline && (
                                        <p className="text-sm text-red-600 mt-1">{requestForm.formState.errors.deadline.message}</p>
                                    )}
                                </div>

                                {/* Distribution Options */}
                                <div className="space-y-4">
                                    <h3 className="font-medium text-gray-700">Distribution</h3>

                                    <div className="flex items-start gap-3">
                                        <input
                                            {...requestForm.register('doNotPromote')}
                                            type="checkbox"
                                            id="doNotPromote"
                                            className="mt-1 w-4 h-4 text-[#6366F1] bg-white border-gray-300 rounded focus:ring-[#6366F1] focus:ring-2"
                                        />
                                        <div className="flex items-center gap-2">
                                            <label htmlFor="doNotPromote" className="text-sm text-gray-700">
                                                Do not promote this request on Cinnamon&apos;s social
                                            </label>
                                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                ?
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            {...requestForm.register('isFeeBasedOpportunity')}
                                            type="checkbox"
                                            id="isFeeBasedOpportunity"
                                            className="mt-1 w-4 h-4 text-[#6366F1] bg-white border-gray-300 rounded focus:ring-[#6366F1] focus:ring-2"
                                        />
                                        <div className="flex items-center gap-2">
                                            <label htmlFor="isFeeBasedOpportunity" className="text-sm text-gray-700">
                                                This is a fee-based opportunity
                                            </label>
                                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                ?
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Type Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => requestForm.setValue('eventType', 'webinar')}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all ${requestForm.watch('eventType') === 'webinar'
                                            ? 'border-[#6366F1] bg-[#6366F1] text-white'
                                            : 'border-gray-300 text-gray-700 hover:border-[#6366F1]'
                                            }`}
                                    >
                                        📺 WEBINAR
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => requestForm.setValue('eventType', 'lecture')}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all ${requestForm.watch('eventType') === 'lecture'
                                            ? 'border-[#6366F1] bg-[#6366F1] text-white'
                                            : 'border-gray-300 text-gray-700 hover:border-[#6366F1]'
                                            }`}
                                    >
                                        🎓 LECTURE
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => requestForm.setValue('eventType', 'conference')}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all ${requestForm.watch('eventType') === 'conference'
                                            ? 'border-[#6366F1] bg-[#6366F1] text-white'
                                            : 'border-gray-300 text-gray-700 hover:border-[#6366F1]'
                                            }`}
                                    >
                                        🏢 CONFERENCE
                                    </button>
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="bg-[#6366F1] hover:bg-[#5856EB]">
                                    {isSubmitting ? 'Submitting Request...' : 'Submit Request'}
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
                        className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-8"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Share Your Feedback
                            </h3>
                            <p className="text-gray-600">
                                We value your opinion! Help us improve our services by sharing your experience,
                                suggestions, or any concerns you may have.
                            </p>
                        </div>

                        <form onSubmit={feedbackForm.handleSubmit(onFeedbackSubmit)} className="space-y-6">
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

                            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#6366F1] hover:bg-[#5856EB]">
                                {isSubmitting ? 'Submitting Feedback...' : 'Submit Feedback'}
                            </Button>
                        </form>
                    </motion.div>
                )}
            </div>
        </Container>
    )
}