import { Sparkles } from 'lucide-react'
import {useI18n} from "../../i18n";

export function Hero() {
    const { t } = useI18n();

    return (
        <header className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-8">
                    <Sparkles size={14} />
                    Powered by AI
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                    {t.heroTitle}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            {t.heroTitleHighlight}
          </span>
                </h1>

                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    {t.heroSubtitle}
                </p>
            </div>
        </header>
    )
}
