"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm, Controller } from 'react-hook-form'
import { motion } from 'motion/react'
import { CheckCircle, Users, Mic, UserCheck, Package } from 'lucide-react'
import { toast } from 'sonner'

interface RequestFormData {
    name: string
    requestType: string
    speakerType?: string
    productType?: string
    expertType?: string
    guestType?: string
    streetType?: string
    description: string
    venue: string
    deadline: string
    doNotPromote: boolean
    isFeeBasedOpportunity: boolean
    eventType: 'webinar' | 'lecture' | 'conference'
}

const venues = [
    'Podcast',
    'Event',
    'Conference',
    'Educational Institution',
    'Corporate Training',
    'Workshop',
    'Panel Discussion',
    'Other'
]

const Container = ({ children, className = "", ...props }: { children: React.ReactNode, className: string }) => (
    <div className={`max-w-7xl mx-auto sm:px-6 lg:px-8 ${className}`} {...props}>
        {children}
    </div>
)

export default function RequestForm() {
    const [activeTab, setActiveTab] = React.useState<'experts' | 'guests' | 'speakers' | 'products' | 'street' | 'feedback'>('speakers')
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
    const [submitSuccess, setSubmitSuccess] = React.useState<boolean>(false)

    const requestForm = useForm<RequestFormData>({
        defaultValues: {
            name: '',
            requestType: 'Speakers',
            speakerType: '',
            productType: '',
            expertType: '',
            guestType: '',
            streetType: '',
            description: '',
            venue: '',
            deadline: '',
            doNotPromote: false,
            isFeeBasedOpportunity: false,
            eventType: 'webinar'
        }
    })

    const onRequestSubmit = async (fields: RequestFormData) => {
        const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
        const API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

        const TABLE_NAME = "tblLLZyo5Z7g8hVab";

        const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

        const headers = {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        }
        setIsSubmitting(true)

        // Convert boolean values to strings and format date for Airtable
        const convertedFields = {
            ...fields,
            doNotPromote: fields.doNotPromote ? "Yes" : "No",
            isFeeBasedOpportunity: fields.isFeeBasedOpportunity ? "Yes" : "No",
            deadline: fields.deadline ? new Date(fields.deadline).toLocaleDateString('en-GB').replace(/\//g, '-') : fields.deadline
        }

        const body = JSON.stringify({
            records: [
                {
                    fields: {
                        ...convertedFields
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
                toast.error("An error occured")
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            if (typeof window !== 'undefined') {
                toast.success("Your response was submitted successfully!")
                requestForm.reset()
                setIsSubmitting(false)
                setSubmitSuccess(true)
                setTimeout(() => setSubmitSuccess(false), 5000)
            }

        } catch (error) {
            console.error("Error posting record to Airtable:", error);
        }
    };

    const getTabContent = () => {
        switch (activeTab) {
            case 'experts':
                return {
                    title: 'What type of expert are you looking for?',
                    placeholder: 'Seeking cybersecurity expert for financial services consultation',
                    field: 'expertType',
                    example: 'ex: Cybersecurity expert with 10+ years in financial services'
                }
            case 'guests':
                return {
                    title: 'What type of guest are you looking for?',
                    placeholder: 'Looking for entrepreneur who built a successful tech startup',
                    field: 'guestType',
                    example: 'ex: Entrepreneur who built a successful tech startup from scratch'
                }
            case 'speakers':
                return {
                    title: 'What type of speaker are you looking for?',
                    placeholder: 'Seeking panelist for webinar on cyber security in the financial sector',
                    field: 'speakerType',
                    example: 'ex: Seeking panelist for webinar on cyber security in the financial sector'
                }
            case 'products':
                return {
                    title: 'What type of products are you looking for?',
                    placeholder: 'Need innovative tech gadgets for product review',
                    field: 'productType',
                    example: 'ex: Need Father\'s Day gifts for dads who like the outdoors'
                }
            case 'street':
                return {
                    title: 'What type of man on the street interview are you looking for?',
                    placeholder: 'Looking for diverse opinions on current events',
                    field: 'streetType',
                    example: 'ex: Random people to interview about their morning routine'
                }
            default:
                return {
                    title: 'What are you looking for?',
                    placeholder: 'Describe what you need...',
                    field: 'speakerType',
                    example: 'ex: Describe your requirements'
                }
        }
    }

    const tabContent = getTabContent()

    const tabOptions = [
        { value: 'experts', label: 'Experts', icon: UserCheck },
        { value: 'guests', label: 'Guests', icon: Users },
        { value: 'speakers', label: 'Speakers', icon: Mic },
        { value: 'products', label: 'Products', icon: Package },
        // { value: 'street', label: 'Man On The Street', icon: MapPin },
        // { value: 'feedback', label: 'Share Feedback', icon: MessageSquare },
    ]

    return (
        <Container className="mb-8 flex-col py-5 px-0 sm:px-4">
            <div className="w-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="sm:text-center mb-8">
                    <h5 className="text-start md:text-center text-base sm:text-2xl font-semibold text-gray-900 mb-2">New Request - <span className='font-medium text-gray-600'>What are you looking for today?</span></h5>
                </div>

                {/* Tab Navigation */}
                <div className="flex w-full justify-center mb-12">
                    {/* Desktop Navigation (hidden on mobile) */}
                    <div className="hidden md:flex bg-[#EDEDFA] rounded-2xl p-2 gap-2 border border-[#E1E1E5] min-w-max">
                        {tabOptions.map((tab) => {
                            const IconComponent = tab.icon;
                            return (
                                <button
                                    key={tab.value}
                                    onClick={() => setActiveTab(tab.value as "experts" | "guests" | "speakers" | "products" | "street" | "feedback")}
                                    className={`px-4 md:px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap cursor-pointer ${activeTab === tab.value
                                        ? 'bg-[#1F1F99] text-white shadow-lg'
                                        : 'text-[#737380] hover:text-[#1F1F99]'
                                        }`}
                                >
                                    <IconComponent className="w-4 h-4 mr-2 inline" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile Navigation (dropdown) */}
                    <div className="md:hidden w-full max-w-xs">
                        <Select
                            value={activeTab}
                            onValueChange={(value) => setActiveTab(value as "experts" | "guests" | "speakers" | "products" | "street" | "feedback")}
                        >
                            <SelectTrigger className="w-full h-14 bg-[#EDEDFA] border border-[#E1E1E5] rounded-xl px-4 font-medium">
                                <div className="flex items-center">
                                    {(() => {
                                        const activeTabConfig = tabOptions.find(tab => tab.value === activeTab);
                                        const IconComponent = activeTabConfig?.icon || Mic;
                                        return (
                                            <>
                                                <IconComponent className="w-4 h-4 mr-2" />
                                                <span>{activeTabConfig?.label || 'Select'}</span>
                                            </>
                                        );
                                    })()}
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                {tabOptions.map((tab) => {
                                    const IconComponent = tab.icon;
                                    return (
                                        <SelectItem key={tab.value} value={tab.value}>
                                            <div className="flex items-center">
                                                <IconComponent className="w-4 h-4 mr-2" />
                                                {tab.label}
                                            </div>
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
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
                            Request submitted successfully! We&apos;ll match you with suitable candidates.
                        </span>
                    </motion.div>
                )}

                {/* Request Forms */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-8">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    {...requestForm.register('name', { required: 'Please enter your name' })}
                                    id="name"
                                    placeholder="Enter your full name"
                                    className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                />
                                {requestForm.formState.errors.name && (
                                    <p className="text-sm text-red-600 mt-1">
                                        {requestForm.formState.errors.name.message}
                                    </p>
                                )}
                            </div>
                            {/* Dynamic Field Based on Tab */}
                            <div>
                                <label htmlFor={tabContent.field} className="block text-sm font-medium text-gray-700 mb-2">
                                    {tabContent.title} *
                                </label>
                                <p className="text-sm text-gray-500 mb-3 italic">
                                    {tabContent.example}
                                </p>
                                <input
                                    {...requestForm.register(tabContent.field as keyof RequestFormData, { required: 'This field is required' })}
                                    id={tabContent.field}
                                    placeholder={tabContent.placeholder}
                                    className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]"
                                />
                                {requestForm.formState.errors[tabContent.field as keyof RequestFormData] && (
                                    <p className="text-sm text-red-600 mt-1">
                                        {requestForm.formState.errors[tabContent.field as keyof RequestFormData]?.message}
                                    </p>
                                )}
                            </div>

                            {/* Concerned About Revealing Your Story Idea (only for certain tabs) */}
                            {(activeTab === 'speakers' || activeTab === 'experts' || activeTab === 'guests') && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-blue-700 font-medium italic">
                                        Concerned About Revealing Your Story Idea?
                                    </p>
                                </div>
                            )}

                            {/* Description */}
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Add a description
                                </label>
                                <textarea
                                    {...requestForm.register('description')}
                                    id="description"
                                    placeholder={`Be as specific as possible about the type of ${activeTab.slice(0, -1)} you need!`}
                                    rows={6}
                                    className="bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px] resize-none"
                                />
                            </div>

                            {/* Venue/Where will this appear */}
                            <div>
                                <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                                    {activeTab === 'products'
                                        ? 'Where will this product be featured?'
                                        : `Where will this ${activeTab.slice(0, -1)} appear?`
                                    }
                                </label>
                                <Controller
                                    name="venue"
                                    control={requestForm.control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="border-[#E1E1E5] border rounded-[8px] h-14 outline-none text-sm text-[#737380] w-full font-normal">
                                                <SelectValue placeholder="ex: Podcast, Event, Conference, Educational Institutions, etc." />
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
                                        className="mt-1 w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary focus:ring-2"
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
                                        className="mt-1 w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary focus:ring-2"
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

                            {/* Event Type Buttons (only for speakers/experts/guests) */}
                            {(activeTab === 'speakers' || activeTab === 'experts' || activeTab === 'guests') && (
                                <div className="flex gap-3 flex-wrap">
                                    <button
                                        type="button"
                                        onClick={() => requestForm.setValue('eventType', 'webinar')}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all cursor-pointer ${requestForm.watch('eventType') === 'webinar'
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-300 text-gray-700 hover:border-primary'
                                            }`}
                                    >
                                        📺 WEBINAR
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => requestForm.setValue('eventType', 'lecture')}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all cursor-pointer ${requestForm.watch('eventType') === 'lecture'
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-300 text-gray-700 hover:border-primary'
                                            }`}
                                    >
                                        🎓 LECTURE
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => requestForm.setValue('eventType', 'conference')}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all cursor-pointer ${requestForm.watch('eventType') === 'conference'
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-300 text-gray-700 hover:border-primary'
                                            }`}
                                    >
                                        🏢 CONFERENCE
                                    </button>
                                </div>
                            )}

                            <Button
                                type="button"
                                onClick={requestForm.handleSubmit(onRequestSubmit)}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting Request...' : 'Submit Request'}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Container>
    )
}