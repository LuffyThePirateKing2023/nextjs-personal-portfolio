import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
               My journey in Full-stack development is powered by an array of 
               mystical tools and languages, with JavaScript casting the 
               core of my enchantments. I wield frameworks like React.js 
               and Next.js with precision, crafting seamless portals 
               (software / websites) that connect realms (users) across the digital 
               universe. The ancient arts of the Jamstack and Mernstack empower me to 
               create fast, secure, and dynamic experiences. While my 
               design skills may not be as powerful as my development magic, 
               they still ensure every creation is both functional 
               and visually pleasing. Join me as I continue to 
               explore new spells and technologies to shape the 
               future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">Self-Crafted Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-sm">years of Self-taught sorcery </sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=LuffyThePirateKing2023&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="LuffyThePirateKing2023"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=LuffyThePirateKing2023&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="LuffyThePirateKing2023"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
              <div className="flex flex-wrap gap-4 justify-center cursor-pointer">
                {[
                  'html', 'css', 'js', 'ts', 'py', 'cpp', 'react', 'vite', 'nextjs', 'angular', 
                  'nodejs', 'express', 'mongodb', 'tailwind', 'threejs', 'django', 'aws', 
                  'babel', 'bash', 'yarn', 'discord', 'figma', 'firebase', 'vercel', 'git', 
                  'github', 'postman', 'regex', 'sentry', 'vscode', 'linkedin', 'gmail', 
                  'instagram', 'twitter'
                ].map(icon => (
                  <img
                    key={icon}
                    className="w-16 h-16 hover:scale-125 transform transition duration-300"
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={icon}
                    loading="lazy"
                  />
                ))}
              </div>
        </ItemLayout>


        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=LuffyThePirateKing2023&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="LuffyThePirateKing2023"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/LuffyThePirateKing2023/nextjs-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=LuffyThePirateKing2023&repo=nextjs-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="LuffyThePirateKing2023"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <Link 
              href="https://www.udemy.com/certificate/UC-56fa87f7-4b6d-4de3-a4a9-a6c52703d091"
              target="_blank"
              className="w-full p-6 flex flex-col gap-5"
            >
              <h2>Full Stack Web Development - Certification</h2>
              <p className="text-sm flex items-center">
                    <img src="./udemy.svg" 
                    alt="udemy logo"
                    className="w-6 h-5"
                    />
                    Udemy
              </p>
            </Link> 
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <Link 
              href="https://www.freecodecamp.org/certification/james_007/javascript-algorithms-and-data-structures"
              target="_blank"
              className="w-full p-6 flex flex-col gap-5"
            >
              <h2>Javascript Algorithm and Data Structure - Certification</h2>
                  <p className="text-sm flex items-center gap-2">
                    <img src="./freecode.svg" 
                    alt="freecodecamp logo"
                    className="w-7 h-7"
                    />
                    Freecodecamp
                  </p>
            </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
