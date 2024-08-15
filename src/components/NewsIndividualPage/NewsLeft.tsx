import React from "react";
import GlobalChallenges from "./GlobalChallenges";
import MainImage from "@/asset/news/card3.png";

export default function NewsLeft() {
  const challenges = [
    {
      title: "Global challenges",
      content: [
        "The UN chief said that around 80 million children are set to remain out of school by 2030, unless action is taken to transform education worldwide.",
        "That meant that Sustainable Development Goal 4 (SDG4) which aims",
        "Currently, only a sixth of countries are on course to achieve the SDG4 target of universal access to quality education.",
        "Mr. Guterres also noted that completion rates at a secondary level are falling for too many learners are not equipped with the skills they need to succeed in a changing world, and early childhood and adult learning are often seen as optional.",
        '"It is truly shocking that some 70 per cent of children in low-income Africa are unable to read a basic text by age 10," he said.',
      ],
    },
    {
      title: "Global challenges",
      content: [
        "Studying in Germany can be a fantastic option for international students due to the multitude of benefits it offers, including:",
        "Affordability: Public universities in Germany typically charge minimal tuition fees, often just a semester contribution covering administrative costs. This makes German education significantly cheaper compared to many other popular study destinations.",
      ],
    },
  ];

  const educationLevels = [
    {
      title: "Master's Degree",
      description:
        "This degree is generally awarded after studying for two to four semesters (one to two years).",
    },
    {
      title: "PhD",
      description:
        "A doctoral degree proves a student's ability to carry out extensive academic research. It includes a written dissertation and an oral exam. There is generally no set time frame for a doctoral degree. However, most students complete their dissertations within two to five years.",
    },
    {
      title: "Academic Universities",
      description:
        "These are institutions that focus on theoretical approach in their practice. Students can pursue all types of degrees at these institutions.",
    },
    {
      title: "Universities of Art/Music",
      description:
        "Universities focus on artistic training and are open to students with artistic talents for example: design, architecture, photography etc.",
    },
  ];

  return (
    <GlobalChallenges
      challenges={challenges}
      educationLevels={educationLevels}
      speakerImage={MainImage}
    />
  );
}
