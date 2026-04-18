import { motion } from 'motion/react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';
import { useLandingI18n } from '@/lib/landing-i18n';
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const team = [
  { 
    name: 'Cheikh Abdou Khadre DIALLO', 
    role: 'CEO – Systèmes & Génie Mécanique', 
    school: 'Ingénieur DAUST', 
    img: '/team/Cheikh.jpeg',
    bio: 'Passionné par la conception mécanique et l\'intégration de systèmes complexes, Cheikh pilote la vision stratégique de Sutura AI. Son expertise technique lui permet de lier le hardware à l\'intelligence artificielle avec une efficacité redoutable pour créer des solutions innovantes.',
    skills: ['Génie Mécanique', 'Systèmes Embarqués', 'Fusion 360', 'Management'],
    linkedin: '#',
    github: '#'
  },
  { 
    name: 'Notue Deffo Vanessa Orlanne', 
    role: 'CTO – Génie Électrique & IoT', 
    school: 'Ingénieur DAUST', 
    img: '/team/vanessa.png',
    bio: 'Vanessa est l\'architecte technique derrière nos solutions IoT. Experte en génie électrique, elle conçoit les circuits et l\'infrastructure permettant à nos systèmes de communiquer en temps réel, garantissant robustesse et fiabilité sur le terrain.',
    skills: ['Génie Électrique', 'IoT & Réseaux', 'Electronique', 'Architecture Hardware'],
    linkedin: '#',
    github: '#'
  },
  { 
    name: 'Ludovic Martin Nestor Aly Faye', 
    role: 'Assistant CMO – Génie Mécanique', 
    school: 'Ingénieur DAUST', 
    img: '/team/luv.png',
    bio: 'Ludovic allie sa formation d\'ingénieur en génie mécanique à une forte fibre marketing pour comprendre et répondre aux besoins précis de nos clients. Il fait le pont entre la technologie brute et l\'impact pratique sur le marché.',
    skills: ['Génie Mécanique', 'Marketing Tech', 'Analyse de Marché', 'Design Produit'],
    linkedin: '#',
    github: '#'
  },
  { 
    name: 'Sira DIALLO', 
    role: 'CMO – Génie Mécanique', 
    school: 'Ingénieur DAUST', 
    img: '/team/sira.jpeg',
    bio: 'Sira dirige notre stratégie marketing globale. Grâce à son background d\'ingénieur, elle comprend en profondeur nos produits technologiques et excelle dans l\'art de les positionner de manière percutante sur le marché B2B et B2C.',
    skills: ['Stratégie Marketing', 'Génie Mécanique', 'Communication', 'Ventes B2B'],
    linkedin: '#',
    github: '#'
  },
  { 
    name: 'Mousse BA', 
    role: 'Génie Informatique', 
    school: 'Ingénieur DAUST', 
    img: '/team/mousse.jpeg',
    bio: 'Mousse est spécialisé dans le développement logiciel et l\'ingénierie informatique. Il est garant de la robustesse, de la sécurité et des performances du code qui alimente les plateformes et applications Sutura AI.',
    skills: ['Développement Logiciel', 'Architecture Réseau', 'Gestion de Projets', 'Bases de données'],
    linkedin: '#',
    github: '#'
  },
];

export default function TeamSection() {
  const { t } = useLandingI18n();

  return (
    <section id="equipe" className="py-32 px-4 md:px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 relative z-10">
          <Badge variant="outline" className="mb-4 py-1.5 px-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 tracking-widest">
            NOTRE ÉQUIPE
          </Badge>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-6 text-foreground font-display">
            {t('team.title1')} <span className="text-secondary">{t('team.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">{t('team.desc')}</p>
        </motion.div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-6 pt-4 pb-12 px-2">
              {team.map((member, i) => (
                <CarouselItem key={member.name} className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6, type: 'spring', stiffness: 100 }} whileHover={{ y: -10, scale: 1.03 }} className="glass-card rounded-[2rem] overflow-hidden group cursor-pointer text-center h-full flex flex-col shadow-lg border border-white/5">
                        <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                              <ExternalLink size={14} /> Voir le profil
                            </span>
                          </div>
                          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center font-black text-xs text-foreground shadow">
                            {i + 1}
                          </div>
                        </div>
                        <div className="p-5 md:p-6 flex-1 flex flex-col justify-center bg-card/30 backdrop-blur-sm">
                          <h3 className="text-sm md:text-base font-black text-foreground leading-tight">{member.name}</h3>
                          <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-2">{member.role}</p>
                        </div>
                      </motion.div>
                    </DialogTrigger>
                    
                    <DialogContent className="sm:max-w-[800px] bg-background/80 backdrop-blur-3xl border-white/10 p-0 overflow-hidden glass-card rounded-[2rem] shadow-2xl">
                      <div className="grid md:grid-cols-[2fr_3fr]">
                          <div className="relative aspect-square md:aspect-auto h-full min-h-[300px]">
                              <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale" />
                              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background to-transparent md:to-transparent/20" />
                          </div>
                          <div className="p-8 md:p-10 flex flex-col justify-center">
                              <Badge variant="outline" className="w-fit mb-4 text-[10px] tracking-widest border-secondary/20 text-secondary bg-secondary/10 px-3 py-1">
                                EXPERT(E) SUTURA
                              </Badge>
                              <DialogTitle className="text-2xl md:text-4xl font-black mb-2 tracking-tight">{member.name}</DialogTitle>
                              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
                                {member.role}
                              </p>
                              
                              <DialogDescription className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base">
                                  {member.bio}
                              </DialogDescription>
                              
                              <div className="mb-10">
                                  <h4 className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider opacity-60">Domaines d'expertise</h4>
                                  <div className="flex flex-wrap gap-2">
                                      {member.skills.map(skill => (
                                          <Badge key={skill} variant="secondary" className="bg-primary/5 hover:bg-primary/10 text-xs font-medium text-foreground py-1.5 px-3">
                                              {skill}
                                          </Badge>
                                      ))}
                                  </div>
                              </div>
                              
                              <div className="flex items-center gap-4 mt-auto">
                                <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30 transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href={member.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-300">
                                    <Github size={20} />
                                </a>
                              </div>
                          </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-12 w-12 bg-background/50 backdrop-blur hover:bg-secondary hover:text-secondary-foreground hover:border-secondary border-white/10 transition-all" />
              <CarouselNext className="relative inset-0 translate-y-0 h-12 w-12 bg-background/50 backdrop-blur hover:bg-secondary hover:text-secondary-foreground hover:border-secondary border-white/10 transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
