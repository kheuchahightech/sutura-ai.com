import { motion } from 'motion/react';
import { Mic2, Lock, BrainCircuit, Sparkles } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function VoiceSection() {
  const { t } = useLandingI18n();

  return (
    <section id="ia" className="py-32 bg-primary relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[0%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-success/20 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* TEXT CONTENT & DISABLED BUTTONS */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[0_0_15px_rgba(43,97%,54%,0.1)]"
            >
              <Sparkles size={14} className="animate-pulse" /> {t('solution.badge')}
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-offwhite"
            >
              {t('solution.title1')} <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-offwhite border-b-4 border-secondary/30 pb-2 inline-block mt-2">
                {t('solution.title2')}
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-offwhite/60 mb-12 font-medium leading-relaxed max-w-xl"
            >
              {t('solution.desc')} <br/><br/>
              <span className="text-secondary/80 italic font-bold">
                ⚠️ Notre modèle IA vocal natif "Samba" est actuellement en phase d'entraînement intensif pour comprendre parfaitement le contexte agricole Sénégalais.
              </span>
            </motion.p>
            
            <div className="space-y-4 max-w-md">
              {['wolof', 'pulaar'].map((voice, index) => (
                <motion.div 
                  key={voice}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative group overflow-hidden w-full flex items-center justify-between p-6 rounded-3xl border-2 border-offwhite/5 bg-offwhite/[0.02] cursor-not-allowed hover:bg-offwhite/[0.04] transition-all duration-500"
                >
                  {/* Hover Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center border border-white/5 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                      <span className="text-2xl">🇸🇳</span>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-offwhite/40 mb-1">{t('solution.local_lang')}</p>
                      <p className="text-xl font-black tracking-tight text-offwhite/60">
                        {voice === 'wolof' ? t('solution.listen_wolof') : t('solution.listen_pulaar')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 rounded-2xl flex flex-col items-center justify-center bg-black/40 border border-white/10 text-offwhite/30 relative z-10 shadow-inner group-hover:text-secondary group-hover:border-secondary/30 transition-colors duration-500">
                    <Lock size={18} />
                  </div>
                  
                  {/* Badge Bientôt */}
                  <div className="absolute top-4 right-4 relative z-10">
                    <span className="text-[9px] font-black uppercase tracking-widest text-background bg-secondary px-3 py-1 rounded-full shadow-[0_0_10px_rgba(43,97%,54%,0.4)]">
                      Bientôt
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* VISUALIZER : NEURAL NETWORK TRAINING */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-dark rounded-[3rem] p-10 md:p-12 flex flex-col items-center justify-center min-h-[500px] overflow-hidden relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* Tech Background Grid */}
              <div 
                className="absolute inset-0 opacity-[0.03] transition-opacity duration-1000" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
                  backgroundSize: '30px 30px' 
                }} 
              />
              
              {/* Central Core */}
              <div className="relative flex items-center justify-center mb-12 h-48 w-48 md:h-56 md:w-56">
                {/* Outer Ring */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
                  className="absolute w-full h-full border-[1px] border-secondary/20 rounded-full border-t-secondary/60 border-b-secondary/60 border-dashed" 
                />
                
                {/* Inner Ring */}
                <motion.div 
                  animate={{ rotate: -360, scale: [1, 1.05, 1] }} 
                  transition={{ rotate: {duration: 15, repeat: Infinity, ease: "linear"}, scale: {duration: 4, repeat: Infinity, ease: "easeInOut"} }} 
                  className="absolute w-36 h-36 md:w-40 md:h-40 border-2 border-offwhite/10 rounded-full border-l-offwhite/40 border-r-offwhite/40" 
                />
                
                {/* Pulsing Core */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.15, 1], 
                    boxShadow: [
                      "0 0 30px rgba(43, 97%, 54%, 0.2)", 
                      "0 0 80px rgba(43, 97%, 54%, 0.5)", 
                      "0 0 30px rgba(43, 97%, 54%, 0.2)"
                    ] 
                  }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                  className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-secondary to-secondary/60 rounded-full flex items-center justify-center relative z-10 backdrop-blur-xl"
                >
                    <BrainCircuit size={36} className="text-primary drop-shadow-md" />
                </motion.div>
                
                {/* Orbital dots (representing data inputs) */}
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[120%] h-[120%] rounded-full"
                    style={{ transformOrigin: "center" }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] absolute top-0 left-1/2 -translate-x-1/2" />
                  </motion.div>
                ))}
              </div>
              
              {/* Status Display */}
              <div className="text-center relative z-10 w-full bg-black/40 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div 
                    animate={{ opacity: [1, 0.4, 1] }} 
                    transition={{ duration: 1.5, repeat: Infinity }} 
                    className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(43,97%,54%,0.8)]" 
                  />
                  <span className="text-[11px] font-black uppercase tracking-widest text-secondary">Apprentissage IA en cours</span>
                </div>
                
                <h3 className="text-offwhite font-black text-2xl md:text-3xl tracking-tight mb-3 font-display">Samba AI <span className="text-secondary opacity-80">v2.0</span></h3>
                
                {/* Processing bar */}
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-4 relative">
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2 px-1">
                  <span className="text-[9px] text-offwhite/40 uppercase font-bold">Traitement de l'agronomie</span>
                  <span className="text-[9px] text-secondary uppercase font-bold animate-pulse">84%</span>
                </div>
              </div>

            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-2 md:-right-6 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <Mic2 size={20} className="text-secondary" />
              <div>
                <p className="text-[9px] text-offwhite/50 font-bold uppercase tracking-wider">Modèle</p>
                <p className="text-sm font-black text-offwhite">NLP Agricole</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
