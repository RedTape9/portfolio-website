"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Über Mich");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Über mich</SectionHeading>
      <p className="mb-3">
        Nachdem erfolgreichen Abschluss meiner Umschulung zum {" "}
        <span className="font-medium">Anwendungsentwickler</span>, habe ich mich in verschiedenen WEB - Programmiersprachen ausprobiert. Ich fand mich schlussendlich in Java wieder und absolvierte bei{" "}
        <span className="font-medium">neuefische</span>{" "} das Java Developer Bootcamp. Hier habe ich die nötigen stateoftheart <span className="font-medium">Skills</span>{" "} erlernt und habe diese in verschiedenen <span className="font-medium">Projekten</span>{" "} angewandt.
        Ich <span className="underline">liebe</span> das Gefühl, wenn ich ein Problem gelöst habe. Ich lasse mich leicht von neuen Technologien begeistern und bin immer auf der Suche nach Herausforderungen.
        Mein Core-Stack ist{" "}
        <span className="font-medium">
          React, Spring Boot und Java EE
        </span>
        . Ich interessiere mich ebenfalls für mobile App - Entwicklung und AI. Aktuell arbeite ich als {" "}
        <span className="font-medium">Java EE Entwickler</span> bei <span className="font-medium">Adesso insurance soulutions GmbH</span> im Bereich der Versicherungs-Zahlungsverkehr Software.
      </p>

      <p>
        <span className="italic">Wenn ich Mal nicht code</span>, bin ich gerne an der frischen Luft, treibe Sport, spiele Gitarre und verbringe Zeit mit Freunden.
      </p>
    </motion.section>
  );
}
