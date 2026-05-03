import { Link } from "@tanstack/react-router";

export function Navbar() {
  const links = [
    { href: "#about", label: "À propos" },
    { href: "#services", label: "Services" },
    { href: "#partners", label: "Partenaires" },
    { href: "#cases", label: "Réussites" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-[image:var(--gradient-primary)] flex items-center justify-center text-primary-foreground font-display text-lg shadow-[var(--shadow-soft)]">É</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-primary-deep">Éclat Solutions</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Médical · ESM</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9 text-sm text-foreground/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-deep transition-colors shadow-[var(--shadow-soft)]"
        >
          Prendre contact
        </a>
      </div>
    </header>
  );
}