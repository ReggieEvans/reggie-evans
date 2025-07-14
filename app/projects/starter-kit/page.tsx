'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowCircleLeft, FaArrowCircleRight, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Glitch from '@/app/components/Glitch';
import Footer from '@/app/components/Footer';

const StarterKitPage = () => {
  return (
    <div className="text-white text-center relative">
      <header className='flex items-center justify-between bg-dark py-4 px-4 text-xs uppercase font-bold md:px-12'>
        <div className='text-2xl md:text-3xl'><Glitch text="RE" /></div>
        <div className='flex flex-col gap-2 items-center sm:flex-row sm:gap-8'>
          <Link href="/" className='flex items-center gap-2 opacity-70 hover:text-blue hover:opacity-100 transition-all duration-300'><FaArrowCircleLeft />Back Home</Link>
          <Link href="/projects/gamestack" className='flex items-center gap-2 opacity-70 hover:text-blue hover:opacity-100 transition-all duration-300'>Next Project<FaArrowCircleRight /></Link>
        </div>
      </header>

      {/* Title Section */}
      <section className="bg-dark py-24 px-2 md:px-8">
        <div className='mb-12'>
          <Image
            src="/images/projects/starter-kit/logo-556-62.png"
            alt="Starter Kit Screenshot"
            width={552}
            height={62}
            className="mx-auto rounded shadow"
          />
        </div>
        <h1 className="text-3xl font-black uppercase text-center blue_gradient pb-4 mt-12">
          Next.js 15 Full-Stack Starter Template
        </h1>
        <p className="max-w-4xl text-lg mx-auto opacity-70">A modern full-stack boilerplate powered by Next.js 15 (App Router), designed for building scalable web apps fast — with built-in authentication, theming, role-based access control, and testing.</p>
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-12">
          <a href="https://github.com/ReggieEvans/nextjs-starter-template" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center text-center mt-12 font-bold hover:underline text-blue uppercase"><FaGithub /> Github Repo<FiExternalLink /></a>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full text-font bg-dark/80 py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase text-white">Features</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient"><span className='text-white'>✅</span> Authentication & Authorization</h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div> 
            <ul className="pl-6 list-none opacity-70">
              <li>&bull; Email + password authentication</li>
              <li>&bull; JWT token-based sessions (HttpOnly cookies)</li>
              <li>&bull; Role-based access (e.g. admin, user)</li>
              <li>&bull; Middleware-protected routes</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient"><span className='text-white'>🎨</span> Styling & Theming</h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div> 
            <ul className="pl-6 list-none opacity-70">
              <li>&bull; Tailwind CSS with dark/light mode (system default)</li>
              <li>&bull; Theme toggle dropdown (light / dark / system)</li>
              <li>&bull; Custom Google + local fonts</li>
              <li>&bull; Configurable color palette via CSS variables</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient"><span className='text-white'>🧠</span> Developer Experience</h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div> 
            <ul className="pl-6 list-none opacity-70">
              <li>&bull; App Router (Next.js 15)</li>
              <li>&bull; TypeScript, Zod, React Hook Form</li>
              <li>&bull; Path aliases (@/) for cleaner imports</li>
              <li>&bull; File-based routing with layout support</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient"><span className='text-white'>🧪</span> Testing</h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div> 
            <ul className="pl-6 list-none opacity-70">
              <li>&bull; Jest + React Testing Library for unit tests</li>
              <li>&bull; Cypress for end-to-end testing</li>
              <li>&bull; `start-server-and-test` script for seamless E2E flow</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold blue_gradient"><span className='text-white'>📦</span> Full Stack Integration</h3>
            <div className="w-full bg-blue h-[1px] max-w-[200px] mx-auto"></div> 
            <ul className="pl-6 list-none opacity-70">
              <li>&bull; MongoDB + Mongoose</li>
              <li>&bull; Password hashing with bcrypt</li>
              <li>&bull; Secure password reset via token</li>
              <li>&bull; Toast notifications using ShadCN</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full text-font bg-dark py-24 px-2 md:px-8">
        <h2 className="text-3xl font-black text-center mb-12 uppercase text-white">Tech Stack</h2>
        <div className="space-y-4 text-lg opacity-70 text-center max-w-2xl mx-auto">
          <p><strong>Framework:</strong> Next.js 15 (App Router)</p>
          <p><strong>Auth:</strong> JWT + bcrypt</p>
          <p><strong>Styling:</strong> Tailwind CSS + shadcn/ui</p>
          <p><strong>Testing:</strong> Jest + Cypress</p>
          <p><strong>Validation:</strong> Zod + React Hook Form</p>
          <p><strong>Database:</strong> MongoDB + Mongoose</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StarterKitPage;
