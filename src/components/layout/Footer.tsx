import {useI18n} from "../../i18n";
import Logo from "../../assets/logo.png";

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-slate-900 text-slate-400 py-20 px-4 mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 font-bold text-2xl text-white mb-6">
                    <img src={Logo} width={40} alt="CVCheck Logo" />
                    <span>CVCheck</span>
                </div>

                <p className="max-w-sm text-sm">
                    {t.footerDesc}
                </p>
            </div>
        </footer>
    )
}
