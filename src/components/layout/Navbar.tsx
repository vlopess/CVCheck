import Logo from '../../assets/logo.png'
import {useI18n} from "../../i18n";
import {Languages} from "lucide-react";

export function Navbar() {
    const { locale, setLocale, t } = useI18n();

    return (
        <>
            <div className="bg-slate-900 text-white py-2 px-4 flex justify-end items-center text-[10px] font-bold tracking-widest uppercase">
                <div className="max-w-6xl mx-auto w-full flex justify-end items-center gap-4">
              <span className="text-slate-500 flex items-center gap-1">
                <Languages size={12}/> Language:
              </span>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setLocale('pt')}
                            className={`hover:text-indigo-400 transition-colors ${locale === 'pt' ? 'text-indigo-400 underline decoration-2 underline-offset-4' : 'text-slate-300'}`}
                        >
                            Português
                        </button>
                        <button
                            onClick={() => setLocale('en')}
                            className={`hover:text-indigo-400 transition-colors ${locale === 'en' ? 'text-indigo-400 underline decoration-2 underline-offset-4' : 'text-slate-300'}`}
                        >
                            English
                        </button>
                    </div>
                </div>
            </div>
            <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
                        <img src={Logo} width={40} alt="CVCheck Logo"/>
                        <span>CVCheck</span>
                    </div>

                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                        <a href="#how-it-works" className="hover:text-indigo-600">{t.navHow}</a>
                        <a href="#analyzer" className="hover:text-indigo-600">{t.navAnalyzer}</a>
                    </div>

                    <button
                        onClick={() =>
                            document.getElementById('analyzer')?.scrollIntoView({behavior: 'smooth'})
                        }
                        className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700"
                    >
                        {t.navAction}
                    </button>
                </div>
            </nav>
        </>
    )
}
