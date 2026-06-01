import { MapPin, Phone, Globe } from "lucide-react";

const countries = ["Turquie", "France", "Maroc"];

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[image:var(--gradient-hero)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="bg-card rounded-3xl border border-border/60 shadow-[var(--shadow-elegant)] overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 lg:p-14">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Contact</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary-deep leading-tight">
              Parlons de votre parcours de soin.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Notre équipe vous répond avec discrétion sous 24 heures. Premier échange confidentiel et sans engagement.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-full bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <MapPin size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Siège</div>
                  <div className="text-foreground font-medium mt-0.5">Libreville, Gabon</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-full bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <Phone size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Téléphone</div>
                  <a href="tel:+24166940740" className="block text-foreground font-medium mt-0.5 hover:text-primary">+241 66 94 07 40</a>
                  <a href="tel:+905445649917" className="block text-foreground font-medium hover:text-primary">+90 544 564 99 17</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-full bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <Globe size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Partenariats internationaux</div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {countries.map((c) => (
                      <span key={c} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-secondary/40 p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-border/60">
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Nom complet</label>
                <input type="text" className="mt-2 w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Votre nom" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</label>
                  <input type="email" className="mt-2 w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="vous@exemple.com" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Téléphone</label>
                  <input type="tel" className="mt-2 w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="+241 ..." />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Votre demande</label>
                <textarea rows={4} className="mt-2 w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Décrivez brièvement votre situation..." />
              </div>
              <button
                type="button"
                className="w-full inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-medium bg-primary text-primary-foreground hover:bg-primary-deep transition-colors shadow-[var(--shadow-soft)]"
              >
                Envoyer ma demande
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Vos informations restent strictement confidentielles.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}