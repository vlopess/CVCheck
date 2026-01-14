import { AlertCircle } from 'lucide-react'

export function AnalyzerError({ message }: { message: string | null }) {
    if (!message) return null

    return (
        <div className="mt-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl flex gap-3">
            <AlertCircle size={20} />
            <span className="text-sm font-medium">{message}</span>
        </div>
    )
}
