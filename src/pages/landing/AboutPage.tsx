import { LandingI18nProvider } from '@/lib/landing-i18n';
import LandingNavbar from './components/LandingNavbar';
import Team from './sections/Team';
import LandingFooter from './components/LandingFooter';

const AboutPage = () => {
  return (
    <LandingI18nProvider>
      <div className="min-h-screen selection:bg-secondary selection:text-secondary-foreground overflow-x-hidden pt-20">
        <LandingNavbar />
        <main>
          <Team />
        </main>
        <LandingFooter />
      </div>
    </LandingI18nProvider>
  );
};

export default AboutPage;
