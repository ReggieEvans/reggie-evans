'use client'

import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight, FaGithub, FaLink } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import { FaCircleXmark } from 'react-icons/fa6';
import Glitch from '@/app/components/Glitch';
import Link from 'next/link';

const screenshots = [
  {
    src: '/images/projects/gamestack/gamestack-screenshot-4.png',
    alt: 'Landing Page',
    caption: 'Landing Page',
  },
  {
    src: '/images/projects/gamestack/gamestack-screenshot-1.png',
    alt: 'Library Page',
    caption: 'Library Page',
  },
  {
    src: '/images/projects/gamestack/gamestack-screenshot-2.png',
    alt: 'Game Details',
    caption: 'Game Details',
  },
  {
    src: '/images/projects/gamestack/gamestack-screenshot-3.png',
    alt: 'Fully Responsive',
    caption: 'Fully Responsive',
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
      <header className='flex items-center justify-between bg-dark py-4 px-4 text-xs uppercase font-bold md:px-12'>
        <Link href={'/'} className='text-2xl md:text-3xl'><Glitch text={"RE"} /></Link>
        <div className='flex flex-col gap-2 items-center sm:flex-row sm:gap-8'>
          <Link href={'/'} className='flex items-center gap-2 opacity-70 hover:text-blue hover:opacity-100 transition-all duration-300'><FaArrowCircleLeft />Back Home</Link>
          <Link href={'/projects/starter-kit'} className='flex items-center gap-2 opacity-70 hover:text-blue hover:opacity-100 transition-all duration-300'>Next Project<FaArrowCircleRight /></Link>
        </div>

      </header>

      {/* Title Section */}
      <section className="bg-dark py-24 px-2 md:px-8">
        <div className='mb-12'>
          <Image
            src="/images/projects/gamestack/logo-556-57.png"
            alt="Game Stack Logo"
            width={556}
            height={57}
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl font-black uppercase text-center blue_gradient pb-4 mt-12">
          Video Game Backlog Tracker
        </h1>
        <p className="max-w-4xl text-lg mx-auto opacity-70">A full-stack, modern web app for managing your personal game library. Built with the latest in Next.js (App Router), MongoDB, and Tailwind CSS — with authentication, game tracking, theming, and responsive UI.</p>
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-12">
          <a href='https://game-stack-taupe.vercel.app' target='_blank' rel="noopener noreferrer" className="flex items-center gap-2 justify-center text-center mt-12 font-bold hover:underline text-blue uppercase"><FaLink /> Live Demo<FiExternalLink /></a>
          <a href='https://github.com/ReggieEvans/game-stack' target='_blank' rel="noopener noreferrer" className="flex items-center gap-2 justify-center text-center mt-12 font-bold hover:underline text-blue uppercase"><FaGithub /> Github Repo<FiExternalLink /></a>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full text-font bg-dark/80 py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase blue_gradient">Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Game Library Tracker</h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div> 

            <ul className="pl-6 list-none opacity-70">
              <li>&bull; Add and manage games in your personal library</li>
              <li>&bull; Track hours played, completion status, and more</li>
              <li>&bull; View game summaries and screenshots</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Auth & User Sessions</h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div> 
            <ul className="list-none pl-6 opacity-70">
              <li>&bull; Secure email/password login</li>
              <li>&bull; JWT authentication via HttpOnly cookies</li>
              <li>&bull; Role-based access support</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Libraries</h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div> 

            <ul className="list-none pl-6 opacity-70">
              <li>&bull; Tailwind CSS + dark/light theme support</li>
              <li>&bull; Reusable shadcn/ui components</li>
              <li>&bull; Form validation with Zod + React Hook Form</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full text-font bg-dark py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase blue_gradient">Tech Stack</h2>
        <div className="space-y-4 text-lg opacity-70">
          <p><strong>Framework:</strong> Next.js 15 (App Router)</p>
          <p><strong>Database:</strong> MongoDB + Mongoose</p>
          <p><strong>Auth:</strong> JSON Web Tokens (JWT) + bcrypt</p>
          <p><strong>Styling:</strong> Tailwind CSS, shadcn/ui</p>
          <p><strong>Forms:</strong> React Hook Form + Zod</p>
          <p><strong>Icons:</strong> Lucide</p>
          <p><strong>Type Checking:</strong> TypeScript</p>
        </div>
      </section>

       {/* Screenshots Section */}
      <section className="w-full text-font bg-dark/80 py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase blue_gradient">Screenshots</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {screenshots.map((shot, index) => (
            <div key={index} className="space-y-4 cursor-pointer" onClick={() => openModal(index)}>
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
            <p className="mt-4 text-center text-white">{screenshots[currentIndex].caption}</p>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
              <button onClick={showPrev} className="text-white text-4xl hover:text-blue-400"><FaArrowCircleLeft className='opacity-50' /></button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
              <button onClick={showNext} className="text-white text-4xl hover:text-blue-400"><FaArrowCircleRight className='opacity-50' /></button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GameStackPage;