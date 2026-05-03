import { Lock, Eye, Heart, UserCheck, Sparkles } from "lucide-react";

const values = [
  { icon: Lock, title: "Confidentialité", desc: "Le secret médical est notre socle. Vos données sont protégées à chaque étape." },
  { icon: Eye, title: "Transparence", desc: "Devis détaillés, choix éclairés, aucune zone d'ombre dans nos engagements." },
  { icon: Heart, title: "Dignité humaine", desc: "Chaque patient est accueilli, écouté et accompagné avec respect." },
  { icon: UserCheck, title: "Soin personnalisé", desc: "Un parcours ajusté à votre pathologie, votre culture et vos proches." },
  { icon: Sparkles, title: "Innovation", desc: "Nous orientons vers les protocoles et technologies les plus avancés." },
];

export function Charter() {
  return (
    <section id="charter" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Charte / 05</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-primary-deep">
              cinq
              <br />
              <span className="text-accent">engagements</span>
              <br />
              non négociables
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 lg:pt-4 text-lg text-foreground/75 leading-relaxed">
            Nos valeurs ne sont pas un décor. Elles guident chaque décision médicale, logistique
            et humaine que nous prenons pour vous.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
          {values.map((v, i) => (
            <div key={v.title} className="bg-background p-8 group hover:bg-accent transition-colors">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-accent-foreground/70">0{i + 1}</span>
                <v.icon size={22} strokeWidth={1.5} className="text-primary group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl text-primary-deep group-hover:text-accent-foreground leading-tight">{v.title.toUpperCase()}</h3>
              <p className="mt-3 text-sm text-foreground/70 group-hover:text-accent-foreground/90 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
