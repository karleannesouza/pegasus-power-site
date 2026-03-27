import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="CrossFit training session"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Green gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 container text-center px-4 pt-20">
        <p className="font-heading text-primary tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-up">
          CROSSFIT • FUNCIONAL • PILATES
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 animate-fade-up [animation-delay:0.15s]">
          DESPERTE A SUA
          <br />
          <span className="text-primary text-glow">FORÇA</span> NA PEGASUS
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:0.3s] font-body">
          Transforme seu corpo e sua mente com treinos dinâmicos e resultados
          reais. Venha fazer parte da nossa comunidade.
        </p>

        {/* --- NOVAS LINHAS ADICIONADAS --- */}
        <h2 className="text-2xl font-bold animate-fade-up [animation-delay:0.35s]">
          Agende uma aula experimental
        </h2>

        <p className="text-sm text-gray-300 mt-2 mb-6 animate-fade-up [animation-delay:0.38s]">
          3 aulas experimentais gratuitas
        </p>
        {/* -------------------------------- */}

        <a
          href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma aula experimental."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-heading text-lg md:text-xl tracking-wider px-10 py-4 rounded-md hover:brightness-110 transition-all animate-pulse-glow animate-fade-up [animation-delay:0.45s]"
        >
          AGENDE PELO WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
