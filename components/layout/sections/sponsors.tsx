"use client";
import Image from "next/image";

interface SponsorProps {
  name: string;
  logoUrl: string;
  size: number;
}

const sponsors: SponsorProps[] = [
  {
    name: "CORFO",
    logoUrl: "/corfo-logo.png",
    size: 65,
  },
  {
    name: "Pontificia Universidad Católica de Chile",
    logoUrl: "/puc-logo.png",
    size: 34,
  },
];

const SponsorItems = () => (
  <>
    {sponsors.map(({ name, logoUrl, size }) => (
      <div
        key={name}
        className="flex items-center gap-3 shrink-0 opacity-50 hover:opacity-100 transition-opacity px-8"
      >
        <Image
          src={logoUrl}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="mix-blend-screen"
        />
        <span className="font-label text-xs text-tertiary tracking-wide uppercase whitespace-nowrap">
          {name}
        </span>
      </div>
    ))}
  </>
);

export const SponsorsSection = () => {
  return (
    <section className="py-10 bg-surface-container-lowest border-t border-b border-white/5 overflow-hidden">
      <div className="flex w-max">
        <div className="flex shrink-0 items-center animate-marquee">
          <SponsorItems />
          <SponsorItems />
          <SponsorItems />
          <SponsorItems />
          <SponsorItems />
        </div>
        <div className="flex shrink-0 items-center animate-marquee">
          <SponsorItems />
          <SponsorItems />
          <SponsorItems />
          <SponsorItems />
          <SponsorItems />
        </div>
      </div>
    </section>
  );
};
