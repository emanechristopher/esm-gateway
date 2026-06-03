import heroImg from "@/assets/hero-medical.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg.src}
          alt="Couloir d'hôpital lumineux"
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border/70 text-xs tracking-[0.2em] uppercase text-primary-deep shadow-[var(--shadow-card)]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Assistance médicale internationale
        </span>
        <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl text-primary-deep leading-[1.05]">
          Suivi médical de <span className="italic text-primary">haute définition</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          Votre santé à l'international, sans stress ni mauvaises surprises. ESM vous accompagne, du
          diagnostic au retour, avec rigueur et humanité.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium bg-primary text-primary-foreground hover:bg-primary-deep transition-all shadow-[var(--shadow-elegant)] hover:-translate-y-0.5"
          >
            Prendre contact
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium border border-border bg-card/80 backdrop-blur text-foreground hover:border-primary/40 transition-colors"
          >
            Découvrir nos services
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { k: "3", v: "Pays partenaires" },
            { k: "9+", v: "Hôpitaux référents" },
            { k: "100%", v: "Suivi personnalisé" },
            { k: "24/7", v: "Coordination dédiée" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-primary-deep">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
