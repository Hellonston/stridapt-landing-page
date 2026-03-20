export const SolutionGridSection = () => {
  return (
    <section id="tecnologia" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <p className="font-label text-primary-container text-xs tracking-widest uppercase mb-4">
            INGENIERÍA SUPERIOR
          </p>
          <div className="font-headline text-5xl font-black tracking-tighter text-white uppercase max-w-2xl leading-none">
            Construida Diferente.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Card 1 */}
          <div className="bg-surface-container-low p-12 border border-outline-variant/10 hover:border-primary-container/30 transition-all duration-300 group">
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                layers
              </span>
            </div>
            <div className="font-headline text-2xl font-bold text-white uppercase mb-4">
              Dual Mode
            </div>
            <p className="text-tertiary font-body mb-8">
              Transición instantánea entre modo caminata diaria y rendimiento
              deportivo de élite.
            </p>
            <div className="font-label text-[10px] text-secondary tracking-widest uppercase mt-auto">
              ARCH_ID: DAILY_ATHLETE
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-low p-12 border border-outline-variant/10 hover:border-primary-container/30 transition-all duration-300 group relative">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-primary-container animate-pulse">
                psychology
              </span>
            </div>
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                memory
              </span>
            </div>
            <div className="font-headline text-2xl font-bold text-white uppercase mb-4">
              AI Personalized
            </div>
            <p className="text-tertiary font-body mb-8">
              Nuestros algoritmos de aprendizaje profundo ajustan la respuesta
              dinámica según tu zancada única.
            </p>
            <div className="font-label text-[10px] text-secondary tracking-widest uppercase mt-auto">
              ARCH_ID: NEURAL_ADAPT
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-low p-12 border border-outline-variant/10 hover:border-primary-container/30 transition-all duration-300 group">
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                precision_manufacturing
              </span>
            </div>
            <div className="font-headline text-2xl font-bold text-white uppercase mb-4">
              Local Manufacturing
            </div>
            <p className="text-tertiary font-body mb-8">
              Producción distribuida para reducir costos y tiempos de entrega
              en cualquier región.
            </p>
            <div className="font-label text-[10px] text-secondary tracking-widest uppercase mt-auto">
              ARCH_ID: SMART_FACTORY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
