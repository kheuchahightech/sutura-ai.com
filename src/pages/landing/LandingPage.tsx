import { LandingI18nProvider } from '@/lib/landing-i18n';
import SEO from '@/components/SEO';
import LandingNavbar from './components/LandingNavbar';
import Hero from './sections/Hero';
// import LiveCounter from './sections/LiveCounter';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Modules from './sections/Modules';
import HowItWorks from './sections/HowItWorks';
import Team from './sections/Team';
import FAQ from './sections/FAQ';
import Partners from './sections/Partners';
import Contact from './sections/Contact';
import LandingFooter from './components/LandingFooter';
import CookieBanner from './components/CookieBanner';

const LandingPage = () => {
  return (
    <LandingI18nProvider>
      <SEO 
        title="SUTURA AI | Intelligence Artificielle & Agriculture de Précision au Sénégal"
        description="Découvrez l'avenir de l'agriculture au Sénégal avec SUTURA AI. Systèmes d'irrigation solaire innovants contrôlés par IA, disponibles en Wolof et Pulaar."
      />
      <div className="min-h-screen selection:bg-secondary selection:text-secondary-foreground overflow-x-hidden">
        <LandingNavbar />
        <main>
          <Hero />
          {/* <LiveCounter /> */}
          <Problem />
          <Solution />
          <Modules />
          <HowItWorks />
          <Team />
          <Partners />
          {/* <FAQ /> */}
          <Contact />
        </main>
        <LandingFooter />
        <CookieBanner />
      </div>
    </LandingI18nProvider>
  );
};

export default LandingPage;
