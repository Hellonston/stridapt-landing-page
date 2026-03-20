import Image from "next/image";

export const ProblemStatsSection = () => {
  return (
    <section id="rendimiento" className="py-32 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image with L-brackets - Carbon fiber prosthetic materials */}
        <div className="relative group">
          <div className="absolute -inset-4 border border-outline-variant/20 pointer-events-none"></div>
          <div className="l-bracket-tl absolute top-0 left-0"></div>
          <div className="l-bracket-br absolute bottom-0 right-0"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQhYmz4tJJJxpXS3SieL1h-uu9w_WpEo8R_R9aDZivvwHEch_LQ4-e8IDyjCyFkYbGrbdi2dBftd5QxIYrPygk_eaQBQy_QBwHzwj4DqvK9rpVCyd5g9bPs5LdCgY_5eJ0gW9an9erjJvg40PnBVyfXs5DI6isiulEjVKKvGRzwRDCp9fVa8R8ikCdAL3wo0FlEk-rR2dUXwtf7ZrAvjHi61qArjDU4OXUJECcWBXDlopz_MwOk_Xs_4MEcXU_8KCmJYjU2Gxu0bDK"
            alt="Materiales de prótesis de fibra de carbono"
            width={800}
            height={600}
            className="w-full grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-90"
          />
        </div>

        {/* Stats */}
        <div>
          <div className="font-headline text-4xl font-bold tracking-tighter text-white uppercase mb-12 border-l-4 border-primary-container pl-6">
            El Desafío Global
          </div>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <span className="font-headline text-6xl font-black text-primary-container leading-none">
                65M
              </span>
              <div>
                <div className="font-headline font-bold text-white uppercase text-xl mb-1">
                  Personas con amputaciones
                </div>
                <p className="text-tertiary font-body">
                  Un ecosistema de movilidad estancado en tecnologías del
                  siglo pasado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <span className="font-headline text-6xl font-black text-white leading-none">
                1/10
              </span>
              <div>
                <div className="font-headline font-bold text-primary-container uppercase text-xl mb-1">
                  Acceso Limitado
                </div>
                <p className="text-tertiary font-body">
                  Solo una fracción de la población mundial tiene acceso a
                  soluciones de alto rendimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
