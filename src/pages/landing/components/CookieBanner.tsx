import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const { t } = useLandingI18n();

  useEffect(() => {
    const consent = localStorage.getItem('sutura_cookie_consent');
    if (!consent) {
      // Delay so it doesn't pop up the very second they open the page
      const timer = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sutura_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sutura_cookie_consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-6 z-[100] max-w-sm w-[calc(100%-3rem)] md:w-96 glass bg-card/70 backdrop-blur-2xl border border-border/50 shadow-2xl rounded-3xl p-6"
        >
          <button 
            onClick={handleDecline}
            className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20 shadow-inner">
              <Cookie size={22} className="text-secondary" />
            </div>
            <div className="pt-1">
              <h3 className="text-foreground font-black text-sm mb-1.5 uppercase tracking-wide">{t('cookie.title')}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {t('cookie.desc')}
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 font-semibold text-xs mt-2">
            <button 
              onClick={handleAccept}
              className="flex-1 bg-foreground text-primary-foreground py-3 rounded-xl hover:bg-foreground/90 transition-colors shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('cookie.accept')}
            </button>
            <button 
              onClick={handleDecline}
              className="flex-1 bg-secondary/10 text-foreground border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40 py-3 rounded-xl transition-colors hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('cookie.decline')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
