import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MessageCircle, Send, CheckCircle2, Loader2, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function CTASection() {
  const { t } = useLandingI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length < 10) {
        toast.error("Le message est trop court.", {
            description: "Veuillez entrer au moins 10 caractères pour décrire votre projet."
        });
        return;
    }
    
    setIsSubmitting(true);
    
    // Simulation d'un envoi API vers Supabase / EmailJS
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Afficher le toast de succès stylisé
      toast("Message envoyé avec succès !", {
        description: "L'équipe SUTURA AI vous recontactera dans les 24h.",
        icon: <CheckCircle2 className="text-secondary" size={20} />,
        duration: 5000,
      });

      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', phone: '', company: '', industry: '', message: '' });
    }, 1500);
  };

  return (
    <section id="cta" className="py-32 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Background Ambient FX */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-success/5 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-white opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
            
            {/* ======================= */}
            {/* LEFT COLUMN: CONTACTS   */}
            {/* ======================= */}
            <div className="flex flex-col text-left h-full justify-between">
              <div>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 text-offwhite font-display leading-[0.9]">
                    {t('contact.title1')} <br />
                    <span className="text-secondary">{t('contact.title2')}</span>
                  </h2>
                  <p className="text-lg text-offwhite/70 mb-12 font-medium leading-relaxed max-w-md">
                     Prêt à intégrer l'intelligence artificielle et l'automatisation dans vos processus ? Parlons de votre projet.
                  </p>
                  
                  <div className="space-y-6 mb-12 lg:mb-16">
                    {/* Ligne Adresse */}
                    <div className="flex items-start gap-4 text-offwhite group">
                      <div className="w-12 h-12 bg-black/40 rounded-2xl flex items-center justify-center text-secondary border border-white/10 shadow-inner group-hover:bg-secondary/10 transition-colors mt-1 shrink-0">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-offwhite/40 font-bold mb-1">Siège social</p>
                        <p className="font-bold text-lg tracking-tight">Dakar, Sénégal</p>
                        <p className="text-sm text-offwhite/60 mt-1">Disponible pour des projets à l'international</p>
                      </div>
                    </div>
                  
                    {/* Ligne Téléphone - Clickable */}
                    <a href="tel:+221754417623" className="flex items-center gap-4 text-offwhite group hover:bg-white/5 p-2 -ml-2 rounded-2xl transition-colors">
                      <div className="w-12 h-12 bg-black/40 rounded-2xl flex items-center justify-center text-secondary border border-white/10 shadow-inner group-hover:bg-secondary/10 transition-colors shrink-0">
                        <Phone size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-offwhite/40 font-bold mb-1">Téléphone & WhatsApp</p>
                        <p className="font-bold text-lg md:text-xl tracking-tight">+221 75 441 76 23</p>
                      </div>
                    </a>
                    
                    {/* Ligne Email - Clickable */}
                    <a href="mailto:cheikhabdoukhadre1@gmail.com" className="flex items-center gap-4 text-offwhite group hover:bg-white/5 p-2 -ml-2 rounded-2xl transition-colors overflow-hidden">
                       <div className="w-12 h-12 bg-black/40 rounded-2xl flex items-center justify-center text-secondary border border-white/10 shadow-inner group-hover:bg-secondary/10 transition-colors shrink-0">
                        <Mail size={22} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-widest text-offwhite/40 font-bold mb-1">Email Direct</p>
                        <p className="font-bold text-base md:text-lg tracking-tight truncate">cheikhabdoukhadre1@gmail.com</p>
                      </div>
                    </a>
                  </div>
              </div>
              
              <div className="space-y-8">
                <a href="https://wa.me/221754417623?text=Bonjour%20SUTURA%20AI%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20solutions." target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-3 bg-whatsapp text-white hover:bg-whatsapp/90 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:-translate-y-1">
                   <MessageCircle size={20} /> Discussion WhatsApp
                </a>
                
                {/* Social Media Links */}
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-offwhite/40 font-bold mb-4">Suivez notre évolution</p>
                   <div className="flex gap-4">
                       <a href="#" className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-offwhite/60 hover:text-white hover:bg-[#0077B5] transition-all hover:-translate-y-1"><Linkedin size={20} /></a>
                       <a href="#" className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-offwhite/60 hover:text-white hover:bg-white/20 transition-all hover:-translate-y-1"><Twitter size={20} /></a>
                       <a href="#" className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-offwhite/60 hover:text-white hover:bg-white/20 transition-all hover:-translate-y-1"><Github size={20} /></a>
                   </div>
                </div>
              </div>
            </div>
            
            {/* ======================= */}
            {/* RIGHT COLUMN: LEAD FORM */}
            {/* ======================= */}
            <div className="bg-black/30 p-8 md:p-10 lg:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl relative">
               
               {/* Titre form */}
               <div className="mb-8">
                 <h3 className="text-2xl lg:text-3xl font-black text-offwhite tracking-tight mb-3">Parlons de votre projet</h3>
                 <p className="text-sm text-offwhite/60 leading-relaxed max-w-sm">Remplissez ce formulaire pour obtenir un devis, une démo, ou simplement poser vos questions. Nous vous répondons en moins de 24h.</p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-6">
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-offwhite/60 ml-1">Nom complet *</label>
                     <Input required name="name" value={formData.name} onChange={handleChange} placeholder="Modou Fall" className="bg-white/5 border-white/10 text-offwhite placeholder:text-offwhite/30 px-5 py-6 rounded-2xl focus-visible:ring-secondary focus-visible:border-secondary h-14" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-offwhite/60 ml-1">Email *</label>
                     <Input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="modou@domaine.com" className="bg-white/5 border-white/10 text-offwhite placeholder:text-offwhite/30 px-5 py-6 rounded-2xl focus-visible:ring-secondary focus-visible:border-secondary h-14" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-offwhite/60 ml-1">Téléphone</label>
                     <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+221 77 XXX XX XX" className="bg-white/5 border-white/10 text-offwhite placeholder:text-offwhite/30 px-5 py-6 rounded-2xl focus-visible:ring-secondary focus-visible:border-secondary h-14" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-offwhite/60 ml-1">Entreprise / Projet</label>
                     <Input name="company" value={formData.company} onChange={handleChange} placeholder="Sénégal Tech Meca S.A" className="bg-white/5 border-white/10 text-offwhite placeholder:text-offwhite/30 px-5 py-6 rounded-2xl focus-visible:ring-secondary focus-visible:border-secondary h-14" />
                   </div>
                 </div>
                 
                 <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-offwhite/60 ml-1">Secteur d'activité</label>
                     <Input name="industry" value={formData.industry} onChange={handleChange} placeholder="Ex: Agriculture, Robotique, Santé..." className="bg-white/5 border-white/10 text-offwhite placeholder:text-offwhite/30 px-5 py-6 rounded-2xl focus-visible:ring-secondary focus-visible:border-secondary h-14" />
                 </div>

                 <div className="space-y-2">
                   <div className="flex justify-between items-end">
                     <label className="text-[10px] font-black uppercase tracking-widest text-offwhite/60 ml-1">Description de votre besoin *</label>
                     {formData.message.length > 0 && formData.message.length < 10 && (
                       <span className="text-[10px] font-bold text-destructive uppercase tracking-widest">10 caractères min</span>
                     )}
                   </div>
                   <Textarea required minLength={10} name="message" value={formData.message} onChange={handleChange} placeholder="Décrivez votre projet technologique (minimum 10 caractères)..." className="bg-white/5 border-white/10 text-offwhite placeholder:text-offwhite/30 p-5 min-h-[140px] rounded-2xl focus-visible:ring-secondary focus-visible:border-secondary resize-y" />
                 </div>

                 <Button type="submit" disabled={isSubmitting || (formData.message.length > 0 && formData.message.length < 10)} className="w-full bg-secondary text-background hover:bg-secondary/90 py-6 h-16 rounded-2xl font-black uppercase tracking-widest text-sm mt-8 shadow-[0_15px_30px_rgba(253,184,19,0.25)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                   {isSubmitting ? (
                     <><Loader2 className="animate-spin mr-2" size={20} /> Transmission en cours...</>
                   ) : (
                     <>Démarrer le projet <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                   )}
                 </Button>
               </form>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
