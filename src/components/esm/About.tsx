export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 text-center">
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
            du Maroc et de France.

          </p>
          <div className="pt-6 border-t border-border/70 max-w-2xl mx-auto">
            <p className="font-display text-xl text-primary-deep italic">
              « Chaque patient mérite un parcours de soin pensé comme une œuvre. »
            </p>
            <p className="mt-2 text-sm text-muted-foreground">— Georgia Corine AVOMO EWAGA, Fondatrice</p>
          </div>
      </div>
    </section>
  );
}