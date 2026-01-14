import {useI18n} from "../../i18n";

export function StrengthsList({ items }: { items: string[] }) {
    const { t } = useI18n();

    return (
        <div>
            <h4 className="text-emerald-600 font-bold mb-4">{t.strengthsHeader}</h4>
            <ul className="space-y-2">
                {items.map((s, i) => (
                    <li key={i} className="text-sm text-slate-700">• {s}</li>
                ))}
            </ul>
        </div>
    )
}
