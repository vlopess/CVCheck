export type Locale = 'pt' | 'en';

export interface I18nSchema {
    navHow: string
    navAnalyzer: string
    navAction: string

    heroBadge: string
    heroTitle: string
    heroTitleHighlight: string
    heroSubtitle: string

    sectionHowTitle: string
    sectionHowDesc: string

    how1Title: string
    how1Desc: string
    how2Title: string
    how2Desc: string
    how3Title: string
    how3Desc: string
    how4Title: string
    how4Desc: string

    uploadHeader: string
    uploadSub: string
    uploadDrag: string
    uploadClick: string
    removeFile: string

    errorShort: string
    errorGeneric: string

    btnProcess: string
    btnAnalyze: string

    resultsTitle: string
    resultsFor: string
    scoreLabel: string

    feedbackHeader: string
    strengthsHeader: string
    weaknessesHeader: string
    fitHeader: string

    tipsHeader: string
    beforeAfterHeader: string
    originalLabel: string
    optimizedLabel: string

    footerDesc: string
    targetMarkets: string
    newAnalysis: string
    langPrompt: string
    RESUME_ANALYSIS_PROMPT: string
}
