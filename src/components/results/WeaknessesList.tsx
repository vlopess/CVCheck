import {useI18n} from "../../i18n";

export function WeaknessesList({ items }: { items: string[] }) {
    const { t } = useI18n();

    return (
        <div>
            <h4 className="text-amber-600 font-bold mb-4">{t.weaknessesHeader}</h4>
            <ul className="space-y-2">
                {items.map((w, i) => (
                    <li key={i} className="text-sm text-slate-700">• {w}</li>
                ))}
            </ul>
        </div>
    )
}
