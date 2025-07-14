'use client'

import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Certifications from "@/components/Certifications";
import HomeIntro from "@/components/HomeIntro";
import Projects from "@/components/projects";
import Quote from "@/components/Quote";
import Skill from "@/components/Skill";


export default function Hero() {
  return (
   <div>
    <HomeIntro />
    <About />
    <Skill />
    <Projects />
    <Blogs />
    <Certifications />
    <Quote />
   </div>
  )
}
