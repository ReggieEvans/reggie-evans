'use client'

import { FaReact } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { DiMongodb } from "react-icons/di";
import { SiShadcnui, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Connect = () => {
  return (
    <div className="flex flex-col justify-center py-24 px-8 w-full text-center">
      <div className="px-4 py-20 text-white">
        <h2 className="text-4xl font-black uppercase text-center mb-8">
          Projects
        </h2>
        <div className="flex justify-center gap-8 w-full items-center flex-wrap">
          <ProjectCard
            name="GameStack"
            description="Full-Stack Video Game Tracker"
            imageUrl="/images/project-1.png"
            stack={[
              { icon: FaReact, label: 'React', color: 'text-blue-400' },
              { icon: SiTypescript, label: 'TypeScript', color: 'text-blue-500' },
              { icon: DiMongodb, label: 'MongoDB', color: 'text-green-500' },
              { icon: RiTailwindCssFill, label: 'Tailwind CSS', color: 'text-cyan-400' },
              { icon: SiShadcnui, label: 'shadcn/ui', color: 'text-violet-400' },
            ]}
            githubLink="https://github.com/ReggieEvans/game-stack"
            demoLink="https://game-stack-taupe.vercel.app/"
            moreDetailsLink="/projects/gamestack"
          />
          <ProjectCard
            name="Starter Kit"
            description="Next.js 15 Full-Stack Template"
            imageUrl="/images/project-2.png"
            stack={[
              { icon: FaReact, label: 'React', color: 'text-blue-400' },
              { icon: SiTypescript, label: 'TypeScript', color: 'text-blue-500' },
              { icon: DiMongodb, label: 'MongoDB', color: 'text-green-500' },
              { icon: RiTailwindCssFill, label: 'Tailwind CSS', color: 'text-cyan-400' },
              { icon: SiShadcnui, label: 'shadcn/ui', color: 'text-violet-400' },
            ]}
            githubLink="https://github.com/ReggieEvans/nextjs-starter-template"
            moreDetailsLink="/projects/starter-kit"
          />
          <ProjectCard
            name="Fantasy Edge"
            description="College Football Fantasy App"
            status="In Progress"
            imageUrl="/images/project-3.png"
            githubLink="https://github.com/user/project1"
            demoLink="https://demo.project1.com"
            moreDetailsLink="/projects/project1"
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
