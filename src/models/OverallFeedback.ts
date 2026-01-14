import type {ActionableTips} from "./ActionableTips.ts";
import type {Comparison} from "./Comparison.ts";

export interface OverallFeedback {
    score: number;
    strengths: string[];
    weaknesses: string[];
    internationalAlignment: string;
    overallFeedback: string;
    actionableTips: ActionableTips[];
    comparison: Comparison;
}
