import { motion } from 'motion/react';
import { Award, GraduationCap, Globe, Leaf } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function PartnersSection() {
  const { t } = useLandingI18n();

  const partners = [
    { name: 'Hult Prize', subtitle: t('partners.hult'), icon: <Award size={32} />, color: 'text-secondary', bgColor: 'bg-secondary/10' },
    { name: 'DAUST', subtitle: t('partners.daust'), icon: <GraduationCap size={32} />, color: 'text-success', bgColor: 'bg-success/10' },
    { name: 'CFPT Sénégal-Japon', subtitle: t('partners.cfpt'), icon: <Globe size={32} />, color: 'text-accent', bgColor: 'bg-accent/10' },
    { name: 'Zone des Niayes', subtitle: t('partners.niayes'), icon: <Leaf size={32} />, color: 'text-success', bgColor: 'bg-success/10' },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-jungle relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Award size={14} /> {t('partners.badge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-offwhite font-display">
            {t('partners.title1')} <span className="text-secondary">{t('partners.title2')}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div key={partner.name} initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5, type: 'spring', stiffness: 100 }} whileHover={{ y: -8, scale: 1.05 }} className="glass-dark rounded-3xl p-6 md:p-8 text-center group cursor-default">
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity, delay: i * 0.5 }} className={`w-16 h-16 ${partner.bgColor} rounded-2xl flex items-center justify-center ${partner.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}>
                {partner.icon}
              </motion.div>
              <h3 className="text-base md:text-lg font-black text-offwhite tracking-tight mb-1">{partner.name}</h3>
              <p className="text-[10px] font-bold text-offwhite/40 uppercase tracking-widest">{partner.subtitle}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-16 pt-8 border-t border-offwhite/10 text-center">
          <p className="text-offwhite/30 text-sm font-bold uppercase tracking-[0.2em]">{t('partners.footer')}</p>
        </motion.div>
      </div>
    </section>
  );
}
