import { Stethoscope, FileText, Plane, Users, HeartPulse } from "lucide-react";
import serviceImg from "@/assets/service-medical.jpg";

const services = [
  { icon: Stethoscope, title: "Évaluation médicale", desc: "Analyse approfondie de votre situation par notre comité médical et orientation vers la spécialité adaptée." },
  { icon: FileText, title: "Préparation du dossier", desc: "Constitution rigoureuse du dossier médical, traduction et transmission aux établissements partenaires." },
  { icon: Plane, title: "Organisation du voyage", desc: "Visa, billets d'avion, hébergement, transferts : tout est anticipé pour un déplacement serein." },
  { icon: Users, title: "Assistance sur place", desc: "Un coordinateur et un traducteur vous accompagnent à chaque rendez-vous et durant l'hospitalisation." },
  { icon: HeartPulse, title: "Suivi post-traitement", desc: "Continuité des soins, télémédecine et coordination avec vos médecins traitants à votre retour." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Nos services</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary-deep leading-tight">
              Un accompagnement intégral, pensé pour votre tranquillité.
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-border/60">
            <img
              src={serviceImg}
              alt="Équipe chirurgicale en bloc opératoire"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-card rounded-2xl p-8 border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={22} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-2xl text-primary-deep">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="absolute top-6 right-6 text-xs text-muted-foreground/60 font-mono">0{i + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}