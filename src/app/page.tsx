"use client"
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Typing from "@/components/Typing";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div className="min-h-screen bg-fixed [background-image:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]

">
      <Navbar />
      <Typing/>
      <About />
      <Skills/>
    </div>
  );
}
