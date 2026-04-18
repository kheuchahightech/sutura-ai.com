import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Droplets, TrendingUp, Calculator, ShieldCheck } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-5xl font-black text-foreground mb-2">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function ROISection() {
  const [hectares, setHectares] = useState(1);
  const { t } = useLandingI18n();
  const waterSaved = hectares * 450000;
  const revenueIncrease = hectares * 1250000;

  return (
    <section id="roi" className="py-32 px-4 md:px-6 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-primary text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              {t('stats.badge')}
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight text-foreground font-display">
              {t('stats.title1')} <br /> {t('stats.title2')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 font-medium leading-relaxed">{t('stats.desc')}</p>
            <div className="grid grid-cols-2 gap-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.05 }} className="p-8 rounded-[2rem] bg-card shadow-sm border border-border">
                <AnimatedCounter target={40} prefix="-" suffix="%" />
                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{t('stats.water')}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.05 }} className="p-8 rounded-[2rem] bg-card shadow-sm border border-border">
                <div className="text-5xl font-black text-secondary mb-2">+25%</div>
                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{t('stats.yield')}</div>
              </motion.div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-4 font-medium">{t('stats.disclaimer')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-secondary/20 transition-colors" />
            <div className="flex items-center gap-4 mb-8">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-secondary-foreground shadow-lg shadow-secondary/20">
                <Calculator size={28} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-foreground">{t('stats.simulator')}</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t('stats.simulator_sub')}</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-offwhite/50 p-6 rounded-3xl border border-border">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-bold text-muted-foreground">{t('stats.farm_size')}</label>
                  <span className="text-2xl font-black text-foreground">{hectares} <span className="text-sm font-medium text-muted-foreground">{t('stats.hectares')}</span></span>
                </div>
                <input type="range" min="0.5" max="50" step="0.5" value={hectares} onChange={(e) => setHectares(parseFloat(e.target.value))} className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer accent-secondary" />
                <div className="flex justify-between mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest"><span>0.5 Ha</span><span>50 Ha</span></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div key={`water-${hectares}`} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-primary p-6 rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Droplets size={40} /></div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-2">{t('stats.water_saved')}</div>
                  <div className="text-3xl font-black mb-1 text-offwhite">{waterSaved.toLocaleString()} <span className="text-xs font-medium opacity-60">{t('stats.liters')}</span></div>
                  <p className="text-[10px] opacity-50 text-offwhite">{t('stats.per_season')}</p>
                </motion.div>
                <motion.div key={`rev-${hectares}`} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-secondary text-secondary-foreground p-6 rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp size={40} /></div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-foreground/60 mb-2">{t('stats.revenue')}</div>
                  <div className="text-3xl font-black mb-1">{revenueIncrease.toLocaleString()} <span className="text-xs font-medium opacity-60">FCFA</span></div>
                  <p className="text-[10px] opacity-50">{t('stats.annual')}</p>
                </motion.div>
              </div>
              <div className="pt-6 border-t border-border flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success"><ShieldCheck size={16} /></div>
                <p className="text-[11px] text-muted-foreground font-medium leading-tight">
                  {t('stats.note')} <span className="font-bold text-foreground">DAUST Innovation Lab</span> {t('stats.note2')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
