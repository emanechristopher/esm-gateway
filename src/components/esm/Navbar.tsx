import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#partners", label: "Partenaires" },
  { href: "#cases", label: "Réussites" },
  { href: "#charter", label: "Charte" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="h-11 w-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-xl">É</span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl text-primary-deep tracking-tight">ÉCLAT SOLUTIONS</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Médical · ESM</span>
          </span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center gap-2 border-2 border-foreground px-4 py-2 font-display text-sm tracking-wider"
        >
          MENU <Menu size={16} />
        </button>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-accent text-accent-foreground px-6 py-3 font-display tracking-wider text-sm hover:bg-primary-deep transition-colors"
        >
          PRENDRE CONTACT
        </a>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-2xl text-primary-deep">{l.label.toUpperCase()}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center bg-accent text-accent-foreground px-6 py-3 font-display tracking-wider">
            PRENDRE CONTACT
          </a>
        </nav>
      )}
    </header>
  );
}
