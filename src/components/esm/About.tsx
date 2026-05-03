export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">À propos / 01</span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-primary-deep">
            une exigence
            <br />
            <span className="text-accent">gabonaise</span>
            <br />
            au service du
            <br />
            <span className="text-primary">monde</span>
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pt-4 space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            Fondée à Libreville par <strong className="text-primary-deep">Georgia Corine AVOMO EWAGA</strong>,
            <em> Éclat Solutions Médical</em> est une société d'assistance médicale dédiée
            aux patients africains en quête de soins de référence à l'étranger.
          </p>
          <p>
            Nous orchestrons chaque étape du parcours de soin — de l'évaluation du dossier
            à la convalescence — en partenariat avec les meilleurs établissements de Turquie,
            du Maroc, de France, des États-Unis et de Dubaï.
          </p>
          <div className="pt-8 border-t-2 border-foreground/20">
            <p className="font-display text-3xl md:text-4xl text-primary-deep leading-tight">
              « Chaque patient mérite un parcours de soin pensé comme une <span className="text-accent">œuvre</span>. »
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Georgia Corine AVOMO EWAGA — Fondatrice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
