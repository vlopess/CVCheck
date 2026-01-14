import { CheckCircle, AlertCircle, Star } from "lucide-react";
import {useI18n} from "../../i18n";

interface FeedbackCardProps {
    data: {
        score: number;
        overallFeedback: string;
        strengths: string[];
        weaknesses: string[];
    };
}

export function FeedbackCard({ data }: FeedbackCardProps) {
    const { t } = useI18n();

    return (
        <section className="bg-white rounded-[2rem] border border-slate-200 p-10 shadow-sm relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 opacity-60" />

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
                <div className="max-w-xl">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <Star className="text-indigo-600" />
                        {t.feedbackHeader}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        {data.overallFeedback}
                    </p>
                </div>

                {/* Score */}
                <div className="shrink-0 flex flex-col items-center justify-center bg-white border-4 border-indigo-100 w-32 h-32 rounded-3xl shadow-inner">
          <span className="text-5xl font-black text-indigo-600 leading-none">
            {data.score}
          </span>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mt-1">
            {t.scoreLabel}
          </span>
                </div>
            </div>

            {/* Strengths / Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-5">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest">
                        <CheckCircle size={16} />
                        {t.strengthsHeader}
                    </div>
                    <ul className="space-y-4">
                        {data.strengths.map((s, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-700">
                                <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 shrink-0" />
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-5">
                    <div className="flex items-center gap-2 text-amber-600 font-bold uppercase text-xs tracking-widest">
                        <AlertCircle size={16} />
                        {t.weaknessesHeader}
                    </div>
                    <ul className="space-y-4">
                        {data.weaknesses.map((w, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-700">
                                <span className="w-2 h-2 mt-2 rounded-full bg-amber-400 shrink-0" />
                                {w}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
