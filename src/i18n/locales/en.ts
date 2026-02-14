import type {I18nSchema} from "../types.ts";

export const en: I18nSchema = {
    navHow: "How It Works",
    navAnalyzer: "Analyzer",
    navAction: "Analyze Now",

    heroBadge: "Gemini 2.5 Technology",
    heroTitle: "Is your resume ready for the ",
    heroTitleHighlight: "global market?",
    heroSubtitle:
        "Get instant feedback from an international recruitment specialist. Optimize for ATS and stand out globally.",

    sectionHowTitle: "How does our analysis work?",
    sectionHowDesc:
        "We use cutting-edge AI and recruitment heuristics to evaluate your profile.",

    how1Title: "ATS Filters",
    how1Desc: "We check if your resume is readable by ATS systems.",

    how2Title: "Impact Metrics",
    how2Desc: "We analyze whether your experience highlights measurable results.",

    how3Title: "Global Standard",
    how3Desc: "We assess compliance with US and EU resume standards.",

    how4Title: "AI Engine",
    how4Desc:
        "Gemini identifies writing patterns and suggests data-driven improvements.",

    uploadHeader: "Upload Resume",
    uploadSub: "Upload your file in English to begin.",
    uploadDrag: "Drag your resume here",
    uploadClick: "or click to select a file",
    removeFile: "Remove file",

    errorShort: "The file content seems too short.",
    errorGeneric: "We couldn't process the analysis at the moment.",

    btnProcess: "Processing...",
    btnAnalyze: "Analyze Now",

    resultsTitle: "Optimization Report",
    resultsFor: "Results generated for:",
    scoreLabel: "Score",

    feedbackHeader: "Expert Feedback",
    strengthsHeader: "Strengths",
    weaknessesHeader: "Areas for Improvement",
    fitHeader: "International Fit",

    tipsHeader: "Actionable Tips",
    beforeAfterHeader: "Before vs After",
    originalLabel: "Original Text",
    optimizedLabel: "Optimized Version",

    footerDesc:
        "Resume optimization for the international market using artificial intelligence.",

    targetMarkets: "Target Markets",
    newAnalysis: "Analyze a new document",
    langPrompt: "English",
    generatorTitle: "Professional Resume Generator (LaTeX)",

    generatorDesc:
        "Convert your information into a clean, professional LaTeX resume template. The generated file is fully editable — copy, customize, and compile it as needed.",

    generatorBtn: "Generate LaTeX Resume",

    generatorCopy: "Copy .tex Code",

    generatorDownload: "Download .tex File",

    generatorPdf: "Compile to PDF",

    generatorSuccess: "Code copied to clipboard!",
    generatorResult: "Template generated — review and edit before finalizing",


    RESUME_ANALYSIS_PROMPT: `
You are an International Recruiter and Career Coach specializing in hiring for US, European, and global remote positions.

Your task is to analyze the provided resume (which must be in English) and provide honest and actionable feedback.

Focus on:

1. Quantifiable impact (numbers and results)

2. Strong action verbs

3. Standard ATS formatting

4. Removal of irrelevant information

5. Clarity and professional tone

All explanations should be in Brazilian Portuguese.

Examples for improvement should remain in English.

Respond **exclusively** in JSON with the following format: 
{ 
"score": number, 
"overallFeedback": string, 
"strengths": string[], 
"weaknesses": string[], 
"internationalAlignment": string, 
"actionableTips": [ 
{ 
"topic": string, 
"suggestion": string, 
"example": string 
} 
], 
"comparison": { 
"originalSnippet": string, 
"improvedSnippet": string 
} 
}`
};
