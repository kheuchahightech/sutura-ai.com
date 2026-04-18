import { Globe, ExternalLink, Mail, Cpu, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';

export default function SuturFooter() {
  const { t } = useLandingI18n();

  return (
    <footer className="bg-primary py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64" />
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#accueil" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-secondary-foreground font-black text-2xl shadow-lg shadow-secondary/20 transition-transform group-hover:scale-110">S</div>
              <span className="font-black text-3xl tracking-tighter text-offwhite">SUTURA<span className="text-secondary">AI</span></span>
            </a>
            <p className="text-offwhite/60 text-xl max-w-md leading-relaxed mb-8 font-medium">
              {t('footer.desc')} <span className="text-secondary font-black">{t('footer.desc2')}</span> {t('footer.desc3')}
            </p>
            <a href="https://wa.me/221754417623?text=Bonjour%20SUTURA%20AI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-whatsapp text-success-foreground px-6 py-3 rounded-xl font-bold text-sm hover:translate-y-[-2px] transition-all">
              <MessageCircle size={18} /> {t('footer.contact_wa')}
            </a>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-secondary flex items-center gap-2"><Cpu size={18} /> {t('footer.tech')}</h4>
            <ul className="space-y-4 text-offwhite/50 font-bold text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">{t('footer.docs')} <ExternalLink size={14} className="opacity-50" /></a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t('footer.roadmap')}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t('footer.api')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-secondary flex items-center gap-2"><ShieldCheck size={18} /> {t('footer.global')}</h4>
            <ul className="space-y-4 text-offwhite/50 font-bold text-sm">
              <li className="flex items-center gap-3"><Globe size={18} className="text-secondary" /> Dakar, Sénégal</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-secondary" /> cheikhabdoukhadre1@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-secondary" /> +221 75 441 76 23</li>
              <li className="mt-6 p-5 rounded-2xl border border-offwhite/10 bg-offwhite/5 text-[10px] font-black uppercase tracking-[0.2em] text-secondary/80 leading-relaxed text-center">{t('footer.engineering')}</li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-offwhite/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-offwhite/40 font-bold uppercase tracking-widest">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-secondary transition-colors">{t('footer.investors')}</a>
            <a href="mailto:cheikhabdoukhadre1@gmail.com" className="hover:text-secondary transition-colors">{t('footer.contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
