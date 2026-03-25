import { ContactSection } from "@/components/layout/sections/contact";
import { CTASection } from "@/components/layout/sections/cta";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ProblemStatsSection } from "@/components/layout/sections/problem-stats";
import { ProsFlowSection } from "@/components/layout/sections/prosflow";
import { SolutionGridSection } from "@/components/layout/sections/solution-grid";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { ImpactStatsSection } from "@/components/layout/sections/impact-stats";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "STRIDAPT | Ingeniería de Rendimiento",
  description:
    "La primera prótesis transtibial 2-en-1 adaptativa del mundo — diseñada para la vida diaria y el deporte de élite, personalizada por IA para cada cuerpo.",
  openGraph: {
    type: "website",
    title: "STRIDAPT | Ingeniería de Rendimiento",
    description:
      "La primera prótesis transtibial 2-en-1 adaptativa del mundo — diseñada para la vida diaria y el deporte de élite, personalizada por IA para cada cuerpo.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <ProblemStatsSection />
      <SolutionGridSection />
      <ImpactStatsSection />
      <ProsFlowSection />
      <TeamSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
