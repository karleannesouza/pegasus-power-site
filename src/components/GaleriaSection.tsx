import { useEffect, useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Equipamentos de CrossFit" },
  { src: gallery2, alt: "Box jumps" },
  { src: gallery3, alt: "Rope climb" },
  { src: gallery4, alt: "Interior do box" },
  { src: gallery5, alt: "Comunidade Pegasus" },
  { src: gallery6, alt: "Treino de força" },
];

const GaleriaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".section-animate");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="galeria" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container">
        <h2 className="section-animate font-heading text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
          CONHEÇA NOSSO <span className="text-primary">BOX</span>
        </h2>
        <p className="section-animate text-muted-foreground text-center max-w-xl mx-auto mb-14 font-body">
          Um espaço construído para performance, comunidade e resultados.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="section-animate overflow-hidden rounded-lg group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-48 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
