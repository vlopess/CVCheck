import type {I18nSchema} from "../types.ts";

export const pt: I18nSchema = {
    navHow: "Como Funciona",
    navAnalyzer: "Analisador",
    navAction: "Analisar Agora",

    heroBadge: "Tecnologia Gemini 2.5",
    heroTitle: "O seu currículo está à altura do ",
    heroTitleHighlight: "mercado global?",
    heroSubtitle:
        "Obtenha feedback instantâneo de um especialista em recrutamento internacional. Otimize para ATS e destaque-se em candidaturas para o estrangeiro.",

    sectionHowTitle: "Como funciona a nossa análise?",
    sectionHowDesc:
        "Utilizamos inteligência artificial de última geração e heurísticas de recrutamento para avaliar o seu perfil.",

    how1Title: "Filtros ATS",
    how1Desc:
        "Verificamos se o seu currículo é legível por sistemas de triagem automática (ATS).",

    how2Title: "Métricas de Impacto",
    how2Desc:
        "Analisamos se as suas experiências focam em resultados e conquistas quantificáveis.",

    how3Title: "Padrão Global",
    how3Desc:
        "Avaliamos a conformidade com as normas de CV dos EUA e Europa.",

    how4Title: "Motor IA",
    how4Desc:
        "O Gemini identifica padrões de escrita e sugere correções baseadas em dados reais.",

    uploadHeader: "Enviar Currículo",
    uploadSub: "Carregue o seu ficheiro em inglês para começar.",
    uploadDrag: "Arraste o seu currículo aqui",
    uploadClick: "ou clique para selecionar um ficheiro",
    removeFile: "Remover ficheiro",

    errorShort: "O conteúdo do ficheiro parece demasiado curto.",
    errorGeneric: "Não foi possível processar a análise no momento.",

    btnProcess: "A processar...",
    btnAnalyze: "Analisar Agora",

    resultsTitle: "Relatório de Otimização",
    resultsFor: "Resultados gerados para:",
    scoreLabel: "Score",

    feedbackHeader: "Feedback do Especialista",
    strengthsHeader: "Pontos Fortes",
    weaknessesHeader: "Áreas de Melhoria",
    fitHeader: "Fit Internacional",

    tipsHeader: "Recomendações Práticas",
    beforeAfterHeader: "Antes vs Depois",
    originalLabel: "Texto Original",
    optimizedLabel: "Versão Otimizada",

    footerDesc:
        "Otimização de currículos para o mercado internacional com inteligência artificial.",

    targetMarkets: "Mercados Alvo",
    newAnalysis: "Analisar um novo documento",
    langPrompt: "Português",
    generatorTitle: "Currículo Profissional (LaTeX Template)",

    generatorDesc:
        "Transforme suas informações em um currículo estruturado em LaTeX. O conteúdo gerado é editável e pode ser ajustado antes da compilação para PDF.",

    generatorBtn: "Criar Currículo",

    generatorCopy: "Copiar Template LaTeX",

    generatorDownload: "Download do .tex",

    generatorPdf: "Compilar para PDF",

    generatorResult: "Template gerado — revise e personalize antes de usar",
    generatorSuccess: "Código copiado para a área de transferência!",
    RESUME_ANALYSIS_PROMPT: `
      Você é um Recrutador Internacional e Career Coach especialista em contratações para os EUA, Europa e vagas remotas globais.

      Sua tarefa é analisar o currículo fornecido (que deve estar em inglês) e fornecer feedback honesto e acionável.

      Foque em:
      1. Impacto quantificável (números e resultados)
      2. Verbos de ação fortes
      3. Formatação padrão ATS
      4. Remoção de informações irrelevantes
      5. Clareza e tom profissional

      Toda a explicação deve ser em Português (Brasil).
      Os exemplos de melhoria devem permanecer em Inglês.

      Responda **exclusivamente** em JSON com o seguinte formato:
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
      }
      `
}
