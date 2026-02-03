"use client"
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Typing from "@/components/Typing";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Typing/>
      <About />
    </div>
  );
}
