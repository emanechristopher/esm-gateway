import { Lock, Eye, Heart, UserCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Confidentialité",
    desc: "Le secret médical est notre socle. Vos données sont protégées à chaque étape.",
  },
  {
    icon: Eye,
    title: "Transparence",
    desc: "Devis détaillés, choix éclairés, aucune zone d'ombre dans nos engagements.",
  },
  {
    icon: Heart,
    title: "Dignité humaine",
    desc: "Chaque patient est accueilli, écouté et accompagné avec respect.",
  },
  {
    icon: UserCheck,
    title: "Soin personnalisé",
    desc: "Un parcours ajusté à votre pathologie, votre culture et vos proches.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "Nous orientons vers les protocoles et technologies les plus avancés.",
  },
];

export function Charter() {
  return (
    <section id="charter" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">
            Charte éthique
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary-deep leading-tight">
            Cinq engagements qui guident chaque décision.
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-2xl p-7 border border-border/60 shadow-[var(--shadow-card)] hover:border-primary/40 transition-colors"
            >
              <div className="h-11 w-11 rounded-full bg-primary-soft flex items-center justify-center text-primary mb-5">
                <v.icon size={20} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl text-primary-deep">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
