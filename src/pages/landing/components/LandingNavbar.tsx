import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function SuturNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLandingI18n();

  const navLinks = [
    { label: t('nav.solution'), href: '/#ia' },
    { label: t('nav.hardware'), href: '/#hardware' },
    { label: t('nav.faq'), href: '/#faq' },
    { label: t('nav.team'), href: '/#equipe' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#accueil" className="flex items-center gap-2.5 group">
            <img src="/logo.png" alt="SUTURA AI" className="w-9 h-9 object-contain transition-transform group-hover:scale-110" loading="lazy" />
            <span className="font-black text-lg tracking-tighter text-foreground">
              SUTURA<span className="text-secondary">AI</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            {/* FR/EN toggle */}
            <div className="flex rounded-lg overflow-hidden border border-border">
              <button
                onClick={() => setLang('fr')}
                className="px-2.5 py-1.5 text-xs font-bold transition-colors"
                style={{
                  background: lang === 'fr' ? 'hsl(var(--secondary))' : 'transparent',
                  color: lang === 'fr' ? 'hsl(var(--secondary-foreground))' : 'hsl(var(--muted-foreground))',
                }}
              >
                🇫🇷 FR
              </button>
              <button
                onClick={() => setLang('en')}
                className="px-2.5 py-1.5 text-xs font-bold transition-colors"
                style={{
                  background: lang === 'en' ? 'hsl(var(--secondary))' : 'transparent',
                  color: lang === 'en' ? 'hsl(var(--secondary-foreground))' : 'hsl(var(--muted-foreground))',
                }}
              >
                🇬🇧 EN
              </button>
            </div>
            <Link
              to="/dashboard"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
            >
              {t('nav.dashboard')}
            </Link>
            <a
              href="https://wa.me/221754417623?text=Bonjour%20SUTURA%20AI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-success-foreground px-5 py-2 rounded-lg font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile lang toggle */}
            <div className="flex rounded-lg overflow-hidden border border-border mx-3 mt-2 mb-3">
              <button onClick={() => setLang('fr')}
                className="flex-1 py-2 text-xs font-bold transition-colors"
                style={{ background: lang === 'fr' ? 'hsl(var(--secondary))' : 'transparent', color: lang === 'fr' ? 'hsl(var(--secondary-foreground))' : 'hsl(var(--muted-foreground))' }}>
                🇫🇷 FR
              </button>
              <button onClick={() => setLang('en')}
                className="flex-1 py-2 text-xs font-bold transition-colors"
                style={{ background: lang === 'en' ? 'hsl(var(--secondary))' : 'transparent', color: lang === 'en' ? 'hsl(var(--secondary-foreground))' : 'hsl(var(--muted-foreground))' }}>
                🇬🇧 EN
              </button>
            </div>
            <div className="flex gap-2">
              <Link
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2.5 rounded-lg text-sm font-medium border border-border text-foreground"
              >
                {t('nav.dashboard')}
              </Link>
              <a
                href="https://wa.me/221754417623?text=Bonjour%20SUTURA%20AI"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2.5 rounded-lg text-sm font-bold bg-whatsapp text-success-foreground flex items-center justify-center gap-1"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
