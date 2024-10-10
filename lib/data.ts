import React from "react";
import { FaCode } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import nextUpManagerImg from "@/public/nextUpManager.png";
import afsalertImg from "@/public/afs-alert.png";
import bestrecipeappImg from "@/public/bestrecipeapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Über Mich",
    hash: "#about",
  },
  {
    name: "Projekte",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Werdegang",
    hash: "#experience",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Java Entwickler & Consultant",
    location: "Adesso Insurance Solutions GmbH - Hamburg",
    description:
      "Als Java-Entwickler optimiere ich den reibungslosen Zahlungsverkehr im Versicherungswesen, indem ich unsere leistungsstarke Standardsoftware PayTras kontinuierlich weiterentwickle und präzise auf die individuellen Anforderungen unserer Kunden zuschneide.",
    icon: React.createElement(FaCode),
    date: "07/2024 - heute",
  },
  {
    title: "bootcamp Java Development",
    location: "neuefische - remote",
    description:
      "Hier habe ich meinen Skills einen Feinschliff verpasst. Insbesondere in Java und Spring Boot. Vielen Dank @neuefische! Es war eine tolle Zeit mit euch!",
    icon: React.createElement(FaCode),
    date: "10/2023 - 02/2024",
  },
  {
    title: "Zertifizierungen",
    location: "CBW - Hamburg",
    description:
      "Für meinen weiteren Weg, habe ich hier meine Kenntnisse in drei Programmiersprachen (JavaScript, PHP, Java) vertieft. Jede dieser Etaphen habe ich mit einer Zertifizierung erfolgreich abgeschlossen.",
    icon: React.createElement(LiaCertificateSolid),
    date: "2022 - 2023",
  },
  {
    title: "Umschulung zum Anwendungsentwickler",
    location: "MySchool - Hamburg",
    description:
      "Durch einen glücklichen Zufall bot sich mir die Möglichkeit, meinen langersehnten Traum zu verwirklichen. Ich habe die Chance ergriffen und die Umschulung zum Fachinformatiker - Anwendungsentwickler erfolgreich abgeschlossen.",
    icon: React.createElement(PiStudentDuotone),
    date: "2020 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "NextUp Manager",
    description:
      "Skalierbare React SPA. Dieses simuliert ein Tickersystem, ähnlich wie es bei Behörden üblich ist.",
    tags: ["React", "TypeScript", "Java", "Spring Boot", "MongoDB", "Bootstrap", "Docker", "CI/CD", "SonarCloud", "Testing"],
    imageUrl: nextUpManagerImg,
  },
  {
    title: "AFS - Alert ",
    description:
      "Eine mobile App für iOS und Android Geräte für AFS - Interkulturelle Begegnungen e.V. Mit Authentifizierung über Firebase und Push - Nachrichten mit EXpo CLI. ",
    tags: ["React-Native", "JavaScript", "Firebase", "Expo-CLI"],
    imageUrl: afsalertImg,
  },
  {
    title: "BestRecipeApp",
    description:
      "In einem dynamischen Team von vier Personen entwickelten wir eine Rezepte - SPA, die CRUD-Operationen ermöglicht. Angelehnt an Scrum-Methoden.",
    tags: ["React", "TypeScript", "Spring Boot", "MongoDB", "SASS", "Docker", "CI/CD", "SonarCloud"],
    imageUrl: bestrecipeappImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Boot",
  "JUnit5",
  "Mockito",
  "Integration Testing",
  "TDD",
  "Postman",
  "Maven",
  "DevOps",
  "Deployment",
  "CRUD",
  "SOAP",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React",
  "React Native",
  "FireBase",
  "MongoDB",
  "Node.js",
  "Express.js",
  "CI/CD",
  "REST API",
  "Docker",
  "SonarCloud",
  "Scrum",
  "Kanban",
  "Clean Code",
  "OOP",
  "Pair Programming",
  "Git",
  "Bootstrap",
  "PHP",
  "MySQL",
  
] as const;
