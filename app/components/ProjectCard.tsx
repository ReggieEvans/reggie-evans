import React from "react";
import Image from "next/image";
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";

interface ProjectCardProps {
  name: string;
  description: string;
  status?: "In Progress" | "Completed" | "Pending";
  stack?: TechStackItem[];
  imageUrl: string;
  githubLink: string;
  demoLink?: string;
  liveLink?: string;
  walkthroughLink?: string;
  moreDetailsLink: string;
}

type TechStackItem = {
  icon: React.ElementType;
  label: string;
  color: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  status,
  stack,
  imageUrl,
  githubLink,
  demoLink,
  liveLink,
  walkthroughLink,
  moreDetailsLink,
}) => {
  return (
    <div className="bg-dark shadow-lg rounded-md p-6 w-80">
      <div className="h-40 w-full bg-gray-200 rounded-t-md overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={name}
          className="object-fill h-full w-full"
          height={160}
          width={320}
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-black uppercase text-[#F2F7F2] mt-4 blue_gradient">
        {name}
      </h3>
      <p className="text-[#F2F7F2] mt-2 opacity-90">{description}</p>

      <div className="h-[1px] w-full bg-[#F2F7F2] opacity-10 my-4"></div>

      {status && status === "In Progress" ? (
        <div className="h-36 text-4xl font-black text-blue opacity-10 uppercase py-8">
          In Progress
        </div>
      ) : (
        <>
          {/* Links for GitHub, Demo, and More Details */}
          <div className="mt-4 flex justify-around space-x-4">
            {/* GitHub Link */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink hover:text-red text-sm"
            >
              <FaGithub size={22} /> Github
            </a>

            {/* Demo Link */}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink hover:text-red text-sm"
              >
                <FaLink size={18} /> Demo
              </a>
            )}

            {/* Walkthrough Link */}
            {walkthroughLink && (
              <a
                href={walkthroughLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink hover:text-red text-sm"
              >
                <FaYoutube size={18} /> Walkthrough Demo
              </a>
            )}

            {/* Live Link */}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink hover:text-red text-sm"
              >
                <FiGlobe size={18} /> Live
              </a>
            )}
          </div>

          <Link
            href={moreDetailsLink}
            className="flex items-center justify-between mt-4"
          >
            <button className="text-white w-full bg-gradient-to-br from-pink to-red hover:brightness-125 focus:ring-2 focus:outline-none focus:ring-blue rounded-md px-5 py-2.5 text-center me-2 mb-2 text-md min-w-[250px] shadow cursor-pointer transition-all duration-300">
              More Details
            </button>
          </Link>

          {/* Tech stack icons */}
          <div className="flex justify-center items-center gap-3 mt-4 text-xl">
            {stack?.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative flex items-center justify-center bg-black rounded-full p-2"
                >
                  <Icon className={`${tech.color}`} />
                  {/* Tooltip */}
                  <span className="absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {tech.label}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
