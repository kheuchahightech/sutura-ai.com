import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Droplets } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function LiveCounter() {
  const { t } = useLandingI18n();
  const BASE = 1_234_567;
  const RATE = 0.5; // liters per second

  const [count, setCount] = useState(BASE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.round(RATE * 30));
    }, 30000);
    // Initial animation
    const start = performance.now();
    const duration = 2000;
    let raf: number;
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * BASE));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { clearInterval(interval); cancelAnimationFrame(raf); };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12 px-4 bg-primary"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <Droplets className="w-8 h-8 text-secondary animate-pulse" />
        <div className="text-center sm:text-left">
          <p className="text-3xl md:text-5xl font-black text-offwhite font-display tracking-tight">
            {count.toLocaleString('fr-FR')} <span className="text-secondary">L</span>
          </p>
          <p className="text-xs text-offwhite/40 font-bold uppercase tracking-widest mt-1">
            {t('counter.label')}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
