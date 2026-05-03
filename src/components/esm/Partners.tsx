const partners = [
  "LIV Hospital", "Medipol Mega", "Biruni Hospital",
  "Medical Park", "Hisar Hospital", "Medicana",
  "Acıbadem", "Memorial", "Florence Nightingale",
];

export function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Hôpitaux partenaires</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary-deep leading-tight">
            Un réseau d'excellence, sélectionné avec exigence.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Nous collaborons avec les institutions les plus reconnues de Turquie et au-delà,
            chacune choisie pour son expertise et son éthique.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-px bg-border/70 rounded-2xl overflow-hidden border border-border/70 shadow-[var(--shadow-card)]">
          {partners.map((p) => (
            <div
              key={p}
              className="bg-card px-6 py-10 flex items-center justify-center text-center font-display text-xl text-primary-deep hover:bg-primary-soft transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}