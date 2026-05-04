import founderImg from "@/assets/about-founder.jpg";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border/60">
            <img
              src={founderImg}
              alt="Georgia Corine AVOMO EWAGA, fondatrice d'ESM"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden md:block bg-card rounded-2xl px-5 py-4 shadow-[var(--shadow-card)] border border-border/60">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Depuis</div>
            <div className="font-display text-2xl text-primary-deep">2016</div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">À propos d'ESM</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep leading-tight">
            Une exigence gabonaise au service d'une médecine sans frontières.
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Fondée à Libreville par <strong className="text-primary-deep">Georgia Corine AVOMO EWAGA</strong>,
            <em> Éclat Solutions Médical</em> est une société d'assistance médicale haut de gamme dédiée
            aux patients africains en quête de soins de référence à l'étranger.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Nous orchestrons chaque étape du parcours de soin — de l'évaluation du dossier
            à la convalescence — en partenariat avec les meilleurs établissements de Turquie,
            du Maroc, de France, des États-Unis et de Dubaï.
          </p>
          <div className="pt-4 border-t border-border/70">
            <p className="font-display text-xl text-primary-deep italic">
              « Chaque patient mérite un parcours de soin pensé comme une œuvre. »
            </p>
            <p className="mt-2 text-sm text-muted-foreground">— Georgia Corine AVOMO EWAGA, Fondatrice</p>
          </div>
        </div>
      </div>
    </section>
  );
}