"use client";

import React, { useState } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { FaCircleXmark } from "react-icons/fa6";
import Glitch from "@/app/components/Glitch";
import Link from "next/link";

const screenshots = [
  {
    src: "/images/projects/fantasy-edge/fantasy-edge_dashboard.png",
    alt: "Landing Page",
    caption: "Landing Page",
  },
  {
    src: "/images/projects/fantasy-edge/fantasy-edge_slate-manager.png",
    alt: "Slate Manager",
    caption: "Slate Manager",
  },
  {
    src: "/images/projects/fantasy-edge/fantasy-edge_matchups.png",
    alt: "Matchups",
    caption: "Matchups",
  },
  {
    src: "/images/projects/fantasy-edge/fantasy-edge_scouting.png",
    alt: "Scouting",
    caption: "Scouting",
  },
  {
    src: "/images/projects/fantasy-edge/fantasy-edge_targeting.png",
    alt: "Player Targeting",
    caption: "Player Targeting",
  },
  {
    src: "/images/projects/fantasy-edge/fantasy-edge_pool.png",
    alt: "Player Pool",
    caption: "Player Pool",
  },
  {
    src: "/images/projects/fantasy-edge/fantasy-edge_study-hub.png",
    alt: "Study Hub",
    caption: "Study Hub",
  },
  {
    src: "/images/projects/fantasy-edge/fantasy-edge_bankroll-tracker.png",
    alt: "Bankroll Tracker",
    caption: "Bankroll Tracker",
  },
];

const GameStackPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="text-white text-center relative">
      <header className="flex items-center justify-between bg-dark py-4 px-4 text-xs uppercase font-bold md:px-12">
        <Link href={"/"} className="text-2xl md:text-3xl">
          <Glitch text={"RE"} />
        </Link>
        <div className="flex flex-col gap-2 items-center sm:flex-row sm:gap-8">
          <Link
            href={"/"}
            className="flex items-center gap-2 opacity-70 hover:text-blue hover:opacity-100 transition-all duration-300"
          >
            <FaArrowCircleLeft />
            Back Home
          </Link>
          <Link
            href={"/projects/gamestack"}
            className="flex items-center gap-2 opacity-70 hover:text-blue hover:opacity-100 transition-all duration-300"
          >
            Next Project
            <FaArrowCircleRight />
          </Link>
        </div>
      </header>

      {/* Title Section */}
      <section className="relative bg-dark py-24 px-2 md:px-8">
        <div
          className="absolute top-0 left-0"
          style={{
            background:
              "url('/images/projects/fantasy-edge/fantasy-edge_study-hub.png') no-repeat center center / cover",
            width: "100%",
            height: "100%",
            opacity: 0.1,
            filter: "blur(2px)",
          }}
        ></div>
        <div className="mb-12">
          <Image
            src="/images/projects/fantasy-edge/fantasy-edge-logo-300-91.png"
            alt="Fantasy Edge Logo"
            width={300}
            height={91}
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl font-black uppercase text-center blue_gradient pb-4 mt-12">
          Full Stack Fantasy Football App
        </h1>
        <p className="max-w-4xl text-lg mx-auto opacity-70">
          A modern web app for building better fantasy football lineups.
          Designed for speed, clarity, and iteration—pull in slates, study
          matchups, grade players, build lineups, and track your bankroll. Built
          with Next.js, Supabase, and a polished shadcn/ui interface.
        </p>
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-12">
          <a
            href="http://reggieevans.me/projects/fantasy-edge#demo"
            className="flex items-center gap-2 justify-center text-center mt-12 font-bold hover:underline text-blue-400 uppercase"
          >
            <FaLink /> Walkthrough Demo
          </a>
          <a
            href="https://github.com/ReggieEvans/fantasy-edge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center text-center mt-12 font-bold hover:underline text-blue-400 uppercase"
          >
            <FaGithub /> Github Repo
            <FiExternalLink />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full text-font bg-dark/80 py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase text-white">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4 mb-12">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">📋</span> Slate Manager
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="pl-6 list-none opacity-70">
              <li>
                &bull; Import DraftKings slates and normalize team/player names
              </li>
              <li>
                &bull; Vegas integration: spreads, totals, implied team totals
              </li>
              <li>
                &bull; One flow from contests → matchups → player pool → lineups
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">🔬</span> Scouting and Player Hub
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="list-none pl-6 opacity-70">
              <li>
                &bull; Team pages with efficiency, usage, and matchup grades
              </li>
              <li>
                &bull; Full rosters with sortable advanced stats (PFF, rates,
                context)
              </li>
              <li>
                &bull; Tag players (lock/like/fade) to build your player pool
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">⚙️</span> Optimizer & Exports
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="list-none pl-6 opacity-70">
              <li>
                &bull; Rule builder: stacks, exposures, salary bands, groups
              </li>
              <li>&bull; Generate multi-entry lineups for NFL + CFB</li>
              <li>&bull; One-click CSV export formatted for DraftKings</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">📚</span> Contest Study Hub
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="pl-6 list-none opacity-70">
              <li>&bull; Import past entries; ownership vs. leverage views</li>
              <li>&bull; Compare builds to top-1% lineups and winners</li>
              <li>&bull; Identify repeatable edges by contest type</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">📊</span> Bankroll Tracker
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="list-none pl-6 opacity-70">
              <li>&bull; Track entries, ROI, and profit by slate/format</li>
              <li>&bull; Filters for season, site, and contest type</li>
              <li>&bull; Challenge modes (e.g., $400 → X) with trendlines</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient">
              <span className="text-white">⛏️</span> Pick’em
            </h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div>
            <ul className="list-none pl-6 opacity-70">
              <li>&bull; Import weekly games; auto-generate picks</li>
              <li>
                &bull; Factor in vegas lines and market trends to weight
                confidence
              </li>
              <li>
                &bull; Rank plays by edge tiers with suggested unit sizing
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
        <div className="space-y-4 text-lg opacity-70">
          <p>
            <strong>Framework:</strong> Next.js 15 (App Router)
          </p>
          <p>
            <strong>Database:</strong> Supabase
          </p>
          <p>
            <strong>Auth:</strong> Supabase Auth
          </p>
          <p>
            <strong>Styling:</strong> Tailwind CSS, shadcn/ui
          </p>
          <p>
            <strong>Forms:</strong> React Hook Form + Zod
          </p>
          <p>
            <strong>Icons:</strong> Lucide
          </p>
          <p>
            <strong>Type Checking:</strong> TypeScript
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section
        id="demo"
        className="w-full text-font bg-dark/80 py-24 px-2 md:px-8"
      >
        <h2 className="text-3xl font-black text-center mb-12 uppercase text-white">
          Walkthrough Demo
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-40">
          <h2 className="font-black text-2xl opacity-30">Coming Soon</h2>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="w-full text-font bg-dark py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase text-white">
          Screenshots
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {screenshots.map((shot, index) => (
            <div
              key={index}
              className="space-y-4 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={150}
                height={90}
                className="w-full rounded-lg shadow-md transition duration-300 hover:scale-[1.02]"
              />
              <p className="text-center text-xs uppercase">{shot.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-8 text-white text-2xl hover:text-red-400"
            >
              <FaCircleXmark />
            </button>

            {/* Image */}
            <Image
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              width={960}
              height={540}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />

            {/* Caption */}
            <p className="mt-4 text-center text-white">
              {screenshots[currentIndex].caption}
            </p>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
              <button
                onClick={showPrev}
                className="text-white text-4xl hover:text-blue-400"
              >
                <FaArrowCircleLeft className="opacity-50" />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
              <button
                onClick={showNext}
                className="text-white text-4xl hover:text-blue-400"
              >
                <FaArrowCircleRight className="opacity-50" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GameStackPage;
