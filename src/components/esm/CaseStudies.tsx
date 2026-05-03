const cases = [
  {
    tag: "Neurochirurgie",
    title: "Tumeur cérébrale complexe",
    desc: "Prise en charge en moins de trois semaines, intervention réalisée à Istanbul, retour autonome après quatre semaines de convalescence accompagnée.",
  },
  {
    tag: "Cardiologie pédiatrique",
    title: "Malformation cardiaque congénitale",
    desc: "Coordination entre l'équipe pédiatrique gabonaise et le service cardiothoracique partenaire. Famille hébergée et soutenue durant toute l'hospitalisation.",
  },
  {
    tag: "Ophtalmologie",
    title: "Greffe de cornée réussie",
    desc: "Bilan préopératoire à distance, greffe réalisée en Turquie, suivi ophtalmologique mensuel sur dix-huit mois après le retour au pays.",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-secondary border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Réussites / 04</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-primary-deep">
              des soins
              <br />
              menés
              <br />
              <span className="text-accent">à terme</span>
            </h2>
          </div>
          <p className="text-lg text-foreground/75 max-w-md leading-relaxed">
            Quelques parcours, parmi d'autres, qui témoignent de la précision et de l'humanité
            de notre accompagnement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
          {cases.map((c, i) => (
            <article key={c.title} className="bg-background p-10 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium">
                  {c.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1} / 03</span>
              </div>
              <h3 className="mt-10 font-display text-3xl md:text-4xl text-primary-deep leading-[0.95]">
                {c.title.toUpperCase()}
              </h3>
              <p className="mt-6 text-foreground/75 leading-relaxed flex-1">{c.desc}</p>
              <div className="mt-8 pt-6 border-t-2 border-foreground/10 text-sm font-display tracking-wider text-primary">
                MISSION ACCOMPLIE ✦
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
