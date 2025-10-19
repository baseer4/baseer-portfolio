"use client";

import React from "react";
import { Award, ShieldCheck, GraduationCap, ExternalLink } from "lucide-react";
import { useDragAnimation } from "@/hooks/useDragAnimation";

const CertificationCard = () => {
  const dragProps = useDragAnimation();

  const certifications = [
    {
      icon: <ShieldCheck className="h-4 w-4 text-orange-400" />,
      title: "Google Cloud Essentials",
      org: "Google Cloud Skills Boost",
      link: "https://www.cloudskillsboost.google/public_profiles/3ff63be4-3ac0-42c5-8916-004ce087148a/badges/16534575",
    },
    {
      icon: <Award className="h-4 w-4 text-orange-400" />,
      title: "Docker Essentials: A Developer Introduction",
      org: "IBM",
      link: "https://courses.cognitiveclass.ai/certificates/682b40d981644333a6e7753e382e831d",
    },
    {
      icon: <GraduationCap className="h-4 w-4 text-orange-400" />,
      title: "Full-Stack Web Development",
      org: "Meta / Coursera",
      link: "#",
    }
  ];

  return (
    <div
      {...dragProps}
      className="max-h-60 rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm pl-6 py-6 text-white hover:border-white/40 transition-colors select-none flex flex-col"
    >
      <div className="flex flex-col lg:flex-row items-center gap-2 mb-3">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          <h2 className="text-md lg:text-lg font-semibold text-white">Certifications</h2>
        </div>
      </div>

      <div className="relative flex-1 overflow-y-auto overflow-x-hidden pr-4 custom-scrollbar">
        <ul className="flex flex-col gap-3">
          {certifications.map((cert, idx) => (
            <li
              key={idx}
              className="flex items-start justify-between gap-3 p-3 rounded-md bg-white/5 hover:bg-gray-700 hover:scale-105 transition-all"
            >
              <div className="flex items-start gap-3">
                {cert.icon}
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-white">{cert.title}</p>
                  <p className="text-xs text-gray-400">{cert.org}</p>
                </div>
              </div>

              {/* View Credentials button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-medium"
              >
                Open <ExternalLink className="h-3 w-3 flex items-end justify-end" />
              </a>
            </li>
          ))}
        </ul>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#0b0b0b] to-transparent" />
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }
      `}</style>
    </div>
  );
};

export default CertificationCard;
