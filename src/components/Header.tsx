import { useState } from "react";
import { Bird, Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <Bird className="w-8 h-8 text-primary" />
          <span className="font-heading text-2xl font-bold tracking-wider text-foreground">
            PEGASUS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma aula experimental."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-heading text-sm tracking-wider px-5 py-2.5 rounded-md hover:brightness-110 transition-all box-glow"
          >
            AGENDE SUA AULA
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-background border-t border-border px-6 pb-6 pt-4 flex flex-col gap-4 animate-fade-up">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading text-lg tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma aula experimental."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-heading text-center tracking-wider px-5 py-3 rounded-md mt-2"
          >
            AGENDE SUA AULA
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
