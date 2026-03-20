import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="bg-surface-container-lowest w-full border-t border-white/5 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 max-w-7xl mx-auto items-center">
        <div className="flex flex-col gap-4">
          <div className="text-primary-container font-bold text-2xl font-headline tracking-tighter uppercase">
            STRIDAPT
          </div>
          <p className="font-label text-[10px] uppercase tracking-widest text-tertiary">
            &copy; 2026 STRIDAPT. INGENIERÍA DE RENDIMIENTO.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 md:justify-end">
          <Link
            href="#"
            className="font-label text-[10px] uppercase tracking-widest text-tertiary hover:text-primary-container transition-colors"
          >
            Privacidad
          </Link>
          <Link
            href="#"
            className="font-label text-[10px] uppercase tracking-widest text-tertiary hover:text-primary-container transition-colors"
          >
            Términos
          </Link>
          <Link
            href="#contact"
            className="font-label text-[10px] uppercase tracking-widest text-tertiary hover:text-primary-container transition-colors"
          >
            Contacto
          </Link>
          <Link
            href="#"
            className="font-label text-[10px] uppercase tracking-widest text-tertiary hover:text-primary-container transition-colors"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};
