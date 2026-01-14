import { Target } from "lucide-react";
import {useI18n} from "../../i18n";

interface Tip {
    topic: string;
    suggestion: string;
    example: string;
}

interface ActionableTipsProps {
    tips: Tip[];
}

export function ActionableTips({ tips }: ActionableTipsProps) {
    const { t } = useI18n();

    return (
        <section className="bg-white rounded-[2rem] border border-slate-200 p-10 shadow-sm">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <Target className="text-indigo-600" size={28} />
                {t.tipsHeader}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tips.map((tip, i) => (
                    <div
                        key={i}
                        className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
                    >
            <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase text-indigo-600 mb-4">
              {tip.topic}
            </span>

                        <p className="text-slate-800 font-bold mb-4 leading-tight">
                            {tip.suggestion}
                        </p>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 w-1 bg-indigo-200 rounded-full" />
                            <div className="pl-5 text-sm font-mono text-slate-500 italic">
                                “{tip.example}”
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
