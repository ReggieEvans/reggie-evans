import { IoArrowDownCircleOutline } from "react-icons/io5";

import Glitch from "./components/Glitch";
import Social from "./components/Social";
import OpenToWork from "./components/OpenToWork";
import About from "./components/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow bg-radial from-gradient-1 to-gradient-2  overflow-x-hidden">
        {/* <Banner /> */}
        <div className="relative flex flex-col justify-center w-screen h-screen">
          <div className="flex flex-col grow justify-center">
            <span className="text-4xl mx-auto sm:text-5xl md:text-6xl lg:text-8xl"><Glitch text={"REGGIE EVANS"}/></span>
            <p className="subtitle tracking-[5px] sm:text-2xl md:text-3xl lg:tracking-[12px] lg:text-4xl">frontend developer</p>
            <Social />
            <OpenToWork />
          </div>
          <div className="flex justify-center h-[100px] text-3xl text-yellow opacity-70 animate-bounce">
            <IoArrowDownCircleOutline />
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}
