const cases = [
  {
    tag: "Neurochirurgie",
    title: "Une patiente opérée d'une tumeur cérébrale complexe",
    desc: "Prise en charge en moins de trois semaines, intervention réalisée à Istanbul, retour autonome au domicile après quatre semaines de convalescence accompagnée.",
  },
  {
    tag: "Cardiologie pédiatrique",
    title: "Un enfant opéré d'une malformation cardiaque congénitale",
    desc: "Coordination entre l'équipe pédiatrique gabonaise et le service cardiothoracique partenaire. Famille hébergée et soutenue durant toute l'hospitalisation.",
  },
  {
    tag: "Ophtalmologie",
    title: "Greffe de cornée et restauration de la vision",
    desc: "Bilan préopératoire à distance, greffe réussie en Turquie, suivi ophtalmologique mensuel sur dix-huit mois après le retour au pays.",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Réussites</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary-deep leading-tight">
              Des histoires de soins menées à terme.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Quelques parcours, parmi d'autres, qui témoignent de la précision et de l'humanité de notre accompagnement.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <article key={c.title} className="bg-card rounded-2xl p-8 border border-border/60 shadow-[var(--shadow-card)] flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.22em] uppercase text-accent font-medium px-3 py-1 rounded-full bg-accent-soft">
                  {c.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">N°0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-primary-deep leading-snug">{c.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
              <div className="mt-6 pt-6 border-t border-border/60 text-sm text-primary font-medium">
                Mission accomplie ✦
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}