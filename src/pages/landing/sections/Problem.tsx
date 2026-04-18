import { motion } from 'motion/react';
import { Cpu, Sun, Radio, Droplets } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function HardwareSection() {
  const { t } = useLandingI18n();

  const features = [
    { icon: <Droplets size={28} />, title: t('problem.f1_title'), desc: t('problem.f1_desc') },
    { icon: <Radio size={28} />, title: t('problem.f2_title'), desc: t('problem.f2_desc') },
    { icon: <Sun size={28} />, title: t('problem.f3_title'), desc: t('problem.f3_desc') },
    { icon: <Cpu size={28} />, title: t('problem.f4_title'), desc: t('problem.f4_desc') },
  ];

  return (
    <section id="hardware" className="py-32 px-4 md:px-6 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-jungle text-solar text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Cpu size={14} /> {t('problem.badge')}
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-jungle">
            {t('problem.title1')} <span className="text-solar">{t('problem.title2')}</span>
          </h2>
          <p className="text-lg text-jungle/50 max-w-2xl mx-auto font-medium leading-relaxed">{t('problem.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div key={feat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-[2rem] group">
              <div className="w-16 h-16 bg-solar/10 rounded-2xl flex items-center justify-center text-solar mb-6 group-hover:bg-solar group-hover:text-jungle transition-all duration-500">
                {feat.icon}
              </div>
              <h3 className="text-xl font-black text-jungle mb-3 tracking-tight">{feat.title}</h3>
              <p className="text-sm text-jungle/50 font-medium leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
