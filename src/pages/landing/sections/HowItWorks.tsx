import { motion } from 'motion/react';
import { Cpu, Mic2, Droplets } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function HowItWorks() {
  const { t } = useLandingI18n();

  const steps = [
    { step: '01', icon: <Cpu size={32} />, title: t('how.s1_title'), desc: t('how.s1_desc') },
    { step: '02', icon: <Mic2 size={32} />, title: t('how.s2_title'), desc: t('how.s2_desc') },
    { step: '03', icon: <Droplets size={32} />, title: t('how.s3_title'), desc: t('how.s3_desc') },
  ];

  return (
    <section id="comment" className="py-28 px-4 md:px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            {t('how.badge')}
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-foreground font-display">
            {t('how.title1')} <span className="text-secondary">{t('how.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">{t('how.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-border z-0">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5 }} className="h-full bg-secondary origin-left" />
          </div>
          {steps.map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.6, type: 'spring', stiffness: 100 }} className="relative z-10 text-center group">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-20 h-20 bg-card border-2 border-secondary/30 rounded-3xl flex items-center justify-center text-secondary mx-auto mb-6 shadow-lg group-hover:border-secondary group-hover:shadow-secondary/20 transition-all duration-500">
                {step.icon}
              </motion.div>
              <div className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-3">{t('how.step')} {step.step}</div>
              <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
