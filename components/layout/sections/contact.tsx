"use client";
import InstagramIcon from "@/components/icons/instagram-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="mb-4">
          <div className="font-label text-primary-container text-xs tracking-widest uppercase mb-4">
            CONTACTO
          </div>
          <div className="font-headline text-4xl font-bold text-white uppercase tracking-tighter">
            Conecta con Nosotros
          </div>
        </div>

        <p className="mb-12 text-tertiary font-body text-lg max-w-2xl mx-auto">
          ¿Tienes preguntas sobre nuestras prótesis, necesitas soporte o
          simplemente quieres saludar? Estamos aquí para ayudarte.
        </p>

        <div className="flex gap-8 flex-wrap justify-center">
          <Link
            href="https://www.instagram.com/stridapt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 bg-surface-container border border-outline-variant/10 hover:border-primary-container/30 transition-all duration-300 group"
          >
            <InstagramIcon
              size={32}
              className="text-tertiary group-hover:text-primary-container transition-colors"
            />
            <span className="font-headline font-bold text-white uppercase text-sm">
              @stridapt
            </span>
            <span className="font-label text-[10px] text-secondary tracking-widest uppercase">
              INSTAGRAM
            </span>
          </Link>

          <Link
            href="https://www.linkedin.com/company/stridapt/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 bg-surface-container border border-outline-variant/10 hover:border-primary-container/30 transition-all duration-300 group"
          >
            <div className="text-tertiary group-hover:text-primary-container transition-colors">
              <LinkedInIcon />
            </div>
            <span className="font-headline font-bold text-white uppercase text-sm">
              Stridapt
            </span>
            <span className="font-label text-[10px] text-secondary tracking-widest uppercase">
              LINKEDIN
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
