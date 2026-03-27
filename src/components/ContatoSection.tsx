import { useEffect, useRef } from "react";
import { MessageCircle, Instagram, MapPin } from "lucide-react";

const ContatoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    const elements = sectionRef.current?.querySelectorAll(".section-animate");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" ref={sectionRef} className="py-20 md:py-28 bg-secondary">
      <div className="container text-center">
        <h2 className="section-animate font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          FAÇA PARTE DA FAMÍLIA <span className="text-primary">PEGASUS</span>
        </h2>
        <p className="section-animate text-muted-foreground max-w-xl mx-auto mb-14 font-body">
          Entre em contato, tire suas dúvidas e agende sua aula experimental. Estamos te esperando!
        </p>

        <div className="section-animate flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma aula experimental."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-primary text-primary-foreground font-heading text-lg tracking-wider px-8 py-4 rounded-md hover:brightness-110 transition-all box-glow w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-6 h-6" />
            FALE CONOSCO NO WHATSAPP
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/PegasusCrossFit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-primary text-primary font-heading text-lg tracking-wider px-8 py-4 rounded-md hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto justify-center"
          >
            <Instagram className="w-6 h-6" />
            @PEGASUSCROSSFIT
          </a>
        </div>

        {/* Address + Map placeholder */}
        <div className="section-animate grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-primary" />
            <p className="font-heading text-lg text-foreground">NOSSO ENDEREÇO</p>
            <p className="text-muted-foreground font-body text-sm">
              Rua da Força, 123 — Centro
              <br />
              Cidade / Estado
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center">
            <iframe
              title="Localização Pegasus CrossFit"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.65!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAwLjAiUyA0NsKwMzknMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 200 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
