import { useRef, useState } from 'react'
import {extractTextFromPdf} from "../services/extractTextFromPdf.ts";

export function useFileUpload() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [fileName, setFileName] = useState('')
    const [content, setContent] = useState('')

    async function handleFile(file: File) {
        const text = await extractTextFromPdf(file)
        setFileName(file.name)
        setContent(text)
    }

    function reset() {
        setFileName('')
        setContent('')
    }

    return {
        inputRef,
        fileName,
        content,
        handleFile,
        reset,
    }
}
