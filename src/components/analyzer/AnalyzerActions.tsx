import { Loader2, Zap } from 'lucide-react'
import {useI18n} from "../../i18n";

interface Props {
    disabled: boolean
    loading: boolean
    onAnalyze: () => void
}

export function AnalyzerActions({ disabled, loading, onAnalyze }: Props) {
    const { t } = useI18n();

    return (
        <button
            disabled={disabled || loading}
            onClick={onAnalyze}
            className={`w-full mt-10 px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 ${
                disabled || loading
                    ? 'bg-slate-100 text-slate-400'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
        >
            {loading ? (
                <>
                    <Loader2 className="animate-spin" />
                    {t.btnProcess}
                </>
            ) : (
                <>
                    <Zap />
                    {t.btnAnalyze}
                </>
            )}
        </button>
    )
}
