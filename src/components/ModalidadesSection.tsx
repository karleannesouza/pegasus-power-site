import { Dumbbell, HeartPulse, StretchHorizontal, Clock, DollarSign } from "lucide-react";
import { useEffect, useRef } from "react";

const modalidades = [
  {
    icon: Dumbbell,
    title: "CrossFit",
    desc: "Foco em força e condicionamento. Treinos variados e de alta intensidade que desafiam seu corpo a cada dia.",
    horarios: "Seg a Sex — 06h, 07h, 12h, 18h, 19h, 20h\nSáb — 09h, 10h",
    valor: "R$150,00/mês",
  },
  {
    icon: HeartPulse,
    title: "Treinamento Funcional",
    desc: "Movimentos do dia a dia para melhorar sua saúde geral, mobilidade e qualidade de vida.",
    horarios: "Seg, Qua, Sex — 08h, 17h",
    valor: "R$100,00/mês",
  },
  {
    icon: StretchHorizontal,
    title: "Pilates",
    desc: "Foco em flexibilidade, postura e fortalecimento do core. Ideal para equilíbrio corpo-mente.",
    horarios: "Ter e Qui — 08h, 15h, 17h",
    valor: "R$100,00/mês",
  },
];

const ModalidadesSection = () => {
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
    <section id="modalidades" ref={sectionRef} className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <h2 className="section-animate font-heading text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
          NOSSAS <span className="text-primary">MODALIDADES</span>
        </h2>
        <p className="section-animate text-muted-foreground text-center max-w-xl mx-auto mb-14 font-body">
          Escolha a modalidade que mais combina com você e comece a transformar sua vida hoje.
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {modalidades.map((m, i) => (
            <div
              key={m.title}
              className="section-animate bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:box-glow transition-all duration-500 flex flex-col"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <m.icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                {m.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-1">
                {m.desc}
              </p>

              <div className="space-y-3 border-t border-border pt-5">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground text-sm font-body whitespace-pre-line">
                    {m.horarios}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-primary font-heading text-lg font-bold">
                    {m.valor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalidadesSection;
