"use client";

import { FaReact } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { RiSupabaseFill } from "react-icons/ri";
import { SiShadcnui, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

const Connect = () => {
  return (
    <div className="flex flex-col justify-center py-24 px-8 w-full text-center">
      <div className="px-4 py-20 text-white">
        <h2 className="text-4xl font-black uppercase text-center mb-8">
          Projects
        </h2>
        <div className="flex justify-center gap-16 w-full items-center flex-wrap">
          <ProjectCard
            name="Fantasy Edge"
            description="Full-Stack Fantasy Football App"
            imageUrl="/images/project-1.png"
            githubLink="https://github.com/ReggieEvans/fantasy-edge"
            walkthroughLink="/projects/fantasy-edge#demo"
            moreDetailsLink="/projects/fantasy-edge"
            isExternalDemo={false}
            stack={[
              { icon: FaReact, label: "React", color: "text-blue-400" },
              {
                icon: SiTypescript,
                label: "TypeScript",
                color: "text-blue-500",
              },
              {
                icon: RiSupabaseFill,
                label: "Supabase",
                color: "text-green-500",
              },
              {
                icon: RiTailwindCssFill,
                label: "Tailwind CSS",
                color: "text-cyan-400",
              },
              {
                icon: SiShadcnui,
                label: "shadcn/ui",
                color: "text-violet-400",
              },
            ]}
          />
          <ProjectCard
            name="GameStack"
            description="Full-Stack Video Game Tracker"
            imageUrl="/images/project-2.png"
            stack={[
              { icon: FaReact, label: "React", color: "text-blue-400" },
              {
                icon: SiTypescript,
                label: "TypeScript",
                color: "text-blue-500",
              },
              { icon: DiMongodb, label: "MongoDB", color: "text-green-500" },
              {
                icon: RiTailwindCssFill,
                label: "Tailwind CSS",
                color: "text-cyan-400",
              },
              {
                icon: SiShadcnui,
                label: "shadcn/ui",
                color: "text-violet-400",
              },
            ]}
            githubLink="https://github.com/ReggieEvans/game-stack"
            demoLink="https://game-stack-taupe.vercel.app/"
            moreDetailsLink="/projects/gamestack"
            isExternalDemo={true}
          />
          <ProjectCard
            name="My Dynasty Hub"
            description="Next.js 15 CFB26 Team Picker"
            imageUrl="/images/project-3.png"
            stack={[
              { icon: FaReact, label: "React", color: "text-blue-400" },
              {
                icon: SiTypescript,
                label: "TypeScript",
                color: "text-blue-500",
              },
              {
                icon: RiTailwindCssFill,
                label: "Tailwind CSS",
                color: "text-cyan-400",
              },
              {
                icon: SiShadcnui,
                label: "shadcn/ui",
                color: "text-violet-400",
              },
            ]}
            githubLink="https://github.com/ReggieEvans/cfb26-team-picker"
            liveLink="https://mydynastyhub.com/"
            moreDetailsLink="/projects/my-dynasty-hub"
            isExternalDemo={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
