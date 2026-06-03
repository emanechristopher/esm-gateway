import logo from "@/assets/logo-esm.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.src}
              alt="Logo ESM"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="leading-tight">
              <div className="font-display text-lg text-primary-deep">Éclat Solutions Médical</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                Assistance médicale internationale
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Un accompagnement médical exigeant, du Gabon vers les meilleurs hôpitaux de Turquie, du
            Maroc et de France.
          </p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 mb-3">
            Navigation
          </div>
          <a href="#about" className="block hover:text-primary">
            À propos
          </a>
          <a href="#services" className="block hover:text-primary">
            Services
          </a>
          <a href="#partners" className="block hover:text-primary">
            Partenaires
          </a>
          <a href="#cases" className="block hover:text-primary">
            Réussites
          </a>
          <a href="#contact" className="block hover:text-primary">
            Contact
          </a>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 mb-3">
            Coordonnées
          </div>
          <div>Libreville, Gabon</div>
          <div>+241 66 94 07 40</div>
          <div>+90 544 564 99 17</div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Éclat Solutions Médical. Tous droits réservés.</div>
          <div>Confidentialité · Mentions légales</div>
        </div>
      </div>
    </footer>
  );
}
