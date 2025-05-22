import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Online 3D Scanning",
    description:
      "Capture precise limb measurements remotely through our user-friendly online scan tool.",
  },
  {
    icon: "BadgeCheck",
    title: "AI-Powered Design",
    description:
      "Our AI algorithm generates optimal prosthetic models tailored to each user's needs.",
  },
  {
    icon: "Goal",
    title: "Parametric Customization",
    description:
      "Adjust design parameters in real-time for perfect fit and functionality.",
  },
  {
    icon: "PictureInPicture",
    title: "Distributed Manufacturing",
    description:
      "Leverage a network of manufacturing partners for fast, scalable production.",
  },
  {
    icon: "MousePointerClick",
    title: "Seamless Integration",
    description:
      "Sync design data with production partners with a single click for hassle-free workflows.",
  },
  {
    icon: "Newspaper",
    title: "Data-Driven Insights",
    description:
      "Access performance analytics to continuously improve comfort and durability.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Sets STRIDAPT Apart
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        STRIDAPT combines cutting-edge AI, remote scanning, and a global manufacturing network to deliver personalized prosthetics faster and at lower cost.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
