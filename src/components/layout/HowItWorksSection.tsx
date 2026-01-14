import { Search, TrendingUp, FileCheck, Cpu } from "lucide-react";
import {useI18n} from "../../i18n";

export function HowItWorksSection() {
    const { t } = useI18n();

    const items = [
        { icon: <Search />, color: "bg-indigo-600", title: t.how1Title, desc: t.how1Desc },
        { icon: <TrendingUp />, color: "bg-emerald-500", title: t.how2Title, desc: t.how2Desc },
        { icon: <FileCheck />, color: "bg-amber-500", title: t.how3Title, desc: t.how3Desc },
    ];

    return (
        <section
            id="how-it-works"
            className="py-16 px-4 bg-white border-y border-slate-100"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{t.sectionHowTitle}</h2>
                <p className="text-slate-500 mb-16 max-w-2xl mx-auto">
                    {t.sectionHowDesc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all text-left group"
                        >
                            <div
                                className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                            >
                                {item.icon}
                            </div>

                            <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
