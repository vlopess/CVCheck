import './App.css'
import {Navbar} from "./components/layout/Navbar.tsx";
import {Hero} from "./components/layout/Hero.tsx";
import {AnalyzerContainer} from "./components/analyzer/AnalyzerContainer.tsx";
import {Footer} from "./components/layout/Footer.tsx";
import {I18nProvider} from "./i18n";
import {HowItWorksSection} from "./components/layout/HowItWorksSection.tsx";
import {AnalyzerSectionWrapper} from "./components/analyzer/AnalyzerSectionWrapper.tsx";



export default function App() {

  return (
      <>
        <I18nProvider>
          <Navbar />
          <Hero />
          <HowItWorksSection />
          <AnalyzerSectionWrapper>
            <AnalyzerContainer />
          </AnalyzerSectionWrapper>
          <Footer />
        </I18nProvider>
      </>
  )
}