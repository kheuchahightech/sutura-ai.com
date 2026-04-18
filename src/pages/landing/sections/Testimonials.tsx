import { motion } from 'motion/react';
import { Quote, MapPin, Star } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

const testimonials = [
  {
    name: 'Mamadou Sow',
    role: { fr: 'Maraîcher, Cayar', en: 'Market gardener, Cayar' },
    location: { fr: 'Zone des Niayes', en: 'Niayes Zone' },
    quote: {
      fr: "Avant SUTURA, j'arrosais à l'aveugle. Maintenant, le système me dit exactement quand mes oignons ont besoin d'eau. J'ai réduit ma consommation de moitié.",
      en: "Before SUTURA, I watered blindly. Now the system tells me exactly when my onions need water. I've cut my consumption in half.",
    },
    rating: 5,
  },
  {
    name: 'Aïssatou Bâ',
    role: { fr: 'Agricultrice, Thiès', en: 'Farmer, Thiès' },
    location: { fr: 'Région de Thiès', en: 'Thiès Region' },
    quote: {
      fr: "Je ne sais pas lire, mais Samba me parle en Wolof. Il me dit la température, l'humidité… C'est comme avoir un ingénieur dans mon champ.",
      en: "I can't read, but Samba speaks to me in Wolof. It tells me the temperature, humidity… It's like having an engineer in my field.",
    },
    rating: 5,
  },
  {
    name: 'Ibrahima Ndiaye',
    role: { fr: 'Coopérative agricole, Louga', en: 'Agricultural cooperative, Louga' },
    location: { fr: 'Région de Louga', en: 'Louga Region' },
    quote: {
      fr: "Nos rendements ont augmenté de 30% en une saison. Les investisseurs voient les données en temps réel, ça change tout pour le financement.",
      en: "Our yields increased by 30% in one season. Investors see real-time data — it changes everything for financing.",
    },
    rating: 5,
  },
];

export default function Testimonials() {
  const { lang, t } = useLandingI18n();

  return (
    <section className="py-28 px-4 md:px-6 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-success/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Quote size={14} /> {t('testimonials.badge')}
          </div>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-offwhite font-display mb-4">
            {t('testimonials.title1')} <span className="text-secondary">{t('testimonials.title2')}</span>
          </h2>
          <p className="text-base text-offwhite/50 max-w-xl mx-auto font-medium">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }} whileHover={{ y: -8 }} className="glass-dark rounded-3xl p-8 relative group">
              <Quote size={40} className="absolute top-6 right-6 text-secondary/10 group-hover:text-secondary/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, j) => <Star key={j} size={14} className="text-secondary fill-secondary" />)}
              </div>
              <p className="text-offwhite/80 text-sm font-medium leading-relaxed mb-8 italic">"{item.quote[lang]}"</p>
              <div className="border-t border-offwhite/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-black text-sm">{item.name.charAt(0)}</div>
                  <div>
                    <h4 className="text-sm font-black text-offwhite">{item.name}</h4>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{item.role[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3 text-[10px] text-offwhite/30 font-bold">
                  <MapPin size={10} /> {item.location[lang]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
