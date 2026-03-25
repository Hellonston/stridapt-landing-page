import Image from "next/image";

export const ImpactStatsSection = () => {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background image - translucent, impactful */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070"
          alt="Personas en América Latina"
          fill
          className="object-cover grayscale brightness-[0.4] contrast-125"
        />
        <div className="scan-line"></div>
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-background/40 to-background/70"></div>
      <div className="absolute inset-0 z-[2] dot-grid opacity-30"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Stats centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative items-start">
          {/* Stat 1: 3% */}
          <div className="text-center">
            <p className="font-label text-primary-container text-sm tracking-widest uppercase mb-6">
              Solo
            </p>
            <span className="font-headline text-8xl md:text-9xl font-black text-white leading-none">
              3%
            </span>
            <p className="font-body text-xl text-tertiary mt-6 max-w-sm mx-auto">
              de las personas con discapacidad tienen acceso a una prótesis de
              pierna.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/20"></div>

          {/* Stat 2: Cada 3 min */}
          <div className="text-center">
            <p className="font-label text-primary-container text-sm tracking-widest uppercase mb-6">
              Cada
            </p>
            <span className="font-headline text-8xl md:text-9xl font-black text-white leading-none">
              3 min
            </span>
            <p className="font-body text-xl text-tertiary mt-6 max-w-sm mx-auto">
              una persona en América Latina sufre una amputación de extremidad
              inferior mayor.
            </p>
            <p className="font-label text-secondary text-sm mt-3">
              + 100,000 personas anualmente
            </p>
          </div>
        </div>

        {/* Source */}
        <div className="mt-16 pt-8 border-t border-outline-variant/10 text-center">
          <p className="font-label text-secondary/60 text-[10px] tracking-widest uppercase">
            Fuente: Organización Mundial de la Salud (who.int)
          </p>
        </div>
      </div>
    </section>
  );
};
