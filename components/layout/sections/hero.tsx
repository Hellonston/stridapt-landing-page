import Image from "next/image";

export const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center pt-24 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 z-0 dot-grid"></div>

      {/* Background Image - Prosthetic leg */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2vYpWKZW4c3tA2yVBa0pyKswqbUwfebCwv-oSXUvOxZqEVfey7ut44nnw45FHcn5vIBww6GS06e08iMJIiSghjINRctKNZePIGo3-s_ulgnD2oi4qByibB9gXcYF_rLU_YByc4yZVmR--TZusLFy1f-wHhwYyA6_jnWiv264B-OVYUEOwVDZ0iG9o-uxseFg1kcNtlhehnaJ6xvKGwwfElItJVxL5M5flq9Vavu6ZfQUQ3wFxMaRnEbGbYOs3wIPANX-vEAeyS8DI"
          alt="Prótesis transtibial robótica de alta tecnología"
          fill
          className="object-cover grayscale brightness-[0.35] contrast-125"
          priority
        />
        <div className="scan-line"></div>
      </div>

      {/* Gradient overlay - subtle, mostly at bottom */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/30 via-transparent to-background"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <div className="inline-block mb-4 px-3 py-1 bg-primary-container/10 border border-primary-container/20 text-primary-container font-label text-xs tracking-widest uppercase">
          V1.0 PROTOSYSTEM
        </div>

        <div className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8">
          Tu cuerpo.<br />
          <span className="text-primary-container">Tu ritmo.</span>
        </div>

        <p className="font-body text-xl md:text-2xl text-tertiary max-w-3xl mx-auto leading-relaxed mb-12">
          La primera prótesis transtibial 2-en-1 adaptativa del mundo —
          diseñada para la vida diaria y el deporte de élite, personalizada
          por IA para cada cuerpo.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="w-full md:w-auto px-10 py-4 schematic-gradient text-on-primary-container font-headline font-bold tracking-widest uppercase text-lg">
            Solicitar Demo
          </button>
          <button className="w-full md:w-auto px-10 py-4 border border-outline/30 text-white font-headline font-bold tracking-widest uppercase text-lg hover:bg-white/5 transition-all">
            Ver Tecnología
          </button>
        </div>
      </div>

      {/* HUD Elements */}
      <div className="absolute bottom-12 left-12 z-10 hidden lg:block font-label text-[10px] text-secondary tracking-widest uppercase opacity-60">
        <div>GPS_COORD: 19.4326° N, 99.1332° W</div>
        <div>STATUS: PROSFLOW_ENGINE_ACTIVE</div>
        <div>LATENCY: 0.002MS</div>
      </div>
      <div className="absolute bottom-12 right-12 z-10 hidden lg:block font-label text-[10px] text-secondary tracking-widest uppercase opacity-60 text-right">
        <div>BIOMETRIC_SYNC: 100%</div>
        <div>ALGO_REV: 8.2.1-SYNTH</div>
        <div>STABILITY_INDEX: OPTIMAL</div>
      </div>
    </header>
  );
};
