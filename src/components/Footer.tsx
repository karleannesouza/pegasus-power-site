import { Bird } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Bird className="w-5 h-5 text-primary" />
        <span className="font-heading text-sm tracking-wider text-muted-foreground">
          PEGASUS CROSSFIT
        </span>
      </div>
      <p className="text-muted-foreground text-xs font-body">
        © 2024 Pegasus CrossFit. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
