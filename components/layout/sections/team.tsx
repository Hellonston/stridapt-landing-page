import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
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
      positions: ["CEO / Mech_Eng"],
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
      imageUrl: "/benjamin-contard.jpg",
      firstName: "Benjamín",
      lastName: "Contardo",
      positions: ["Materials Specialist"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/benjam%C3%ADn-contardo-del-pozo-60745a210/",
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
      imageUrl: "/vicente-adauy-oficial.jpg",
      firstName: "Vicente",
      lastName: "Adauy",
      positions: ["Biotech Ops"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/vicente-adauy-0236a336a/",
        },
      ],
    },
    {
      imageUrl: "/renata-ojeda.jpg",
      firstName: "Renata",
      lastName: "Ojeda",
      positions: ["Clinical Lead"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/renata-ojeda-galaz-051835254/",
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
    }
  };

  return (
    <section id="equipo" className="py-32 bg-background dot-grid">
      <div className="max-w-7xl mx-auto px-8">
        <div className="font-headline text-4xl font-black text-white uppercase tracking-tighter mb-16">
          El Equipo_Engineers
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {teamList.map(
            ({ imageUrl, firstName, lastName, positions, socialNetworks }, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="absolute inset-0 border border-primary-container/50 rounded-full scale-110 group-hover:scale-125 transition-transform"></div>
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    width={128}
                    height={128}
                    className={`w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 ${
                      imageUrl.includes("DanielToribio")
                        ? "object-[center_top]"
                        : "object-center"
                    }`}
                  />
                </div>
                <div className="font-headline font-bold text-white uppercase text-sm">
                  {firstName}
                </div>
                <div className="font-label text-[10px] text-primary-container tracking-widest uppercase">
                  {positions[0]}
                </div>
                <div className="flex justify-center gap-3 mt-2">
                  {socialNetworks.map(({ name, url }, idx) => (
                    <Link
                      key={idx}
                      href={url}
                      target="_blank"
                      className="opacity-50 hover:opacity-100 transition-opacity text-secondary hover:text-primary-container"
                    >
                      {socialIcon(name)}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
