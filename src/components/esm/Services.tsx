import { Stethoscope, FileText, Plane, Users, HeartPulse } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Évaluation médicale", desc: "Analyse approfondie de votre situation par notre comité médical et orientation vers la spécialité adaptée." },
  { icon: FileText, title: "Préparation du dossier", desc: "Constitution rigoureuse du dossier médical, traduction et transmission aux établissements partenaires." },
  { icon: Plane, title: "Organisation du voyage", desc: "Visa, billets d'avion, hébergement, transferts : tout est anticipé pour un déplacement serein." },
  { icon: Users, title: "Assistance sur place", desc: "Un coordinateur et un traducteur vous accompagnent à chaque rendez-vous et durant l'hospitalisation." },
  { icon: HeartPulse, title: "Suivi post-traitement", desc: "Continuité des soins, télémédecine et coordination avec vos médecins traitants à votre retour." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-primary-deep text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Services / 02</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl">
              un parcours
              <br />
              <span className="text-accent">intégral</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-lg leading-relaxed text-primary-foreground/80 lg:pt-4">
            Cinq étapes pensées comme un seul mouvement. Chacune confiée à des spécialistes,
            chacune coordonnée par un référent unique pour garantir cohérence et tranquillité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group bg-primary-deep p-10 hover:bg-primary transition-colors relative"
            >
              <span className="absolute top-6 right-6 font-mono text-xs text-primary-foreground/40">0{i + 1} / 05</span>
              <s.icon size={36} strokeWidth={1.4} className="text-accent" />
              <h3 className="mt-8 font-display text-3xl leading-tight">{s.title.toUpperCase()}</h3>
              <p className="mt-4 text-primary-foreground/75 leading-relaxed">{s.desc}</p>
            </article>
          ))}
          <article className="bg-accent p-10 flex flex-col justify-between">
            <h3 className="font-display text-3xl text-accent-foreground leading-tight">
              UN BESOIN
              <br />
              SPÉCIFIQUE ?
            </h3>
            <a href="#contact" className="mt-6 font-display tracking-wider text-sm text-accent-foreground border-b-2 border-accent-foreground self-start pb-1">
              PARLEZ-NOUS →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
