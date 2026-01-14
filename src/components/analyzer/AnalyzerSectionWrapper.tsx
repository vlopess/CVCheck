import { FileText } from "lucide-react";
import {useI18n} from "../../i18n";

interface AnalyzerSectionWrapperProps {
    children: React.ReactNode;
}

export function AnalyzerSectionWrapper({ children }: AnalyzerSectionWrapperProps) {
    const { t } = useI18n();

    return (
        <section id="analyzer" className="py-20 px-4 max-w-4xl mx-auto">
    <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">

        {/* Header */}
        <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
    <div>
        <h2 className="text-2xl font-bold text-slate-800">
        {t.uploadHeader}
        </h2>
        <p className="text-slate-500 text-sm mt-1">
        {t.uploadSub}
        </p>
        </div>
        <FileText size={24} className="text-slate-300" />
        </div>

    <div className="p-8 md:p-12">
        {children}
        </div>

        </div>
        </section>
);
}
