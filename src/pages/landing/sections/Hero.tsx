import { motion } from 'motion/react';
import { Wifi, ArrowRight, MessageCircle, Zap, Activity, Droplets } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function HeroSection() {
  const { t } = useLandingI18n();

  return (
    <section id="accueil" className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden bg-background">
      {/* Background Orbs - Optimisé avec tes nouvelles couleurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} 
          transition={{ duration: 10, repeat: Infinity }} 
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-jungle/20 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 12, repeat: Infinity, delay: 2 }} 
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-solar/10 rounded-full blur-[140px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center lg:text-left"
        >
          {/* Badge Premium */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jungle opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-jungle"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">
              {t('hero.badge') || "Technologie IoT Sénégalaise"}
            </span>
          </motion.div>

          {/* Titre avec Gradient Signature */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8 font-display">
            <span className="inline-block text-foreground">{t('hero.title1')}</span><br/>
            <span className="bg-gradient-to-r from-jungle via-jungle/80 to-solar bg-clip-text text-transparent italic">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-sans">
            {t('hero.desc')}
          </p>

          {/* Actions CTA */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.a 
              whileHover={{ scale: 1.02, translateY: -2 }} 
              whileTap={{ scale: 0.98 }} 
              href="/dashboard" 
              className="bg-foreground text-background px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-premium transition-all"
            >
              {t('hero.cta_dashboard')} <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, translateY: -2 }} 
              whileTap={{ scale: 0.98 }} 
              href="https://wa.me/221754417623" 
              className="bg-card/40 backdrop-blur-md border border-white/10 text-foreground px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-card/60 transition-all"
            >
              <MessageCircle size={20} className="text-whatsapp" /> {t('hero.cta_whatsapp')}
            </motion.a>
          </div>
        </motion.div>

        {/* VISUAL COMPOSITION (The "Apple" Way) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="relative perspective-1000"
        >
          {/* Main Card (Le Dashboard) */}
          <div className="relative z-10 bg-gradient-to-br from-card/80 to-card/40 border border-white/10 rounded-[2.5rem] p-4 shadow-2xl backdrop-blur-2xl">
            <div className="rounded-[2rem] overflow-hidden bg-background/50 border border-white/5 aspect-video flex items-center justify-center relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-jungle/10 to-transparent pointer-events-none z-10" />
               {/* 
               <img 
                 src="/mockups/hero.png" 
                 alt="Sutura Dashboard" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                 fetchPriority="high" 
               />
               */}
               
               {/* --- PRO CSS DASHBOARD REPLACEMENT --- */}
               <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-card/40 backdrop-blur-md">
                 <div className="w-16 h-16 rounded-full border border-jungle/50 border-t-jungle animate-spin mb-4 shadow-[0_0_20px_rgba(43,97%,54%,0.4)]" />
                 <div className="flex gap-2 mb-2">
                   <div className="w-2 h-10 bg-jungle/80 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                   <div className="w-2 h-16 bg-solar/80 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
                   <div className="w-2 h-8 bg-jungle/80 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                   <div className="w-2 h-12 bg-solar/80 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                   <div className="w-2 h-14 bg-jungle/80 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-foreground/50 mt-4">
                   Samba AI System Active
                 </div>
               </div>
               {/* ----------------------------------- */}

               {/* Premium inner glow */}
               <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] z-20 pointer-events-none" />
            </div>
          </div>

          {/* Floating Stats Card 1 (IoT) */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-jungle/20 rounded-lg"><Droplets className="text-jungle w-5 h-5" /></div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase">Humidité</p>
                <p className="text-lg font-black text-foreground">42%</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Stats Card 2 (AI) */}
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-solar/20 rounded-xl"><Zap className="text-solar w-6 h-6" /></div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase">Samba AI</p>
                <p className="text-sm font-bold text-foreground italic">"Arrosage optimal"</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}