import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/enrique-rojas.jpg",
      firstName: "Enrique",
      lastName: "Rojas",
      positions: ["CTO & Team Lead"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/enrique-andres-rojas-alvarez-a4b92b1b4/",
        },
      ],
    },
    {
      imageUrl: "/tere-banados.jpg",
      firstName: "María Teresa",
      lastName: "Bañados",
      positions: ["Industrial & Communication"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mar%C3%ADa-teresa-ba%C3%B1ados-62a259229/",
        },
      ],
    },
    {
      imageUrl: "/renata-ojeda.jpg",
      firstName: "Renata",
      lastName: "Ojeda",
      positions: ["Operations & Validation"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/renata-ojeda-galaz-051835254/",
        },
      ],
    },
    {
      imageUrl: "/DanielToribio.png",
      firstName: "Daniel",
      lastName: "Toribio",
      positions: ["Software & AI"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/daniel-toribio-b4ab23327/",
        },
        {
          name: "Github",
          url: "https://github.com/Hellonston",
        },
      ],
    },
    {
      imageUrl: "/benjamin-contard.jpg",
      firstName: "Benjamín",
      lastName: "Contardo",
      positions: ["Mechanical & Prototyping"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/benjam%C3%ADn-contardo-del-pozo-60745a210/",
        },
      ],
    },
    {
      imageUrl: "/vicente-adauy-oficial.jpg",
      firstName: "Vicente",
      lastName: "Adauy",
      positions: ["Additive Manufacturing & CAM"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/vicente-adauy-0236a336a/",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Stridapt Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className={`w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01] ${
                      imageUrl.includes("DanielToribio")
                        ? "object-[center_top]"
                        : "object-center"
                    }`}
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
