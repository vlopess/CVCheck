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
    generatorTitle: string
    generatorDesc: string
    generatorBtn: string
    generatorCopy: string
    generatorDownload: string
    generatorPdf: string
    generatorSuccess: string
    generatorResult: string
    RESUME_ANALYSIS_PROMPT: string
}

export const RESUME_GENERATOR_PROMPT = `
Convert the provided resume information into a LaTeX (.tex) document.

IMPORTANT:
You MUST strictly follow the template structure and formatting rules below.
Do NOT change spacing logic.
Do NOT invent packages.
Do NOT wrap in markdown.
Output ONLY valid LaTeX code.

========================
TEMPLATE REQUIREMENTS
========================

Use EXACTLY this preamble:

\\documentclass[a4paper]{article}

\\usepackage{fullpage}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{textcomp}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage[hidelinks]{hyperref}
\\usepackage[left=2cm, right=2cm, top=2cm]{geometry}
\\usepackage{longtable}

\\pagestyle{empty}
\\raggedright

\\newcommand{\\lineunder}{
    \\vspace*{-6pt} \\\\
    \\hspace*{-18pt} \\hrulefill \\\\
}

\\newcommand{\\header}[1]{
    {\\hspace*{-18pt}\\vspace*{8pt} \\textsc{#1}}
    \\vspace*{-4pt} \\lineunder
}

\\begin{document}
\\vspace*{-30pt}

========================
HEADER FORMAT
========================

Center aligned.
Name MUST be:

{\\Huge \\scshape FULL NAME}

Below name:
Professional title
Location
Email | Phone
Portfolio | LinkedIn | GitHub | etc (bolded links line)

Spacing rules:
- 2pt between name and title
- 4pt before links
- Use \\vspace accordingly

========================
SECTION RULES
========================

Each section must use:

\\header{Section Name}
\\vspace{3mm}

Sections order:

Summary
Experience
Technical Skills
Education
Beyond Work (if exists)
Certifications (if exists)

========================
EXPERIENCE FORMAT
========================

\\textbf{Company Name} \\textbf{ | Job Title} \\hfill Start -- End\\\\
\\vspace{-2mm}

\\begin{itemize} \\itemsep -3pt
    \\item Achievement with metrics.
\\end{itemize}

Rules:
- Use strong action verbs.
- Quantify impact when possible.
- Keep bullet spacing compact but readable.
- Do NOT add extra vertical spacing beyond the template.

========================
TECHNICAL SKILLS FORMAT
========================

Use longtable:

\\begin{longtable}{p{4cm}p{12cm}}
Category: & Items \\\\
\\end{longtable}

========================
GENERAL RULES
========================

- No markdown.
- No explanations.
- No triple backticks.
- No additional commentary.
- Only LaTeX code.
- Keep spacing balanced and professional.
- Ensure it compiles with pdflatex.
- Keep it 1 page if possible.

Now generate the LaTeX resume using the user-provided data.
`;

