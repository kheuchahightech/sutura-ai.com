import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Cpu, LineChart, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function ModulesSection() {
  const { t } = useLandingI18n();

  const suturaModules = [
    {
      id: "flow",
      titleKey: "modules.flow.title",
      descKey: "modules.flow.desc",
      icon: <Settings size={28} className="text-blue-500" />,
      color: "bg-blue-500/5 border-blue-500/20 hover:border-blue-500/40",
      mockupPlaceholder: "Mockup Shots.so (Ex: App Mobile Contrôle Pompe)",
      featuresKeys: ["modules.flow.f1", "modules.flow.f2", "modules.flow.f3"]
    },
    {
      id: "sense",
      titleKey: "modules.sense.title",
      descKey: "modules.sense.desc",
      icon: <Cpu size={28} className="text-secondary" />,
      color: "bg-secondary/5 border-secondary/20 hover:border-secondary/40",
      mockupPlaceholder: "Mockup Shots.so (Ex: Graphiques Humidité du Sol)",
      featuresKeys: ["modules.sense.f1", "modules.sense.f2", "modules.sense.f3"]
    },
    {
      id: "analytics",
      titleKey: "modules.analytics.title",
      descKey: "modules.analytics.desc",
      icon: <LineChart size={28} className="text-success" />,
      color: "bg-success/5 border-success/20 hover:border-success/40",
      mockupPlaceholder: "Mockup Shots.so (Ex: Dashboard Global iPad/PC)",
      featuresKeys: ["modules.analytics.f1", "modules.analytics.f2", "modules.analytics.f3"]
    }
  ];

  const [activeModal, setActiveModal] = useState<typeof suturaModules[0] | null>(null);

  return (
    <section id="modules" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
         <div className="absolute top-10 right-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-10 left-20 w-[600px] h-[600px] bg-success/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-[0.15em] mb-6">
            {t('modules.badge')}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground font-display">
            {t('modules.title1')} <span className="text-secondary tracking-tight">{t('modules.title2')}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            {t('modules.desc')}
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {suturaModules.map((mod, idx) => (
            <motion.div 
              key={mod.id}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass rounded-[2.5rem] border ${mod.color} p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center group transition-all duration-700 hover:shadow-2xl hover:shadow-foreground/5 backdrop-blur-xl`}
            >
              <div className="flex-1 space-y-6 z-10 relative">
                <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-border group-hover:scale-105 transition-transform duration-500">
                  {mod.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-foreground mb-4 font-display tracking-tight">{t(mod.titleKey)}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                    {t(mod.descKey)}
                  </p>
                </div>
                <button 
                  onClick={() => setActiveModal(mod)}
                  className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-secondary transition-colors uppercase tracking-widest mt-6"
                >
                  Découvrir <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex-1 w-full lg:w-auto mt-6 lg:mt-0 z-10">
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl group-hover:shadow-[0_0_40px_rgba(43,97%,54%,0.15)] transition-all duration-700 border border-border/50 bg-card/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent z-10 pointer-events-none" />
                  {/* 
                  <img 
                    src={`/mockups/${mod.id}.png`} 
                    alt="Sutura Module Mockup" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy" 
                  />
                  */}
                  
                  {/* --- PRO INTERFACE PLACEHOLDER --- */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/30 group-hover:bg-background/40 transition-colors duration-700 backdrop-blur-md">
                    <div className="w-20 h-20 rounded-3xl bg-foreground/5 flex items-center justify-center mb-4 shadow-inner border border-white/5 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(43,97%,54%,0.2)] transition-all duration-700">
                      <div className="scale-150 opacity-40 group-hover:opacity-80 transition-opacity duration-700">{mod.icon}</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-foreground/30 group-hover:text-foreground/50 transition-colors">
                      {mod.id} system
                    </span>
                  </div>
                  {/* ----------------------------------- */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] z-20 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent z-10 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl glass border border-border shadow-2xl rounded-[2.5rem] overflow-hidden bg-card/60 backdrop-blur-2xl"
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-background/50 hover:bg-background transition-colors"
                >
                  <X size={20} className="text-foreground" />
                </button>

                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center shadow-lg border border-border">
                    {activeModal.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-foreground font-display tracking-tight">{t(activeModal.titleKey)}</h3>
                    <p className="text-muted-foreground font-medium">{t(activeModal.descKey)}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/50">{t('modules.modal.features')}</h4>
                  
                  <div className="grid gap-3">
                    {activeModal.featuresKeys.map((featKey, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.1 * i }}
                        key={i} 
                        className="flex items-start gap-4 glass bg-background/40 p-5 rounded-2xl border border-border/50 hover:bg-background/60 transition-colors"
                      >
                        <CheckCircle2 size={24} className="text-success mt-0.5 shrink-0" />
                        <span className="text-foreground font-semibold md:text-lg">{t(featKey)}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <a 
                    href={`https://wa.me/221754417623?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20module%20${encodeURIComponent(t(activeModal.titleKey))}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-foreground text-primary-foreground py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl"
                  >
                    {t('modules.modal.contact')} <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
