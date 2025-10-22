"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaGithub,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Glitch from "@/app/components/Glitch";
import Footer from "@/app/components/Footer";
import { FaLink } from "react-icons/fa6";

const StarterKitPage = () => {
  return (
    <div className="text-white text-center relative">
      <header className="flex items-center justify-between bg-dark py-4 px-4 text-xs uppercase font-bold md:px-12">
        <div className="text-2xl md:text-3xl">
          <Glitch text="RE" />
        </div>
        <div className="flex flex-col gap-2 items-center sm:flex-row sm:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 opacity-70 hover:text-blue hover:opacity-100 transition-all duration-300"
          >
            <FaArrowCircleLeft />
            Back Home
          </Link>
          <Link
            href="/projects/fantasy-edge"
            className="flex items-center gap-2 opacity-70 hover:text-blue hover:opacity-100 transition-all duration-300"
          >
            Next Project
            <FaArrowCircleRight />
          </Link>
        </div>
      </header>

      {/* Title Section */}
      <section className="relative bg-dark py-40 px-2 md:px-8">
        <div
          className="absolute top-0 left-0"
          style={{
            background:
              "url('/images/projects/my-dynasty-hub/team-picker-app.png') no-repeat center center / cover",
            width: "100%",
            height: "100%",
            opacity: 0.1,
            filter: "blur(2px)",
          }}
        ></div>
        <div className="mb-12">
          <Image
            src="/images/projects/my-dynasty-hub/logo-400-50.png"
            alt="Starter Kit Screenshot"
            width={400}
            height={50}
            className="mx-auto rounded shadow"
          />
        </div>
        <div className="relative">
          <h1 className="text-3xl font-black uppercase text-center blue_gradient pb-4 mt-12">
            College Football 26 Team Picker App
          </h1>
          <p className="max-w-4xl text-lg mx-auto opacity-70">
            Fun personal project built for the r/NCAAFBseries subreddit.
            Currently this is just the first small feature of a much bigger
            project called MyDynastyHub. It allows for people to find a random
            team to play with based on twenty different filters, or by using
            preset filters. Built this in about a week and received 1200+ views
            in the first two days after deployment.
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row md:gap-12">
            <a
              href="https://github.com/ReggieEvans/cfb26-team-picker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center text-center mt-12 font-bold hover:underline text-blue-400 uppercase"
            >
              <FaGithub /> Github Repo
              <FiExternalLink />
            </a>
            <a
              href="https://mydynastyhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center text-center mt-12 font-bold hover:underline text-blue-400 uppercase"
            >
              <FaLink /> Live Website
              <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full text-font bg-dark/80 py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase text-white">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">✅</span> Team Finder
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="pl-6 list-none opacity-70">
              <li>
                &bull; Filter by conference, region, prestige, offense/defense
                style, and difficulty
              </li>
              <li>
                &bull; Include/exclude academic/alt-rivalry vibes, stadium size,
                uniforms, and tradition tags
              </li>
              <li>
                &bull; Surface teams that match your playstyle + time commitment
                (rebuild vs contender)
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">🧠</span> Smart Randomizer
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="pl-6 list-none opacity-70">
              <li>
                &bull; “Surprise Me” picks with lockable constraints
                (conference, prestige band, scheme)
              </li>
              <li>
                &bull; Weighted randomness favors underplayed or story-rich
                programs
              </li>
              <li>
                &bull; One-tap Challenge Modes: rebuild, pipeline only, 3-year
                window, hardcore sliders
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">🔁</span> Team Explorer & Compare
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="pl-6 list-none opacity-70">
              <li>
                &bull; Rich team profiles: scheme, key players, pipelines,
                rivalries, stadium & brand notes
              </li>
              <li>
                &bull; Statistical grades for offense, defense, and overall
              </li>
              <li>
                &bull; Statistical grades across all major school categories
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full text-font bg-dark py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase text-white">
          Tech Stack
        </h2>
        <div className="space-y-4 text-lg opacity-70 text-center max-w-2xl mx-auto">
          <p>
            <strong>Framework:</strong> Next.js 15 (App Router)
          </p>
          <p>
            <strong>Styling:</strong> Tailwind CSS + shadcn/ui
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StarterKitPage;
