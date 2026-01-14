import { useState } from 'react'
import type {OverallFeedback} from "../models/OverallFeedback.ts";
import { extractTextFromPdf } from '../services/extractTextFromPdf.ts'
import {analyzeResumeText} from "../services/resumeAnalyzerService.ts";
import {useI18n} from "../i18n";

export function useResumeAnalyzer() {
    const [result, setResult] = useState<OverallFeedback | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const { t } = useI18n();
    console.log(t);
    const RESUME_ANALYSIS_PROMPT = t.RESUME_ANALYSIS_PROMPT;
    console.log(RESUME_ANALYSIS_PROMPT);

    async function analyze(resumeText: string) {
        if (resumeText.trim().length < 100) {
            setError('Texto do currículo muito curto.')
            return
        }

        setLoading(true)
        setError(null)

        try {
            const feedback = await analyzeResumeText(resumeText, RESUME_ANALYSIS_PROMPT)
            setResult(feedback)
        } catch (e) {
            console.log(e);
            setError('Não foi possível processar a análise.')
        } finally {
            setLoading(false)
        }
    }

    function reset() {
        setResult(null)
        setError(null)
    }

    return {
        analyze,
        reset,
        result,
        loading,
        error,
    }
}
