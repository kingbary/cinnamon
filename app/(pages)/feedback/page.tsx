import FeedBackForm from '@/components/feedback/feedback-form'
import PageHeader from '@/components/universal/page-header'
import React from 'react'

export default function page() {
    return (
        <div className="min-h-screen bg-background mx-2">
            <PageHeader
                title="Feedback"
                subtext="We value your opinion! Help us improve our services by sharing your experience, suggestions, or any concerns you may have."
            />
            <FeedBackForm />
        </div>
    )
}
