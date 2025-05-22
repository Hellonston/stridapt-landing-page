import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Custom AI Design",
    description:
      "Leverage our AI-driven parametric design to create custom prostheses in minutes, tailored to each individual's anatomy.",
  },
  {
    icon: "LineChart",
    title: "Cost Efficiency",
    description:
      "Reduce production costs by up to 40% through distributed manufacturing and smart resource allocation.",
  },
  {
    icon: "Wallet",
    title: "Scalable Production",
    description:
      "Our cloud-based workflow scales with demand, ensuring quick turnaround without compromising quality.",
  },
  {
    icon: "Sparkle",
    title: "Enhanced Mobility",
    description:
      "Deliver prostheses that improve both physical performance and user comfort for daily and athletic activities.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose STRIDAPT?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            STRIDAPT combines advanced AI and parametric design to deliver affordable, personalized prosthetics that fit perfectly and boost mobility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
