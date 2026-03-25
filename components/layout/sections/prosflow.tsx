export const ProsFlowSection = () => {
  const steps = [
    {
      num: "01",
      title: "Consulta",
      desc: "Entendemos tu cuerpo, tu estilo de vida y tus metas de movilidad.",
    },
    {
      num: "02",
      title: "Análisis",
      desc: "Capturamos datos clave para crear un perfil biomecánico único.",
    },
    {
      num: "03",
      title: "Diseño",
      desc: "Nuestra IA genera una solución personalizada para ti.",
    },
    {
      num: "04",
      title: "Producción",
      desc: "Fabricamos tu prótesis con materiales de última generación.",
    },
    {
      num: "05",
      title: "Activación",
      desc: "Ajuste profesional y acompañamiento continuo.",
    },
  ];

  return (
    <section id="proceso" className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="font-headline text-4xl font-bold text-white uppercase tracking-tighter mb-20 text-center">
          ProsFlow: El Proceso
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {steps.map((step, index) => (
            <div key={step.num} className="contents">
              <div className="flex-1 bg-surface p-8 relative overflow-hidden group">
                <div className="font-label text-primary-container text-4xl font-bold mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </div>
                <div className="font-headline font-bold text-white uppercase mb-2">
                  {step.title}
                </div>
                <p className="text-tertiary text-sm">{step.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-container/20 group-hover:bg-primary-container transition-all"></div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center text-outline-variant/30">
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
