const partners = [
  "LIV Hospital", "Medipol Mega", "Biruni Hospital",
  "Medical Park", "Hisar Hospital", "Medicana",
  "Acıbadem", "Memorial", "Florence Nightingale",
];

export function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Partenaires / 03</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-primary-deep">
              un réseau
              <br />
              <span className="text-accent">d'excellence</span>,
              <br />
              choisi avec
              <br />
              <span className="text-primary">exigence</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 lg:pt-4 text-lg text-foreground/75 leading-relaxed">
            Nous collaborons avec des institutions reconnues internationalement pour leur expertise
            clinique, leur plateau technique et leur éthique de soin.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
          {partners.map((p, i) => (
            <div
              key={p}
              className="bg-background px-6 py-12 flex flex-col items-start gap-3 hover:bg-primary-soft transition-colors"
            >
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">0{i + 1}</span>
              <span className="font-display text-2xl md:text-3xl text-primary-deep leading-tight">{p.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
