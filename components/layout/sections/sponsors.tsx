"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";

interface SponsorProps {
  name: string;
  logoUrl: string;
}

const sponsors: SponsorProps[] = [
  {
    name: "Teletón",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Telet%C3%B3n_Chile_Logo.png",
  },
  {
    name: "Club UC (CDUC)",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/LogoCDUC.png",
  },
  {
    name: "PUC",
    logoUrl: "https://cdn.freebiesupply.com/logos/large/2x/universidad-catolica-de-chile-logo-png-transparent.png",
  },
];

// Duplicate sponsors to ensure infinite looping
const sponsorsLoop = [...sponsors, ...sponsors];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Sponsors
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[5rem]"
          fade
          innerClassName="gap-[5rem]"
          pauseOnHover
        >
          {sponsorsLoop.map(({ name, logoUrl }, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Image
                src={logoUrl}
                alt={`${name} logo`}
                width={80}
                height={80}
                className="mr-2"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
