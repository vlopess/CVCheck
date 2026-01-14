import {useFileUpload} from "../../hooks/useFileUpload.tsx";
import {useResumeAnalyzer} from "../../hooks/useResumeAnalyzer.ts";
import {FileDropzone} from "./FileDropzone.tsx";
import {AnalyzerError} from "./AnalyzerError.tsx";
import {AnalyzerActions} from "./AnalyzerActions.tsx";
import {ResultsSection} from "../results/ResultsSection.tsx";


export function AnalyzerContainer() {
    const upload = useFileUpload()
    const analyzer = useResumeAnalyzer()
    const { result } = useResumeAnalyzer()

    return (
        <>
            <FileDropzone
                fileName={upload.fileName}
                onFile={upload.handleFile}
                inputRef={upload.inputRef}
                onReset={upload.reset}
            />

            <AnalyzerError message={analyzer.error} />

            <AnalyzerActions
                disabled={!upload.content}
                loading={analyzer.loading}
                onAnalyze={() => analyzer.analyze(upload.content)}
            />

            {analyzer.result && (
                <ResultsSection data={analyzer.result} />
            )}
        </>
    )
}
