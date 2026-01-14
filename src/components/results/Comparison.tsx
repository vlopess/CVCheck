import { ArrowRight } from "lucide-react";
import {useI18n} from "../../i18n";

interface ComparisonData {
    originalSnippet: string;
    improvedSnippet: string;
}

interface ComparisonProps {
    comparison: ComparisonData;
}

export function Comparison({ comparison }: ComparisonProps) {
    const { t } = useI18n();

    return (
        <section className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-10 border-b border-slate-50 flex items-center gap-3">
                <ArrowRight className="text-indigo-600" size={28} />
                <h3 className="text-2xl font-bold">{t.beforeAfterHeader}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="p-10 space-y-4 border-r border-slate-100">
                    <div className="flex items-center gap-2 text-red-400 font-bold uppercase text-[10px] tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        {t.originalLabel}
                    </div>
                    <div className="bg-red-50/40 p-6 rounded-2xl text-slate-500 italic line-through decoration-red-300/40 leading-relaxed">
                        “{comparison.originalSnippet}”
                    </div>
                </div>

                {/* After */}
                <div className="p-10 space-y-4 bg-indigo-50/30">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-[10px] tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        {t.optimizedLabel}
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm text-slate-800 font-semibold leading-relaxed">
                        “{comparison.improvedSnippet}”
                    </div>
                </div>
            </div>
        </section>
    );
}
