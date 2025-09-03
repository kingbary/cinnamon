import PageHeader from '@/components/universal/page-header'
import RequestQuote from '@/components/request-quote'

export default function RequestQuotePage() {
    return (
        <div className="min-h-screen bg-background mx-2">
            <PageHeader
                title="Request Quote"
                subtext="Get a customized PR strategy quote or share your valuable feedback with our team"
            />
            <RequestQuote />
        </div>
    )
}
