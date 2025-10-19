"use client";

import About from "../components/About";
import Blogs from "../components/Blogs";
import Certifications from "../components/Certifications";
import HomeIntro from "../components/HomeIntro";
import Projects from "../components/projects";
import Quote from "../components/Quote";
import Skill from "../components/Skill";
import Card from "../components/ProjectsCard";
import ProjectsCard from "../components/ProjectsCard";
import { motion } from "framer-motion";
import EducationCard from "@/components/EducationCard";
import BlogsCard from "@/components/BlogsCard";
import TechstackCard from "@/components/TechstackCard";
import CertificationCard from "@/components/CertificationCard";
import AboutCard from "@/components/AboutCard";

export default function Hero() {
  return (
    <div>
      <HomeIntro />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Top row */}
        <motion.div
          className="sm:col-span-1 lg:col-span-3"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ProjectsCard />
        </motion.div>

        <motion.div
          className="sm:col-span-1 lg:col-span-3"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <AboutCard />
        </motion.div>

        {/* Second row */}
        <motion.div
          className="sm:col-span-1 lg:col-span-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <TechstackCard />
        </motion.div>
        <motion.div
          className="sm:col-span-1 lg:col-span-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <CertificationCard />
        </motion.div>

        <motion.div
          className="sm:col-span-1 lg:col-start-5 lg:col-span-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          <BlogsCard />
        </motion.div>

        <motion.div
          className="sm:col-span-1 lg:col-start-6 lg:col-span-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <EducationCard />
        </motion.div>
      </div>

    </div>
  );
}
