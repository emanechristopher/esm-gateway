import heroImg from "@/assets/hero-medical.jpg";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-foreground/70 font-medium">
            Assistance médicale internationale · Depuis le Gabon
          </span>
        </div>

        <h1 className="font-display text-[14vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem] leading-[0.88] text-primary-deep">
          le soin
          <br />
          <span className="text-accent">par l'exigence</span>
          <br />
          et par les
          <br />
          <span className="text-accent">bonnes mains</span>
        </h1>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <p className="lg:col-span-6 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
            Depuis Libreville, ESM connecte les patients africains aux meilleurs hôpitaux du monde —
            Turquie, Maroc, France, États-Unis, Dubaï. Un parcours de soin orchestré, sans stress
            ni mauvaises surprises.
          </p>

          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-display tracking-wider text-base hover:bg-primary-deep transition-colors"
            >
              PRENDRE CONTACT
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-8 py-4 font-display tracking-wider text-base hover:bg-foreground hover:text-background transition-colors"
            >
              NOS SERVICES <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            { k: "6+", v: "Pays partenaires" },
            { k: "20+", v: "Hôpitaux référents" },
            { k: "100%", v: "Suivi personnalisé" },
            { k: "24/7", v: "Coordination dédiée" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-8">
              <div className="font-display text-5xl md:text-6xl text-primary leading-none">{s.k}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative h-64 md:h-96 overflow-hidden">
          <img src={heroImg} alt="Couloir d'hôpital lumineux" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-deep/20 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
