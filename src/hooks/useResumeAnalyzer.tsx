// ResumeAnalyzerContext.tsx
import { createContext, useContext, useState } from "react";
import { analyzeResumeText } from "../services/resumeAnalyzerService";

interface ResumeAnalyzerContextType {
    analyze: (resumeText: string | any, PROMPT: string) => Promise<any>;
    reset: () => void;
    loading: boolean;
    error: string | null;
    resume: string | null;
}

const ResumeAnalyzerContext = createContext<ResumeAnalyzerContextType | null>(null);

export const ResumeAnalyzerProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resume, setResume] = useState<string | null>(null);

    async function analyze(resumeText: string, PROMPT: string) {
        if (resumeText.trim().length < 100) {
            setError("Texto do currículo muito curto.");
            return;
        }

        setResume(resumeText);
        setLoading(true);
        setError(null);

        let feedback;
        try {
            feedback = await analyzeResumeText(resumeText, PROMPT);
        } catch (e) {
            console.log(e);
            setError("Não foi possível processar a análise.");
        } finally {
            setLoading(false);
        }
        return feedback;
    }

    function reset() {
        setError(null);
    }

    return (
        <ResumeAnalyzerContext.Provider
            value={{ analyze, reset, loading, error, resume }}
>
    {children}
    </ResumeAnalyzerContext.Provider>
);
};

export function useResumeAnalyzer() {
    const context = useContext(ResumeAnalyzerContext);
    if (!context) {
        throw new Error("useResumeAnalyzer deve ser usado dentro do ResumeAnalyzerProvider");
    }
    return context;
}
