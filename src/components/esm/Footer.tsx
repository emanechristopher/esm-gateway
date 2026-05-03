export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display text-2xl">É</span>
              <div className="leading-tight">
                <div className="font-display text-2xl tracking-tight">ÉCLAT SOLUTIONS</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60 mt-1">Médical · ESM</div>
              </div>
            </div>
            <p className="mt-8 font-display text-3xl md:text-4xl leading-[0.95] max-w-md">
              du <span className="text-accent">Gabon</span> vers les meilleurs hôpitaux du <span className="text-accent">monde</span>.
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 mb-5">Navigation</div>
            <ul className="space-y-3 font-display text-xl">
              <li><a href="#about" className="hover:text-accent">À PROPOS</a></li>
              <li><a href="#services" className="hover:text-accent">SERVICES</a></li>
              <li><a href="#partners" className="hover:text-accent">PARTENAIRES</a></li>
              <li><a href="#cases" className="hover:text-accent">RÉUSSITES</a></li>
              <li><a href="#contact" className="hover:text-accent">CONTACT</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 mb-5">Coordonnées</div>
            <ul className="space-y-3 text-base text-primary-foreground/85">
              <li>Libreville, Gabon</li>
              <li><a href="tel:+24166940740" className="hover:text-accent">+241 66 94 07 40</a></li>
              <li><a href="tel:+905445649917" className="hover:text-accent">+90 544 564 99 17</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60 uppercase tracking-wider">
          <div>© {new Date().getFullYear()} Éclat Solutions Médical · Tous droits réservés</div>
          <div>Confidentialité · Mentions légales</div>
        </div>
      </div>
    </footer>
  );
}
