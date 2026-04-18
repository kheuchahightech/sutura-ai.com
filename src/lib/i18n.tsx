import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Lang = 'fr' | 'wo' | 'en';

const langLabels: Record<Lang, string> = { fr: 'Français', wo: 'Wolof', en: 'English' };
const langFlags: Record<Lang, string> = { fr: '🇫🇷', wo: '🇸🇳', en: '🇬🇧' };

// ─── TRANSLATIONS ───────────────────────────────────────────────
const translations: Record<string, Record<Lang, string>> = {
  // ── Nav / Layout ──
  'nav.overview': { fr: 'Vue d\'ensemble', wo: 'Xoolal lépp', en: 'Overview' },
  'nav.control': { fr: 'Centre de Contrôle', wo: 'Nëblal bi', en: 'Control Center' },
  'nav.samba': { fr: 'Samba AI', wo: 'Samba AI', en: 'Samba AI' },
  'nav.nodes': { fr: 'Santé Nœuds', wo: 'Wéru yi', en: 'Node Health' },
  'nav.credit': { fr: 'Crédit IA', wo: 'Crédi IA', en: 'AI Credit' },
  'nav.climat': { fr: 'Résilience', wo: 'Dëkkalé', en: 'Resilience' },
  'nav.marche': { fr: 'Marché', wo: 'Marse bi', en: 'Market' },
  'nav.logout': { fr: 'Déconnexion', wo: 'Génn', en: 'Logout' },
  'nav.logout_mobile': { fr: 'Sortir', wo: 'Génn', en: 'Out' },
  'nav.demo': { fr: 'Démo', wo: 'Démo', en: 'Demo' },
  'nav.live': { fr: 'EN DIRECT', wo: 'DIRECT', en: 'LIVE' },

  // ── Overview ──
  'overview.title': { fr: 'Vue d\'ensemble', wo: 'Xoolal lépp', en: 'Overview' },
  'overview.subtitle': { fr: 'Monitoring temps réel de vos parcelles', wo: 'Seetlu sa tool yi ci diir bu yàgg', en: 'Real-time monitoring of your plots' },
  'overview.investor_view': { fr: 'Vue Investisseur', wo: 'Xoolal ndimbalante', en: 'Investor View' },
  'overview.farmer_view': { fr: 'Vue Agriculteur', wo: 'Xoolal bëykat', en: 'Farmer View' },
  'overview.soil_humidity': { fr: 'Humidité du Sol', wo: 'Noolukaay suuf si', en: 'Soil Humidity' },
  'overview.optimal': { fr: 'Optimal', wo: 'Bu baax', en: 'Optimal' },
  'overview.critical': { fr: 'Critique', wo: 'Xeltu', en: 'Critical' },
  'overview.health_score': { fr: 'Score Santé', wo: 'Tolof wéru', en: 'Health Score' },
  'overview.composite': { fr: 'Indice composite', wo: 'Tolof mbooleem', en: 'Composite index' },
  'overview.solar_battery': { fr: 'Batterie Solaire', wo: 'Batiri jant', en: 'Solar Battery' },
  'overview.charging': { fr: 'Chargement actif ☀️', wo: 'Yengu naa ☀️', en: 'Charging ☀️' },
  'overview.not_charging': { fr: 'Solaire inactif', wo: 'Jant tëdda', en: 'Solar inactive' },
  'overview.temperature': { fr: 'Température', wo: 'Tangaay', en: 'Temperature' },
  'overview.hygrometry': { fr: 'Hygrométrie', wo: 'Noolukaay asamaan', en: 'Hygrometry' },
  'overview.last_update': { fr: 'Dernière mesure', wo: 'Tolof gu mujj', en: 'Last reading' },
  'overview.trend': { fr: 'Tendance capteurs', wo: 'Njëlbéen yi', en: 'Sensor trend' },
  'overview.recent_alerts': { fr: 'Alertes récentes', wo: 'Xeltu yi mujj', en: 'Recent alerts' },
  'overview.no_alerts': { fr: 'Aucune alerte récente', wo: 'Amul xeltu', en: 'No recent alerts' },
  'overview.loading': { fr: 'Chargement...', wo: 'Di yengu...', en: 'Loading...' },
  'overview.water_saved': { fr: 'Eau économisée', wo: 'Ndox gu dul jee', en: 'Water saved' },
  'overview.system_uptime': { fr: 'Uptime système', wo: 'Wéru lu tax', en: 'System uptime' },
  'overview.active_plots': { fr: 'Parcelles actives', wo: 'Tool yi nekk', en: 'Active plots' },
  'overview.energy_reduction': { fr: 'Réduction énergie', wo: 'Wàññi kàttan', en: 'Energy reduction' },
  'overview.impact_season': { fr: 'Impact Mesurable — Saison 2026', wo: 'Njëlbéen gu leer — Nawet 2026', en: 'Measurable Impact — Season 2026' },
  'overview.impact_report': { fr: 'Rapport d\'Impact PDF', wo: 'Raport njëlbéen', en: 'Impact Report PDF' },
  'overview.generate_report': { fr: 'Générer le rapport', wo: 'Defal raport bi', en: 'Generate report' },
  'overview.env_certs': { fr: 'Certifications Environnementales', wo: 'Sartifika àddina', en: 'Environmental Certifications' },

  // ── Control ──
  'control.title': { fr: 'Centre de Contrôle — Électrovannes', wo: 'Nëblal — Robine yi', en: 'Control Center — Valves' },
  'control.subtitle_live': { fr: '🟢 Commandes envoyées en temps réel via ESP32.', wo: '🟢 Ndigal yi di dem ci ESP32.', en: '🟢 Commands sent in real-time via ESP32.' },
  'control.subtitle_demo': { fr: '🟡 Mode démo — branchez l\'ESP32 pour le contrôle réel.', wo: '🟡 Démo — tàqal ESP32 bi ngir nëblal dëgg.', en: '🟡 Demo — connect ESP32 for real control.' },
  'control.open': { fr: 'Ouvert', wo: 'Ubbi', en: 'Open' },
  'control.closed': { fr: 'Fermé', wo: 'Tëj', en: 'Closed' },
  'control.opening': { fr: 'Ouverture', wo: 'Ubbi', en: 'Opening' },
  'control.closing': { fr: 'Fermeture', wo: 'Tëj', en: 'Closing' },
  'control.since': { fr: 'depuis', wo: 'dale', en: 'since' },
  'control.journal': { fr: 'Journal des commandes', wo: 'Kaayitam ndigal yi', en: 'Command log' },
  'control.time': { fr: 'Heure', wo: 'Waxtu', en: 'Time' },
  'control.valve': { fr: 'Vanne', wo: 'Robine', en: 'Valve' },
  'control.action': { fr: 'Action', wo: 'Jëf', en: 'Action' },
  'control.source': { fr: 'Source', wo: 'Jëmm', en: 'Source' },
  'control.status': { fr: 'Statut', wo: 'Wéet', en: 'Status' },
  'control.sent': { fr: 'Envoyé ✓', wo: 'Yónnee ✓', en: 'Sent ✓' },
  'control.sending': { fr: 'Envoi en cours...', wo: 'Di yónnee...', en: 'Sending...' },

  // ── Samba ──
  'samba.title': { fr: 'Samba Intelligence Hub', wo: 'Samba Xel Hub', en: 'Samba Intelligence Hub' },
  'samba.live_feed': { fr: 'Flux Samba AI — Temps Réel', wo: 'Samba AI — Direct', en: 'Samba AI — Real-Time Feed' },
  'samba.simulate': { fr: 'Simuler commande...', wo: 'Nataal ndigal...', en: 'Simulate command...' },
  'samba.competitive': { fr: 'SUTURA vs Concurrents — Avantages Clés', wo: 'SUTURA ak concurrents yi', en: 'SUTURA vs Competitors — Key Advantages' },
  'samba.voice_analytics': { fr: 'Analytique Vocale Samba', wo: 'Samba baat bu yàgg', en: 'Samba Voice Analytics' },
  'samba.commands_30d': { fr: 'commandes · 30j', wo: 'ndigal · 30 fan', en: 'commands · 30d' },
  'samba.wolof_rec': { fr: 'Reconnaissance Wolof', wo: 'Déggoo Wolof', en: 'Wolof Recognition' },
  'samba.pulaar_rec': { fr: 'Reconnaissance Pulaar', wo: 'Déggoo Pulaar', en: 'Pulaar Recognition' },
  'samba.offline_cmds': { fr: 'Commandes offline', wo: 'Ndigal ci biir', en: 'Offline commands' },
  'samba.decision_latency': { fr: 'Latence décision', wo: 'Diiru tukki', en: 'Decision latency' },
  'samba.listening': { fr: 'Samba écoute...', wo: 'Samba di dégg...', en: 'Samba listening...' },

  // ── Nodes ──
  'nodes.title': { fr: 'Santé des Nœuds ESP32', wo: 'Wéru ESP32 yi', en: 'ESP32 Node Health' },
  'nodes.active': { fr: 'Nœuds actifs', wo: 'Wéru yi nekk', en: 'Active nodes' },
  'nodes.avg_signal': { fr: 'Signal moyen', wo: 'Sañal digg', en: 'Avg signal' },
  'nodes.source': { fr: 'Source', wo: 'Jëmm', en: 'Source' },
  'nodes.alerts': { fr: 'Alertes', wo: 'Xeltu', en: 'Alerts' },
  'nodes.node_id': { fr: 'Node ID', wo: 'Node ID', en: 'Node ID' },
  'nodes.parcelle': { fr: 'Parcelle', wo: 'Tool', en: 'Plot' },
  'nodes.firmware': { fr: 'Firmware', wo: 'Firmware', en: 'Firmware' },
  'nodes.status': { fr: 'Statut', wo: 'Wéet', en: 'Status' },
  'nodes.rssi': { fr: 'RSSI (dBm)', wo: 'RSSI (dBm)', en: 'RSSI (dBm)' },
  'nodes.battery': { fr: 'Batterie', wo: 'Batiri', en: 'Battery' },
  'nodes.solar': { fr: 'Solaire', wo: 'Jant', en: 'Solar' },
  'nodes.last_sync': { fr: 'Dernière synchro', wo: 'Yengu gu mujj', en: 'Last sync' },
  'nodes.actions': { fr: 'Actions', wo: 'Jëf', en: 'Actions' },
  'nodes.online': { fr: 'En ligne', wo: 'Ci biir', en: 'Online' },
  'nodes.weak': { fr: 'Faible signal', wo: 'Sañal néew', en: 'Weak signal' },
  'nodes.offline': { fr: 'Hors ligne', wo: 'Ci biti', en: 'Offline' },
  'nodes.refresh': { fr: 'Actualiser', wo: 'Seetlu', en: 'Refresh' },
  'nodes.export_csv': { fr: 'Export CSV', wo: 'Yónneel CSV', en: 'Export CSV' },
  'nodes.last_refresh': { fr: 'Dernière actualisation', wo: 'Seetlu gu mujj', en: 'Last refresh' },
  'nodes.ago_min': { fr: 'Il y a {n}min', wo: '{n}min ci ginaaw', en: '{n}min ago' },
  'nodes.just_now': { fr: 'À l\'instant', wo: 'Léegi', en: 'Just now' },
  'nodes.offline_since': { fr: 'Hors ligne depuis {n}h', wo: 'Ci biti dale {n}h', en: 'Offline since {n}h' },

  // ── Credit ──
  'credit.title': { fr: 'Crédit IA — Score AgriFinance', wo: 'Crédi IA — Tolof AgriFinance', en: 'AI Credit — AgriFinance Score' },
  'credit.subtitle': { fr: 'Score de crédit agricole calculé en temps réel depuis les données capteurs.', wo: 'Tolof crédi soxna lim ci capteurs yi.', en: 'Agricultural credit score calculated in real-time from sensor data.' },
  'credit.composite': { fr: 'Score composite AgriFinance', wo: 'Tolof mbooleem AgriFinance', en: 'AgriFinance composite score' },
  'credit.excellent': { fr: 'Excellent', wo: 'Baax lool', en: 'Excellent' },
  'credit.good': { fr: 'Bon', wo: 'Baax', en: 'Good' },
  'credit.average': { fr: 'Moyen', wo: 'Digg', en: 'Average' },
  'credit.at_risk': { fr: 'À risque', wo: 'Xeltu', en: 'At risk' },
  'credit.detail': { fr: 'Détail des indicateurs', wo: 'Tolof yi ci biir', en: 'Indicator details' },
  'credit.irrigation_reg': { fr: 'Régularité d\'irrigation', wo: 'Ndoxal bu baax', en: 'Irrigation regularity' },
  'credit.est_yield': { fr: 'Rendement estimé', wo: 'Yokk gu am', en: 'Estimated yield' },
  'credit.sensor_health': { fr: 'Santé des capteurs', wo: 'Wéru capteurs yi', en: 'Sensor health' },
  'credit.formula': { fr: 'Formule: Score = (Irrigation × 0.4) + (Rendement × 0.35) + (Capteurs × 0.25)', wo: 'Formul: Tolof = (Ndox × 0.4) + (Yokk × 0.35) + (Capteur × 0.25)', en: 'Formula: Score = (Irrigation × 0.4) + (Yield × 0.35) + (Sensors × 0.25)' },
  'credit.avg_humidity': { fr: 'Humidité moyenne', wo: 'Noolukaay digg', en: 'Average humidity' },
  'credit.projected_yield': { fr: 'Rendement projeté', wo: 'Yokk gu am suba', en: 'Projected yield' },
  'credit.active_sensors': { fr: 'Capteurs actifs', wo: 'Capteurs yi nekk', en: 'Active sensors' },
  'credit.eligibility': { fr: 'Éligibilité crédit', wo: 'Crédi jàpp', en: 'Credit eligibility' },
  'credit.yes': { fr: 'Oui', wo: 'Waaw', en: 'Yes' },
  'credit.no': { fr: 'Non', wo: 'Déet', en: 'No' },
  'credit.financeable': { fr: 'Profil finançable', wo: 'Am nga jàpp', en: 'Financeable profile' },
  'credit.insufficient': { fr: 'Score insuffisant', wo: 'Tolof néew', en: 'Score insufficient' },
  'credit.export': { fr: 'Exporter rapport AgriFinance', wo: 'Yónneel raport AgriFinance', en: 'Export AgriFinance report' },
  'credit.last_update': { fr: 'Dernière mise à jour', wo: 'Seetlu gu mujj', en: 'Last update' },
  'credit.readings': { fr: 'lectures', wo: 'tolof', en: 'readings' },
  'credit.uptime': { fr: 'uptime', wo: 'ci kanam', en: 'uptime' },
  'credit.vs_target': { fr: 'vs objectif', wo: 'ak lu am', en: 'vs target' },

  // ── Climat ──
  'climat.title': { fr: 'Résilience Climatique', wo: 'Dëkkalé Asamaan', en: 'Climate Resilience' },
  'climat.resilience_score': { fr: 'Score de Résilience Climatique', wo: 'Tolof dëkkalé asamaan', en: 'Climate Resilience Score' },
  'climat.soil_health': { fr: 'Santé du sol', wo: 'Wéru suuf', en: 'Soil health' },
  'climat.water_efficiency': { fr: 'Efficacité hydrique', wo: 'Ndox gu baax', en: 'Water efficiency' },
  'climat.battery_autonomy': { fr: 'Autonomie batterie', wo: 'Batiri gu yàgg', en: 'Battery autonomy' },
  'climat.insurance_note': { fr: 'Ce score est utilisé par nos partenaires assureurs pour calculer votre prime d\'assurance paramétrique.', wo: 'Tolof bii assureurs yi ko jëfandikoo ngir lim prime.', en: 'This score is used by our insurance partners to calculate your parametric insurance premium.' },
  'climat.forecast_7d': { fr: 'Prévision 7 jours', wo: 'Nataal 7 fan', en: '7-day forecast' },
  'climat.water_footprint': { fr: 'Empreinte Hydrique', wo: 'Ndox gu dul jee', en: 'Water Footprint' },
  'climat.water_saved_vs': { fr: 'Eau économisée vs irrigation traditionnelle', wo: 'Ndox gu dul jee vs ndoxal bu yàgg', en: 'Water saved vs traditional irrigation' },
  'climat.insurance': { fr: 'Assurance Paramétrique', wo: 'Assurance Paramétrique', en: 'Parametric Insurance' },
  'climat.eligible': { fr: 'ÉLIGIBLE', wo: 'AM JÀPP', en: 'ELIGIBLE' },
  'climat.activate': { fr: 'Activer mon assurance', wo: 'Tàqal sama assurance', en: 'Activate my insurance' },
  'climat.climate_history': { fr: 'Corrélation pluviométrie / humidité sol', wo: 'Taw ak noolukaay suuf', en: 'Rainfall / soil humidity correlation' },
  'climat.critical_val': { fr: 'Critique (0)', wo: 'Xeltu (0)', en: 'Critical (0)' },
  'climat.medium_val': { fr: 'Moyen (50)', wo: 'Digg (50)', en: 'Medium (50)' },
  'climat.excellent_val': { fr: 'Excellent (100)', wo: 'Baax lool (100)', en: 'Excellent (100)' },

  // ── Marché ──
  'marche.title': { fr: 'Marketplace Intégrée', wo: 'Marse bi', en: 'Integrated Marketplace' },
  'marche.estimated_harvest': { fr: 'Récolte estimée', wo: 'Yokk gu am', en: 'Estimated harvest' },
  'marche.current_price': { fr: 'Prix marché actuel', wo: 'Njëg marse', en: 'Current market price' },
  'marche.estimated_revenue': { fr: 'Revenu estimé', wo: 'Xaalis gu am', en: 'Estimated revenue' },
  'marche.available_buyers': { fr: 'Acheteurs Disponibles', wo: 'Jëndkat yi', en: 'Available Buyers' },
  'marche.buyer': { fr: 'Acheteur', wo: 'Jëndkat', en: 'Buyer' },
  'marche.product': { fr: 'Produit recherché', wo: 'Lu ñu bëgg', en: 'Product wanted' },
  'marche.quantity': { fr: 'Quantité', wo: 'Lim', en: 'Quantity' },
  'marche.offered_price': { fr: 'Prix offert', wo: 'Njëg', en: 'Offered price' },
  'marche.status': { fr: 'Statut', wo: 'Wéet', en: 'Status' },
  'marche.action': { fr: 'Action', wo: 'Jëf', en: 'Action' },
  'marche.contact': { fr: 'Contacter', wo: 'Wootal', en: 'Contact' },
  'marche.certification': { fr: 'Certification Qualité SUTURA', wo: 'Sartifika SUTURA', en: 'SUTURA Quality Certification' },
  'marche.download_cert': { fr: 'Télécharger certificat', wo: 'Yónneel sartifika', en: 'Download certificate' },
  'marche.close': { fr: 'Fermer', wo: 'Tëj', en: 'Close' },

  // ── Alerts ──
  'alerts.title': { fr: 'Alertes', wo: 'Xeltu', en: 'Alerts' },
  'alerts.none': { fr: 'Aucune alerte', wo: 'Amul xeltu', en: 'No alerts' },
  'alerts.sms_enabled': { fr: 'SMS activés', wo: 'SMS tàq nañu', en: 'SMS enabled' },
  'alerts.sms_disabled': { fr: 'SMS désactivés', wo: 'SMS tëdd nañu', en: 'SMS disabled' },

  // ── Profile ──
  'nav.profile': { fr: 'Mon Profil', wo: 'Sama Profil', en: 'My Profile' },
  'nav.alerts': { fr: 'Alertes', wo: 'Yééné yi', en: 'Alerts' },
  'profile.member_since': { fr: 'Membre depuis', wo: 'Membre dale', en: 'Member since' },
  'profile.credits_remaining': { fr: 'Crédits restants', wo: 'Crédi yi des', en: 'Credits remaining' },
  'profile.credits_unit': { fr: 'crédits', wo: 'crédi', en: 'credits' },
  'profile.personal_info': { fr: 'Informations personnelles', wo: 'Sama xam-xam', en: 'Personal Information' },
  'profile.full_name': { fr: 'Nom complet', wo: 'Tur bu mat', en: 'Full name' },
  'profile.full_name_placeholder': { fr: 'Votre nom complet', wo: 'Sa tur bu mat', en: 'Your full name' },
  'profile.phone': { fr: 'Téléphone', wo: 'Telefon', en: 'Phone' },
  'profile.country': { fr: 'Pays', wo: 'Réew', en: 'Country' },
  'profile.country_placeholder': { fr: 'Ex: Sénégal', wo: 'Misaal: Senegaal', en: 'Ex: Senegal' },
  'profile.org_name': { fr: 'Organisation', wo: 'Mbooloom', en: 'Organization' },
  'profile.org_name_placeholder': { fr: 'Nom de votre organisation', wo: 'Tur mbooloom bi', en: 'Organization name' },
  'profile.org_profile': { fr: 'Type d\'organisation', wo: 'Xeetu mbooloom', en: 'Organization type' },
  'profile.select_profile': { fr: 'Sélectionner...', wo: 'Tànn...', en: 'Select...' },
  'profile.cooperative': { fr: 'Coopérative agricole', wo: 'Kooperatiif bëy', en: 'Agricultural cooperative' },
  'profile.family_farm': { fr: 'Exploitation familiale', wo: 'Bëy wu waa kër', en: 'Family farm' },
  'profile.agro_industry': { fr: 'Agro-industrie', wo: 'Agro-industri', en: 'Agro-industry' },
  'profile.ngo': { fr: 'ONG / Association', wo: 'ONG / Mbooloom', en: 'NGO / Association' },
  'profile.save': { fr: 'Enregistrer', wo: 'Denc', en: 'Save' },
  'profile.saved': { fr: 'Profil mis à jour ✓', wo: 'Profil moo seetlu ✓', en: 'Profile updated ✓' },
  'profile.save_error': { fr: 'Erreur lors de la sauvegarde', wo: 'Njuumte ci denc', en: 'Error saving' },
  'profile.photo_updated': { fr: 'Photo mise à jour ✓', wo: 'Nataal moo seetlu ✓', en: 'Photo updated ✓' },
  'profile.upload_error': { fr: 'Erreur lors de l\'upload', wo: 'Njuumte ci yónnee', en: 'Upload error' },
  'profile.buy_credits': { fr: 'Acheter des crédits', wo: 'Jënd crédi', en: 'Buy credits' },
  'profile.buy': { fr: 'Acheter', wo: 'Jënd', en: 'Buy' },
  'profile.pack': { fr: 'Pack', wo: 'Pack', en: 'Pack' },
  'profile.popular': { fr: 'POPULAIRE', wo: 'RAFET', en: 'POPULAR' },
  'profile.credits_added': { fr: '{n} crédits ajoutés ✓', wo: '{n} crédi ñu dugal ✓', en: '{n} credits added ✓' },
  'profile.transaction_history': { fr: 'Historique des transactions', wo: 'Kaayitam jënd yi', en: 'Transaction history' },
  'profile.no_transactions': { fr: 'Aucune transaction pour le moment', wo: 'Amul jënd', en: 'No transactions yet' },

  // ── Theme ──
  'theme.light': { fr: 'Mode Clair', wo: 'Leer', en: 'Light Mode' },
  'theme.dark': { fr: 'Mode Sombre', wo: 'Lëndëm', en: 'Dark Mode' },
};

// ─── CONTEXT ────────────────────────────────────────────────────
interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  langLabels: Record<Lang, string>;
  langFlags: Record<Lang, string>;
}

const I18nContext = createContext<I18nCtx>({
  lang: 'fr',
  setLang: () => {},
  t: (k) => k,
  langLabels,
  langFlags,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('sutura-lang');
    return (stored === 'fr' || stored === 'wo' || stored === 'en') ? stored : 'fr';
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('sutura-lang', l);
  }, []);

  const t = useCallback((key: string, vars?: Record<string, string | number>) => {
    let str = translations[key]?.[lang] ?? translations[key]?.['fr'] ?? key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, String(v));
      });
    }
    return str;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, langLabels, langFlags }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
