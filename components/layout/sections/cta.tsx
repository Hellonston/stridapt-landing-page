export const CTASection = () => {
  return (
    <section className="py-40 bg-surface-container-high border-t border-outline-variant/20 relative">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="font-headline text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
          Construido para clínicas.<br />
          Diseñado para atletas.<br />
          <span className="text-primary-container">Accesible para todos.</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <button className="px-12 py-5 schematic-gradient text-on-primary-container font-headline font-black tracking-widest uppercase text-xl">
            EMPEZAR AHORA
          </button>
        </div>

        <div className="mt-16 pt-16 border-t border-outline-variant/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="font-label text-secondary text-xs tracking-widest">
              ISO-9001
            </p>
          </div>
          <div className="text-center">
            <p className="font-label text-secondary text-xs tracking-widest">
              FDA_PENDING
            </p>
          </div>
          <div className="text-center">
            <p className="font-label text-secondary text-xs tracking-widest">
              CE_MARK
            </p>
          </div>
          <div className="text-center">
            <p className="font-label text-secondary text-xs tracking-widest">
              PATENT_US92
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
