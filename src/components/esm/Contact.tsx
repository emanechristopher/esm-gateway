import { MapPin, Phone, Globe } from "lucide-react";

const countries = ["Turquie", "Maroc", "France", "États-Unis", "Afrique", "Dubaï"];

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Contact / 06</span>
        <h2 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
          parlons de
          <br />
          votre <span className="text-accent">parcours</span>
          <br />
          de soin
        </h2>

        <div className="mt-16 grid lg:grid-cols-12 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
          <div className="lg:col-span-5 bg-primary p-10 lg:p-12 space-y-8">
            <p className="text-lg leading-relaxed text-primary-foreground/85">
              Notre équipe vous répond avec discrétion sous 24 heures. Premier échange
              confidentiel et sans engagement.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <MapPin size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">Siège</div>
                  <div className="font-display text-xl mt-1">LIBREVILLE, GABON</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <Phone size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">Téléphone</div>
                  <a href="tel:+24166940740" className="block font-display text-xl mt-1 hover:text-accent">+241 66 94 07 40</a>
                  <a href="tel:+905445649917" className="block font-display text-xl hover:text-accent">+90 544 564 99 17</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-10 w-10 bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <Globe size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">Partenariats internationaux</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {countries.map((c) => (
                      <span key={c} className="text-xs px-3 py-1 border border-primary-foreground/30 font-medium">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="lg:col-span-7 bg-background text-foreground p-10 lg:p-12">
            <div className="space-y-5">
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Nom complet</label>
                <input type="text" className="mt-2 w-full bg-transparent border-0 border-b-2 border-foreground/20 px-0 py-3 focus:outline-none focus:border-primary transition-colors text-lg" placeholder="Votre nom" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</label>
                  <input type="email" className="mt-2 w-full bg-transparent border-0 border-b-2 border-foreground/20 px-0 py-3 focus:outline-none focus:border-primary transition-colors text-lg" placeholder="vous@exemple.com" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Téléphone</label>
                  <input type="tel" className="mt-2 w-full bg-transparent border-0 border-b-2 border-foreground/20 px-0 py-3 focus:outline-none focus:border-primary transition-colors text-lg" placeholder="+241 ..." />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Votre demande</label>
                <textarea rows={4} className="mt-2 w-full bg-transparent border-0 border-b-2 border-foreground/20 px-0 py-3 focus:outline-none focus:border-primary transition-colors resize-none text-lg" placeholder="Décrivez brièvement votre situation..." />
              </div>
              <button
                type="button"
                className="mt-6 w-full inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-5 font-display tracking-wider text-base hover:bg-primary-deep hover:text-primary-foreground transition-colors"
              >
                ENVOYER MA DEMANDE
              </button>
              <p className="text-xs text-muted-foreground text-center pt-2">
                Vos informations restent strictement confidentielles.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
