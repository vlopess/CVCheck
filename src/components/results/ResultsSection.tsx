import { FeedbackCard } from './FeedbackCard'
import { ActionableTips } from './ActionableTips'
import { Comparison } from './Comparison'

export function ResultsSection({ data } : { data: any }) {
    const result = JSON.parse(data);
    return (
        <section id="results-section" className="py-20 max-w-5xl mx-auto space-y-12">
            <FeedbackCard data={result} />
            <ActionableTips tips={result.actionableTips} />
            <Comparison comparison={result.comparison} />
        </section>
    )
}
