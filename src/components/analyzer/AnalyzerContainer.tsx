import {useFileUpload} from "../../hooks/useFileUpload.tsx";
import {FileDropzone} from "./FileDropzone.tsx";
import {AnalyzerError} from "./AnalyzerError.tsx";
import {AnalyzerActions} from "./AnalyzerActions.tsx";
import {ResultsSection} from "../results/ResultsSection.tsx";
import {useI18n} from "../../i18n";
import {useResumeAnalyzer} from "../../hooks/useResumeAnalyzer.tsx";
import {useState} from "react";


export function AnalyzerContainer() {
    const upload = useFileUpload()
    const analyzer = useResumeAnalyzer();
    const { t } = useI18n();
    const [data, setData] = useState();

    const handleOnAnalyze = async () => {
        const result = await analyzer.analyze(upload.content, t.RESUME_ANALYSIS_PROMPT)
        setData(result);
    }
    return (
        <>
            <FileDropzone
                fileName={upload.fileName}
                onFile={upload.handleFile}
                inputRef={upload.inputRef as React.RefObject<HTMLInputElement>}
                onReset={upload.reset}
            />

            <AnalyzerError message={analyzer.error} />

            <AnalyzerActions
                disabled={!upload.content}
                loading={analyzer.loading}
                onAnalyze={() => handleOnAnalyze()}
            />

            {data && (
                <ResultsSection data={data} />
            )}
        </>
    )
}
