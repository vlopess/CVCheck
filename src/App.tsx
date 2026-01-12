import { useState } from 'react';

import { 
  Globe, 
  CheckCircle, 
  AlertCircle, 
  Zap, 
  FileText, 
  Target, 
  ArrowRight,
  Loader2,
  Sparkles,
  Search,
  FileCheck,
  TrendingUp
} from 'lucide-react';
import './App.css'
import Logo from './assets/logo.png';


interface ActionableTips {
  topic: string;
  suggestion: string;
  example: string;
}

interface Comparison {
  improvedSnippet: string;
  originalSnippet: string;
}

interface OverallFeedback {
  score: number;
  strengths: string[];
  weaknesses: string[];
  internationalAlignment: string;
  overallFeedback: string;
  actionableTips: ActionableTips[];
  comparison: Comparison;
}



const App = () => {
  const [resumeText, setResumeText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<OverallFeedback | null>(null);
  const [error, setError] = useState<String | null>('');

  const analyzeResume = async () => {
    if (!resumeText.trim() || resumeText.length < 100) {
      setError("O texto do currículo parece demasiado curto. Por favor, cole o conteúdo completo (experiência, resumo e competências) para uma análise de qualidade.");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    const systemPrompt = `
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
      `;

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
          },
          body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            messages: [
              {
                role: "system",
                content: systemPrompt
              },
              {
                role: "user",
                content: `Analise este currículo:\n\n${resumeText}`
              }
            ],
            temperature: 0.7,
            max_tokens: 3000
          })
        });

        
        const data = await res.json();

        const content = data.choices?.[0]?.message?.content;

        if (!content) throw new Error("Resposta vazia da API");

        const parsedData = JSON.parse(content);
        setResult(parsedData);
        
        setTimeout(() => {
          document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } catch (err) {
      setError("Não foi possível processar a análise no momento. Verifique se o texto está em inglês e tente novamente em instantes.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      {/* Navegação */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
            <img src={Logo} width={50} alt="CVCheck Logo" />
            <span>CVCheck</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">Como Funciona</a>
            <a href="#analyzer" className="hover:text-indigo-600 transition-colors">Analisador</a>
          </div>
          <button 
            onClick={() => document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-200"
          >
            Analisar Agora
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-8 tracking-wide uppercase border border-indigo-100">
            <Sparkles size={14} />
            Powered by AI
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
            O seu currículo está à altura do <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">mercado global?</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Obtenha feedback instantâneo de um especialista em recrutamento internacional. Otimize para ATS e destaque-se em candidaturas para o estrangeiro.
          </p>
        </div>
      </header>

      {/* Como funciona a análise */}
      <section id="how-it-works" className="py-16 px-4 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Como funciona a nossa análise?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Utilizamos uma combinação de inteligência artificial de última geração e heurísticas de recrutamento internacional para avaliar o seu perfil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
                <Search size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Filtros ATS</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Verificamos se o seu currículo é legível por sistemas de triagem automática (ATS) usados pelas maiores empresas do mundo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-100">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Métricas de Impacto</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Analisamos se as suas experiências focam em resultados e conquistas quantificáveis, fugindo de descrições genéricas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-100">
                <FileCheck size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Padrão Global</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Avaliamos a conformidade com as normas de CV dos EUA e Europa, removendo dados desnecessários ou discriminatórios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interface de Input */}
      <section id="analyzer" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Editor de Currículo</h2>
              <p className="text-slate-500 text-sm mt-1">O seu texto é processado de forma privada e segura.</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              Live Engine
            </div>
          </div>
          
          <div className="p-8">
            <div className="relative">
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Cole aqui o texto do seu currículo em inglês (Professional Summary, Experience, Education...)"
                className="w-full h-96 p-8 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 focus:ring-8 focus:ring-indigo-50 outline-none transition-all resize-none text-slate-700 font-mono text-base leading-relaxed"
              />
              {!resumeText && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20">
                  <FileText size={80} strokeWidth={1} />
                  <p className="mt-4 font-medium italic">O analisador funciona melhor com textos em inglês</p>
                </div>
              )}
            </div>

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl flex items-start gap-3">
                <AlertCircle className="shrink-0 mt-0.5" size={20} />
                <div className="text-sm font-medium">{error}</div>
              </div>
            )}

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-800 tracking-tight">Zero</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Custo</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-800 tracking-tight">100%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Privado</span>
                </div>
              </div>

              <button
                onClick={analyzeResume}
                disabled={isAnalyzing || !resumeText}
                className={`w-full sm:w-auto px-12 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 ${
                  isAnalyzing || !resumeText
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-200'
                }`}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    A processar...
                  </>
                ) : (
                  <>
                    <Zap size={22} fill="currentColor" />
                    Analisar Currículo
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      {result && (
        <section id="results-section" className="py-20 px-4 max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-slate-900">Relatório de Otimização</h2>
            <p className="text-slate-500">Com base nos padrões de recrutamento globais.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-200 p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold mb-3">Feedback do Especialista</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{result.overallFeedback}</p>
                </div>
                <div className="shrink-0 flex flex-col items-center justify-center bg-white border-4 border-indigo-50 w-32 h-32 rounded-3xl shadow-inner">
                  <span className="text-5xl font-black text-indigo-600 leading-none">{result.score}</span>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter mt-1">ATS Ready</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-5">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest">
                    <CheckCircle size={16} /> Pontos Fortes
                  </div>
                  <ul className="space-y-4">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-slate-700 text-sm flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-2 text-amber-600 font-bold uppercase text-xs tracking-widest">
                    <AlertCircle size={16} /> Áreas de Melhoria
                  </div>
                  <ul className="space-y-4">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-slate-700 text-sm flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <Globe className="text-indigo-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fit Internacional</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {result.internationalAlignment}
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-4">Mercados Alvo</p>
                <div className="flex flex-wrap gap-2">
                  {['USA', 'EU', 'CAN', 'Remote'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-3xl rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-200 p-10 shadow-sm">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <Target className="text-indigo-600" size={28} />
              Recomendações Práticas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.actionableTips.map((tip, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase text-indigo-600 mb-4">
                    {tip.topic}
                  </span>
                  <p className="text-slate-800 font-bold mb-4 leading-tight">{tip.suggestion}</p>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 w-1 bg-indigo-200 rounded-full"></div>
                    <div className="pl-5 text-sm font-mono text-slate-500 italic">
                      "{tip.example}"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-10 border-b border-slate-50 flex items-center justify-between">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <ArrowRight className="text-indigo-600" size={28} />
                Antes vs Depois
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 space-y-4 border-r border-slate-50">
                <div className="flex items-center gap-2 text-red-400 font-bold uppercase text-[10px] tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div> Texto Original
                </div>
                <div className="bg-red-50/30 p-6 rounded-2xl text-slate-500 line-through decoration-red-200/50 italic leading-relaxed">
                  "{result.comparison.originalSnippet}"
                </div>
              </div>
              <div className="p-10 bg-indigo-50/30 space-y-4">
                <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase text-[10px] tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Versão Otimizada
                </div>
                <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm text-slate-800 font-semibold leading-relaxed">
                  "{result.comparison.improvedSnippet}"
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 flex justify-center">
            <button 
              onClick={() => {
                setResult(null);
                setResumeText('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
            >
              Analisar um novo documento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      )}

      {/* Rodapé */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-4 mt-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl text-white mb-6">
              <img src={Logo} width={50} alt="CVCheck Logo" />
              <span>CVCheck</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Otimização de currículos para o mercado internacional com inteligência artificial.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-8 text-sm font-medium">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default App
