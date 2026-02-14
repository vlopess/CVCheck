import {useI18n} from "../../i18n";
import {AlertCircle, Copy, FileDown, FileText, Loader2, Sparkles} from "lucide-react";
import {useRef, useState} from "react";
import {useResumeAnalyzer} from "../../hooks/useResumeAnalyzer.tsx";
import {RESUME_GENERATOR_PROMPT} from "../../i18n/types.ts";

export const GeneratorResume = () => {
    const { t } = useI18n();
    const [resumeResult, setHarvardLatex] = useState('');
    const [isGeneratingHarvard, setIsGeneratingHarvard] = useState(false);
    const [error, setError] = useState(null);
    const [copyFeedback, setCopyFeedback] = useState(false);
    const { analyze, resume } = useResumeAnalyzer();
    const printFrameRef = useRef(null);


    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = resumeResult;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 2000);
    };


    const generateHarvardResume = async () => {
        setIsGeneratingHarvard(true);
        setError(null);
        try {
            const result = await analyze(resume, RESUME_GENERATOR_PROMPT)
            setHarvardLatex(result);
        } catch (err) {
            //setError(err);
        } finally {
            setIsGeneratingHarvard(false);
        }
    }

    return (
        <>
            {/* Harvard Generator Section */}
            {error && <div
                className="mt-8 p-4 bg-amber-50 border border-amber-100 text-amber-800 rounded-xl flex items-start gap-3 text-sm font-medium leading-relaxed animate-shake">
                <AlertCircle className="shrink-0 mt-0.5" size={20}/> {error}</div>}
            <iframe ref={printFrameRef} className="hidden" title="print-frame"/>

            {resume && (
                <div className="py-24 px-14 max-w-4xl mx-auto bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 rounded-[2.5rem] text-white shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden relative">

                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>

                    <div className="max-w-3xl relative z-10">

                        <h3 className="text-4xl font-extrabold mb-6 flex items-center gap-4">
                            <Sparkles className="text-indigo-400" size={32} />
                            {t.generatorTitle}
                        </h3>

                        <p className="text-indigo-200 text-lg mb-12 leading-relaxed max-w-2xl">
                            {t.generatorDesc}
                        </p>

                        {!resumeResult ? (
                            <button
                                onClick={generateHarvardResume}
                                disabled={isGeneratingHarvard}
                                className={`px-12 py-6 rounded-2xl font-bold text-lg flex items-center gap-4 transition-all duration-300 ${
                                    isGeneratingHarvard
                                        ? "bg-white/10 text-white/40 cursor-not-allowed"
                                        : "bg-white text-indigo-900 hover:scale-105 hover:bg-indigo-50 shadow-2xl"
                                }`}
                            >
                                {isGeneratingHarvard ? (
                                    <>
                                        <Loader2 className="animate-spin" size={26} />
                                        {t.btnProcess}
                                    </>
                                ) : (
                                    <>
                                        <FileDown size={26} />
                                        {t.generatorBtn}
                                    </>
                                )}
                            </button>
                        ) : (
                            <div className="animate-in fade-in zoom-in-95 duration-500">

                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 flex flex-col items-center text-center mb-10 shadow-inner">

                                    <div className="w-24 h-24 flex items-center justify-center rounded-full bg-indigo-600/20 mb-6">
                                        <FileText className="text-indigo-400" size={48} />
                                    </div>

                                    <h4 className="text-2xl font-bold mb-3">
                                        Resume Generated Successfully
                                    </h4>

                                    <p className="text-indigo-200 max-w-md leading-relaxed">
                                        {t.generatorResult}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 justify-center">
                                    <button
                                        onClick={copyToClipboard}
                                        className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm flex items-center gap-3 hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg"
                                    >
                                        <Copy size={20} />
                                        {copyFeedback ? t.generatorSuccess : t.generatorCopy}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    );
}