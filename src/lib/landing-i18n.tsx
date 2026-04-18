import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type LandingLang = 'fr' | 'en';

const translations: Record<string, Record<LandingLang, string>> = {
  // Navbar
  'nav.solution': { fr: 'Solution', en: 'Solution' },
  'nav.hardware': { fr: 'Hardware', en: 'Hardware' },
  'nav.impact': { fr: 'Impact', en: 'Impact' },
  'nav.team': { fr: 'Équipe', en: 'Team' },
  'nav.faq': { fr: 'FAQ', en: 'FAQ' },
  'nav.dashboard': { fr: 'Dashboard', en: 'Dashboard' },

  // Hero
  'hero.badge': { fr: 'SUTURA AI - Agritech Solution', en: 'SUTURA AI - Agritech Solution' },
  'hero.title1': { fr: "Gérez l'eau", en: 'Manage water' },
  'hero.title2': { fr: 'intelligemment.', en: 'intelligently.' },
  'hero.desc': { fr: "Augmentez vos rendements et préservez une ressource critique grâce à l'Intelligence Artificielle.", en: "Increase your yields and preserve a critical resource using Artificial Intelligence." },
  'hero.desc2': { fr: "", en: "" },
  'hero.cta_dashboard': { fr: 'Accéder au Dashboard (Démo)', en: 'Access Dashboard (Demo)' },
  'hero.cta_whatsapp': { fr: 'Parler à un expert', en: 'Talk to an expert' },
  'hero.pilot': { fr: 'Projet pilote actif', en: 'Active pilot project' },
  'hero.pilot_loc': { fr: 'Zone des Niayes, Sénégal', en: 'Niayes Zone, Senegal' },
  'hero.moisture': { fr: 'Humidité Sol', en: 'Soil Moisture' },
  'hero.temp': { fr: 'Température', en: 'Temperature' },
  'hero.connectivity': { fr: 'Connectivité', en: 'Connectivity' },
  'hero.energy': { fr: 'Énergie', en: 'Energy' },
  
  // Modules
  'modules.badge': { fr: 'SUTURA OS', en: 'SUTURA OS' },
  'modules.title1': { fr: "L'intelligence", en: 'Intelligence' },
  'modules.title2': { fr: 'à chaque étape.', en: 'at every step.' },
  'modules.desc': { fr: "Une suite complète de modules pour maîtriser votre rendement et votre consommation d'eau.", en: "A complete suite of modules to master your yield and water consumption." },
  'modules.flow.title': { fr: 'SUTURA Flow™', en: 'SUTURA Flow™' },
  'modules.flow.desc': { fr: "Automatisation intelligente et solaire des pompes et vannes.", en: "Smart and solar automation of pumps and valves." },
  'modules.flow.f1': { fr: "Contrôle on/off automatique et manuel à distance.", en: "Remote automatic and manual on/off control." },
  'modules.flow.f2': { fr: "Synchronisation parfaite avec les sondes locales.", en: "Perfect synchronization with local probes." },
  'modules.flow.f3': { fr: "Installation rapide sur les systèmes existants.", en: "Quick installation on existing systems." },
  
  'modules.sense.title': { fr: 'SUTURA Sense™', en: 'SUTURA Sense™' },
  'modules.sense.desc': { fr: "Sonde connectée d'analyse des sols en temps réel.", en: "Real-time connected soil analysis probe." },
  'modules.sense.f1': { fr: "Humidité du sol à différentes profondeurs.", en: "Soil moisture at different depths." },
  'modules.sense.f2': { fr: "Température et conditions micro-climatiques.", en: "Temperature and micro-climate conditions." },
  'modules.sense.f3': { fr: "Autonomie de 5 ans avec communication LoRaWAN.", en: "5-year autonomy with LoRaWAN communication." },

  'modules.analytics.title': { fr: 'SUTURA Analytics™', en: 'SUTURA Analytics™' },
  'modules.analytics.desc': { fr: "Centre de contrôle prédictif propulsé par l'IA.", en: "Predictive control center powered by AI." },
  'modules.analytics.f1': { fr: "Tableau de bord complet sur mobile et web.", en: "Comprehensive dashboard on mobile and web." },
  'modules.analytics.f2': { fr: "Prévisions d'irrigation propulsées par l'IA.", en: "AI-powered irrigation forecasts." },
  'modules.analytics.f3': { fr: "Alertes intelligentes (SMS et WhatsApp).", en: "Smart alerts (SMS and WhatsApp)." },
  
  'modules.modal.features': { fr: "Fonctionnalités clés", en: "Key Features" },
  'modules.modal.contact': { fr: "Demander ce module", en: "Request this module" },


  // HowItWorks
  'how.badge': { fr: '3 étapes simples', en: '3 simple steps' },
  'how.title1': { fr: 'Comment ça', en: 'How does it' },
  'how.title2': { fr: 'marche ?', en: 'work?' },
  'how.subtitle': { fr: "De l'installation au premier arrosage intelligent, en moins d'une journée.", en: "From installation to first smart watering, in less than a day." },
  'how.step': { fr: 'Étape', en: 'Step' },
  'how.s1_title': { fr: 'Installez la Smart Box', en: 'Install the Smart Box' },
  'how.s1_desc': { fr: "Un boîtier solaire tout-en-un, fabriqué au Sénégal. Posez-le dans votre champ — pas besoin d'électricité ni de Wi-Fi.", en: "An all-in-one solar box, made in Senegal. Place it in your field — no electricity or Wi-Fi needed." },
  'how.s2_title': { fr: 'Parlez à Samba en Wolof', en: 'Talk to Samba in Wolof' },
  'how.s2_desc': { fr: "L'IA vocale Samba vous informe en Wolof ou Pulaar : humidité du sol, température, et recommandations d'arrosage.", en: "Samba voice AI informs you in Wolof or Pulaar: soil moisture, temperature, and watering recommendations." },
  'how.s3_title': { fr: "L'irrigation se fait toute seule", en: 'Irrigation runs itself' },
  'how.s3_desc': { fr: "Le système ouvre et ferme les vannes automatiquement selon les données capteurs. Vous économisez 40% d'eau.", en: "The system automatically opens and closes valves based on sensor data. You save 40% water." },

  // Problem
  'problem.badge': { fr: 'La Smart Box', en: 'The Smart Box' },
  'problem.title1': { fr: 'Hardware', en: 'Hardware' },
  'problem.title2': { fr: 'Made in Sénégal.', en: 'Made in Senegal.' },
  'problem.subtitle': { fr: "Un boîtier tout-en-un conçu pour les réalités du terrain africain. Robuste, autonome et intelligent.", en: "An all-in-one box designed for African field conditions. Robust, autonomous, and smart." },
  'problem.f1_title': { fr: "Capteurs d'Humidité", en: 'Moisture Sensors' },
  'problem.f1_desc': { fr: "Sondes capacitives mesurant l'humidité du sol en temps réel à différentes profondeurs.", en: "Capacitive probes measuring real-time soil moisture at different depths." },
  'problem.f2_title': { fr: 'LoRaWAN', en: 'LoRaWAN' },
  'problem.f2_desc': { fr: "Communication longue portée jusqu'à 10km sans dépendance au réseau 4G ou Internet.", en: "Long-range communication up to 10km without 4G or Internet dependency." },
  'problem.f3_title': { fr: 'Autonomie Solaire', en: 'Solar Autonomy' },
  'problem.f3_desc': { fr: "Système 100% autonome grâce à des panneaux solaires et batteries Li-ion intégrées.", en: "100% autonomous system with integrated solar panels and Li-ion batteries." },
  'problem.f4_title': { fr: 'Edge AI', en: 'Edge AI' },
  'problem.f4_desc': { fr: "Traitement local des données. Pas besoin de cloud pour que le système décide d'arroser.", en: "Local data processing. No cloud needed for the system to decide to irrigate." },

  // Solution (Voice section)
  'solution.badge': { fr: 'IA Vocale Inclusive', en: 'Inclusive Voice AI' },
  'solution.title1': { fr: "L'IA qui parle", en: 'AI that speaks' },
  'solution.title2': { fr: 'votre langue.', en: 'your language.' },
  'solution.desc': { fr: "Plus besoin de savoir lire ou écrire. SUTURA AI communique avec vous en Wolof et Pulaar pour une gestion agricole sans barrières.", en: "No need to read or write. SUTURA AI communicates with you in Wolof and Pulaar for barrier-free farm management." },
  'solution.local_lang': { fr: 'Langue Locale', en: 'Local Language' },
  'solution.listen_wolof': { fr: 'Écouter en Wolof', en: 'Listen in Wolof' },
  'solution.listen_pulaar': { fr: 'Écouter en Pulaar', en: 'Listen in Pulaar' },
  'solution.speaking': { fr: 'Samba est en train de parler...', en: 'Samba is speaking...' },
  'solution.translation': { fr: "Traduction : \"L'humidité du sol est optimale pour vos oignons.\"", en: "Translation: \"Soil moisture is optimal for your onions.\"" },
  'solution.click': { fr: 'Cliquez pour écouter', en: 'Click to listen' },

  // Stats
  'stats.badge': { fr: 'Impact & Rentabilité', en: 'Impact & ROI' },
  'stats.title1': { fr: "L'Impact SUTURA", en: 'The SUTURA Impact' },
  'stats.title2': { fr: 'en chiffres.', en: 'in numbers.' },
  'stats.desc': { fr: "Résultats mesurés sur notre pilote dans la zone des Niayes (Cayar, Sénégal). Données validées par le laboratoire DAUST.", en: "Results measured from our pilot in the Niayes zone (Cayar, Senegal). Data validated by DAUST laboratory." },
  'stats.water': { fr: 'Eau Économisée*', en: 'Water Saved*' },
  'stats.yield': { fr: 'Rendement*', en: 'Yield*' },
  'stats.disclaimer': { fr: "*Estimations basées sur les données pilotes. Résultats variables selon les conditions.", en: "*Estimates based on pilot data. Results may vary depending on conditions." },
  'stats.simulator': { fr: "Simulateur d'Impact", en: 'Impact Simulator' },
  'stats.simulator_sub': { fr: 'Estimation ROI SUTURA AI', en: 'SUTURA AI ROI Estimate' },
  'stats.farm_size': { fr: 'Taille de votre exploitation', en: 'Your farm size' },
  'stats.hectares': { fr: 'Hectares', en: 'Hectares' },
  'stats.water_saved': { fr: 'Eau Économisée', en: 'Water Saved' },
  'stats.liters': { fr: 'Litres', en: 'Liters' },
  'stats.per_season': { fr: 'Par saison (estimation)', en: 'Per season (estimate)' },
  'stats.revenue': { fr: 'Gain de Revenus', en: 'Revenue Gain' },
  'stats.annual': { fr: 'Estimation annuelle', en: 'Annual estimate' },
  'stats.note': { fr: "Estimations basées sur les données du", en: "Estimates based on data from" },
  'stats.note2': { fr: "et les rendements moyens de la zone des Niayes.", en: "and average yields in the Niayes zone." },

  // Testimonials
  'testimonials.badge': { fr: 'Témoignages Terrain', en: 'Field Testimonials' },
  'testimonials.title1': { fr: 'Ce que disent', en: 'What our' },
  'testimonials.title2': { fr: 'nos agriculteurs.', en: 'farmers say.' },
  'testimonials.subtitle': { fr: "Des retours concrets du terrain sénégalais — la preuve que la technologie change des vies.", en: "Real feedback from the Senegalese field — proof that technology changes lives." },

  // Partners
  'partners.badge': { fr: 'Reconnu & Soutenu', en: 'Recognized & Supported' },
  'partners.title1': { fr: 'Partenaires &', en: 'Partners &' },
  'partners.title2': { fr: 'Reconnaissance', en: 'Recognition' },
  'partners.footer': { fr: 'Ingénierie réalisée au Sénégal 🇸🇳 — Par des Africains, pour l\'Afrique.', en: 'Engineering made in Senegal 🇸🇳 — By Africans, for Africa.' },
  'partners.hult': { fr: 'Global Finalist 2026', en: 'Global Finalist 2026' },
  'partners.daust': { fr: 'Innovation Lab Partner', en: 'Innovation Lab Partner' },
  'partners.cfpt': { fr: 'Centre de Formation', en: 'Training Center' },
  'partners.niayes': { fr: 'Pilote Terrain Actif', en: 'Active Field Pilot' },

  // Team
  'team.title1': { fr: "L'équipe", en: 'The' },
  'team.title2': { fr: 'SUTURA.', en: 'SUTURA team.' },
  'team.desc': { fr: "Des ingénieurs sénégalais passionnés par l'innovation au service de l'agriculture africaine.", en: "Senegalese engineers passionate about innovation for African agriculture." },

  // FAQ
  'faq.title1': { fr: 'Questions', en: 'Frequently Asked' },
  'faq.title2': { fr: 'fréquentes.', en: 'Questions.' },
  'faq.q1': { fr: "Comment fonctionne SUTURA AI sans Internet ?", en: "How does SUTURA AI work without Internet?" },
  'faq.a1': { fr: "Notre système utilise la technologie LoRaWAN pour la communication entre les capteurs et le boîtier central. L'IA Edge traite les données localement, sans nécessiter de connexion Internet. Le système peut fonctionner en totale autonomie.", en: "Our system uses LoRaWAN technology for communication between sensors and the central box. Edge AI processes data locally, without requiring an Internet connection. The system can operate in total autonomy." },
  'faq.q2': { fr: "Est-ce que ça marche avec mon système d'irrigation existant ?", en: "Does it work with my existing irrigation system?" },
  'faq.a2': { fr: "Oui ! SUTURA AI s'intègre avec la plupart des systèmes d'irrigation existants grâce à nos électrovannes universelles. Notre équipe technique assure l'installation et l'adaptation à votre configuration.", en: "Yes! SUTURA AI integrates with most existing irrigation systems through our universal solenoid valves. Our technical team handles installation and adaptation to your setup." },
  'faq.q3': { fr: "Combien coûte le système SUTURA AI ?", en: "How much does SUTURA AI cost?" },
  'faq.a3': { fr: "Le kit de base commence à 350 000 FCFA pour une parcelle d'un hectare. Le retour sur investissement est généralement atteint en moins d'une saison grâce aux économies d'eau et à l'augmentation des rendements.", en: "The basic kit starts at 350,000 FCFA for a one-hectare plot. ROI is typically achieved in less than one season through water savings and increased yields." },
  'faq.q4': { fr: "Quelles langues sont supportées par l'IA Samba ?", en: "What languages does Samba AI support?" },
  'faq.a4': { fr: "Actuellement, Samba communique en Wolof et en Pulaar, les deux langues les plus parlées au Sénégal. Nous travaillons sur l'ajout du Sérère, du Diola et du Mandingue.", en: "Currently, Samba communicates in Wolof and Pulaar, the two most spoken languages in Senegal. We're working on adding Sérère, Diola, and Mandinka." },
  'faq.q5': { fr: "Comment l'autonomie solaire fonctionne-t-elle ?", en: "How does solar autonomy work?" },
  'faq.a5': { fr: "Chaque boîtier est équipé d'un panneau solaire et d'une batterie Li-ion. L'ensemble est dimensionné pour fonctionner 24h/24 même après 3 jours sans soleil, ce qui est extrêmement rare au Sénégal.", en: "Each box is equipped with a solar panel and Li-ion battery. The system is designed to operate 24/7 even after 3 days without sun, which is extremely rare in Senegal." },

  // Contact
  'contact.title1': { fr: 'Prêt à transformer', en: 'Ready to transform' },
  'contact.title2': { fr: 'votre agriculture ?', en: 'your agriculture?' },
  'contact.desc': { fr: "Contactez-nous pour découvrir comment SUTURA AI peut optimiser votre exploitation agricole.", en: "Contact us to discover how SUTURA AI can optimize your farm." },

  // Footer
  'footer.desc': { fr: "Conçu pour la Résilience.", en: "Built for Resilience." },
  'footer.desc2': { fr: "Optimisé pour l'Afrique.", en: "Optimized for Africa." },
  'footer.desc3': { fr: "Le système d'exploitation de l'agriculture de haute performance.", en: "The high-performance agricultural operating system." },
  'footer.contact_wa': { fr: 'Contactez-nous sur WhatsApp', en: 'Contact us on WhatsApp' },
  'footer.tech': { fr: 'Technique', en: 'Technical' },
  'footer.docs': { fr: 'Documentation', en: 'Documentation' },
  'footer.roadmap': { fr: 'Feuille de route Hult Prize', en: 'Hult Prize Roadmap' },
  'footer.api': { fr: 'API Hardware Edge', en: 'Edge Hardware API' },
  'footer.global': { fr: 'Global', en: 'Global' },
  'footer.copyright': { fr: "© 2026 SUTURA AI. Protéger l'avenir de l'agriculture africaine.", en: "© 2026 SUTURA AI. Protecting the future of African agriculture." },
  'footer.investors': { fr: 'Relations Investisseurs', en: 'Investor Relations' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.engineering': { fr: '"Ingénierie réalisée à DAUST & CFPT Sénégal Japon"', en: '"Engineering made at DAUST & CFPT Senegal Japan"' },

  // Live counter
  'counter.label': { fr: 'litres économisés depuis le lancement', en: 'liters saved since launch' },

  // Cookie Banner
  'cookie.title': { fr: 'Confidentialité & Cookies', en: 'Privacy & Cookies' },
  'cookie.desc': { fr: "SUTURA AI utilise des traceurs pour fluidifier votre navigation et analyser notre audience. Nous respectons vos droits : vos données agricoles et personnelles sont protégées.", en: "SUTURA AI uses trackers to smooth your browsing and analyze our audience. We respect your rights: your farming and personal data are protected." },
  'cookie.accept': { fr: "Accepter", en: "Accept" },
  'cookie.decline': { fr: "Refuser", en: "Decline" },
};

interface LandingI18nCtx {
  lang: LandingLang;
  setLang: (l: LandingLang) => void;
  t: (key: string) => string;
}

const LandingI18nContext = createContext<LandingI18nCtx>({
  lang: 'fr',
  setLang: () => {},
  t: (k) => k,
});

export function LandingI18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LandingLang>(() => {
    const stored = localStorage.getItem('sutura-landing-lang');
    return stored === 'en' ? 'en' : 'fr';
  });

  const setLang = useCallback((l: LandingLang) => {
    setLangState(l);
    localStorage.setItem('sutura-landing-lang', l);
  }, []);

  const t = useCallback((key: string) => {
    return translations[key]?.[lang] ?? key;
  }, [lang]);

  return (
    <LandingI18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LandingI18nContext.Provider>
  );
}

export function useLandingI18n() {
  return useContext(LandingI18nContext);
}
