import { FeedbackCard } from './FeedbackCard'
import { ActionableTips } from './ActionableTips'
import { Comparison } from './Comparison'
import type {OverallFeedback} from "../../models/OverallFeedback.ts";

export function ResultsSection({ data }: { data: OverallFeedback }) {
    return (
        <section id="results-section" className="py-20 max-w-5xl mx-auto space-y-12">
            <FeedbackCard data={data} />
            <ActionableTips tips={data.actionableTips} />
            <Comparison comparison={data.comparison} />
        </section>
    )
}
