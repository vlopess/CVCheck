import { Upload, FileCheck, XCircle } from 'lucide-react'
import { RefObject } from 'react'
import {useI18n} from "../../i18n";

interface Props {
    fileName: string
    onFile: (file: File) => void
    inputRef: RefObject<HTMLInputElement>
    onReset: () => void
}

export function FileDropzone({ fileName, onFile, inputRef, onReset }: Props) {
    const { t } = useI18n();

    if (fileName) {
        return (
            <div className="p-8 bg-slate-50 rounded-3xl border flex flex-col items-center gap-4">
                <FileCheck size={32} className="text-emerald-600" />
                <p className="font-bold">{fileName}</p>
                <button
                    onClick={onReset}
                    className="text-xs text-red-500 flex items-center gap-1"
                >
                    <XCircle size={14} /> {t.removeFile}
                </button>
            </div>
        )
    }

    return (
        <div
            onClick={() => inputRef.current?.click()}
            className="cursor-pointer border-2 border-dashed rounded-3xl p-12 flex flex-col items-center gap-6 hover:border-indigo-400"
        >
            <input
                ref={inputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                className="hidden"
                onChange={e => e.target.files && onFile(e.target.files[0])}
            />
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <Upload size={32} className="text-indigo-600" />
            </div>
            <p className="font-bold">{t.uploadDrag}</p>
        </div>
    )
}
