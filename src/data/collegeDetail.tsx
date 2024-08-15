import {
  c1,
  collegeLogo,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  user1,
  academicZone,
  auditorium,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  scholarship1,
} from "@/asset";
import { distance } from "framer-motion";
import { BiSolidInstitution } from "react-icons/bi";
import { FaTransgenderAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdCastForEducation } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

// Single college Details
export const collegeDetailsPage = {
  collegeLogo: collegeLogo,
  bgImage: c1,
  collegeName: "IIT Madras - Indian Institute of Technology",
  location: {
    state: "Tamil Nadu",
    city: "Chennai",
    country: "India",
  },
  collegeType: "Government",
  estYear: "1990",
  lastUpdate: "Nov 17, 2023 14:25 IST",
  //  dont collegeDetails right now
  collegeDetails: [
    {
      navItem: "Overview",
      title: {
        t1: "Top Engineering Colleges",
        t2: "in India",
        t3: "2024",
      },
      author: {
        avatar: user1,
        name: "Pankaj Kumar",
        lastUpdated: "MAR 21, 2024 18:39 IST",
      },
      article:
        "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
      readMoreLink: "#",
      button: {
        button1: { text: "Apply Now", link: "#" },
        button2: { text: "Download Brochure", link: "#" },
      },
    },
    {
      navItem: "Placements",
      title: {
        t1: "IIT Madras",
        t2: "Placements",
        t3: "2023",
      },
      article:
        "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
    },
    {
      navItem: "Courses",
      title: {
        t1: "IIT Madras",
        t2: "Courses And Admission",
        t3: "2024",
      },
      article:
        "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
    },
    {
      navItem: "Eligibility",
      title: {
        t1: "IIT Madras",
        t2: "Courses and Eligibility Criteria",
        t3: "2024",
      },
      article:
        "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
      readMoreLink: "#",
      courses: [
        {
          bg: c3,
          name: "B.Tech",
          eligibility:
            "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a minimum of 55% marks (50% for SC/ST candidates) or equivalent grade, and should have studied Mathematics at the 10+2 level or at the Bachelor's level. Additionally, candidates need to qualify for the Joint Admission Test for M.Sc. (JAM) conducted by IITs.",
          fees: "69999",
          duration: "2 Years",
          buttons: {
            button1: { text: "Apply Now", href: "#" },
            button2: { text: "Download Brochure", href: "#" },
          },
        },
        {
          bg: c4,
          name: "M.Tech",
          eligibility:
            "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a minimum of 55% marks (50% for SC/ST candidates) or equivalent grade, and should have studied Mathematics at the 10+2 level or at the Bachelor's level. Additionally, candidates need to qualify for the Joint Admission Test for M.Sc. (JAM) conducted by IITs.",
          fees: "69999",
          duration: "2 Years",
          buttons: {
            button1: { text: "Apply Now", href: "#" },
            button2: { text: "Download Brochure", href: "#" },
          },
        },
        {
          bg: c5,
          name: "Ph.D",
          eligibility:
            "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a minimum of 55% marks (50% for SC/ST candidates) or equivalent grade, and should have studied Mathematics at the 10+2 level or at the Bachelor's level. Additionally, candidates need to qualify for the Joint Admission Test for M.Sc. (JAM) conducted by IITs.",
          fees: "69999",
          duration: "2 Years",
          buttons: {
            button1: { text: "Apply Now", href: "#" },
            button2: { text: "Download Brochure", href: "#" },
          },
        },
        {
          bg: c6,
          name: "MBA",
          eligibility:
            "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a minimum of 55% marks (50% for SC/ST candidates) or equivalent grade, and should have studied Mathematics at the 10+2 level or at the Bachelor's level. Additionally, candidates need to qualify for the Joint Admission Test for M.Sc. (JAM) conducted by IITs.",
          fees: "69999",
          duration: "2 Years",
          buttons: {
            button1: { text: "Apply Now", href: "#" },
            button2: { text: "Download Brochure", href: "#" },
          },
        },
        {
          bg: c7,
          name: "BA",
          eligibility:
            "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a",
          fees: "69999",
          duration: "2 Years",
          buttons: {
            button1: { text: "Apply Now", href: "#" },
            button2: { text: "Download Brochure", href: "#" },
          },
        },
        {
          bg: c8,
          name: "MBA",
          eligibility:
            "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a",
          fees: "69999",
          duration: "2 Years",
          buttons: {
            button1: { text: "Apply Now", href: "#" },
            button2: { text: "Download Brochure", href: "#" },
          },
        },
      ],
    },
    {
      navItem: "Cut Off",
      title: {
        t1: "IIT Madras",
        t2: "Cut Off",
        t3: "2024",
      },
      article:
        "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
      readMoreLink: "#",
    },
    {
      navItem: "Facilities",
      title: {
        t1: "IIT Madras",
        t2: "Campus Facilities",
      },
      article:
        "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
      facilities: [
        { icon: academicZone, name: "Academic Zone" },
        { icon: auditorium, name: "Auditorium" },
        { icon: academicZone, name: "Boys Hostel" },
        { icon: auditorium, name: "Canteen" },
        { icon: academicZone, name: "Computer Lab" },
        { icon: auditorium, name: "Girls Hostel" },
        { icon: academicZone, name: "Wifi" },
        { icon: auditorium, name: "Library" },
        { icon: academicZone, name: "Medical Facilities" },
        { icon: auditorium, name: "Class Rooms" },
        { icon: academicZone, name: "Placement" },
        { icon: auditorium, name: "Transport" },
        { icon: academicZone, name: "Seminar Hall" },
        { icon: auditorium, name: "Cafeteria" },
        { icon: academicZone, name: "Sports Facility" },
        { icon: auditorium, name: "Library" },
      ],
    },
  ],
  // leave courseArray right now
  courseArray: [],
  topRecruiters: {
    title: {
      t1: "IIT Madras",
      t2: "Top Recruiters",
      t3: "2023",
    },
    companyLogos: [comp1, comp2, comp3, comp4, comp5],
  },
  brochureSection: {
    text: "Interested in learning more about the Indian Institute of Technology, Madras?",
    buttons: {
      button1: {
        text: "Download Brochure",
        href: "#",
      },
    },
  },
  reviews: {
    title: {
      t1: "IIT Madras",
      t2: "Reviews",
      t3: "",
    },
    overallRating: "4.5",
    individualReviews: [
      {
        title: "College Infrastructure",
        icon: <HiBuildingOffice2 />,
        rating: "4.5",
        basedOn: "456",
      },
      {
        title: "Academics & Faculty",
        icon: <BiSolidInstitution />,
        rating: "3",
        basedOn: "456",
      },
      {
        title: "Facilities",
        icon: <HiBuildingOffice2 />,
        rating: "4.5",
        basedOn: "456",
      },
      {
        title: "Placements & Internships",
        icon: <HiBuildingOffice2 />,
        rating: "4.5",
        basedOn: "456",
      },
      {
        title: "Fees & Scholarships",
        icon: <RiMoneyRupeeCircleFill />,
        rating: "3",
        basedOn: "456",
      },
      {
        title: "Crowd & Campus Life",
        icon: <FaTransgenderAlt />,
        rating: "2",
        basedOn: "456",
      },
      {
        title: "Overall Experience",
        icon: <MdCastForEducation />,
        rating: "4.5",
        basedOn: "456",
      },
    ],
  },
  photoGallery: {
    title: {
      t1: "IIT Madras",
      t2: "Photo Gallery",
      t3: "",
    },
    photos: [c3, c4, c5, c6, c7, c8],
  },
  videoGallery: {
    title: {
      t1: "IIT Madras",
      t2: "Video Gallery",
      t3: "",
    },
    videos: [
      { id: 1, title: "Video 1", videoId: "4-YEBaUXUGo" },
      { id: 2, title: "Video 2", videoId: "4-YEBaUXUGo" },
      { id: 3, title: "Video 3", videoId: "4-YEBaUXUGo" },
    ],
  },
  faqs: {
    title: {
      t1: "",
      t2: "IIT Madras",
      t3: "Frequently Asked Questions",
    },
    faqsQuestionsAndAnswers: [
      {
        id: 1,
        question: "When was the University Established?",
        answer:
          "The Indian Institute of Technology, Madras was established in 1961. The institute was founded by the erstwhile Prime Minister, Shri. Venkatesh Iyengar.",
      },
      {
        id: 2,
        question: "Is the University a Private or Government University",
        answer:
          "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
      },
      {
        id: 3,
        question: "What is the University Affiliation?",
        answer:
          "The Indian Institute of Technology, Madras is affiliated to the University of Madras. The institute is governed by the Government of India. The institute has a status of Government.",
      },
      {
        id: 4,
        question: "How good is the University",
        answer:
          "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
      },
      {
        id: 5,
        question: "What courses does the University Offer?",
        answer:
          "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
      },
    ],
  },
  campusSize: "617 Acres",
  noOfFaculty: "592",
  noOfStudents: "10224",
  avgFee: "95.1k Yearly",
  genderAccepted: "Co-ed",
  studyMode: "Regular, Part-time",
  scholarshipPage: {
    scholarshipDetails: [
      {
        navItem: "Overview",
        title: {
          t1: "About",
          t2: "IIT Madras",
          t3: "Scholarship",
        },
        article: `<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>
          <div class="bg-blue my-5">
          <h6 class="text-xl">This Story also Contains</h6>
          <ul>
          <li>Important Dates</li>
          <li>Important Dates</li>
          <li>Important Dates</li>
          <li>Important Dates</li>
          </ul>
          </div>
          `,
      },
      {
        navItem: "Eligibility Criteria",
        title: {
          t1: "IIT Madras",
          t2: "Scholarship",
          t3: "Eligibility Criteria",
        },
        article:
          "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
        readMoreLink: "#",
        courses: [
          {
            bg: c3,
            name: "B.Tech",
            eligibility:
              "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a minimum of 55% marks (50% for SC/ST candidates) or equivalent grade, and should have studied Mathematics at the 10+2 level or at the Bachelor's level. Additionally, candidates need to qualify for the Joint Admission Test for M.Sc. (JAM) conducted by IITs.",
            fees: "69999",
            duration: "2 Years",
            buttons: {
              button1: { text: "Apply Now", href: "#" },
              button2: { text: "Download Brochure", href: "#" },
            },
          },
          {
            bg: c4,
            name: "M.Tech",
            eligibility:
              "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a minimum of 55% marks (50% for SC/ST candidates) or equivalent grade, and should have studied Mathematics at the 10+2 level or at the Bachelor's level. Additionally, candidates need to qualify for the Joint Admission Test for M.Sc. (JAM) conducted by IITs.",
            fees: "69999",
            duration: "2 Years",
            buttons: {
              button1: { text: "Apply Now", href: "#" },
              button2: { text: "Download Brochure", href: "#" },
            },
          },
          {
            bg: c5,
            name: "Ph.D",
            eligibility:
              "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a minimum of 55% marks (50% for SC/ST candidates) or equivalent grade, and should have studied Mathematics at the 10+2 level or at the Bachelor's level. Additionally, candidates need to qualify for the Joint Admission Test for M.Sc. (JAM) conducted by IITs.",
            fees: "69999",
            duration: "2 Years",
            buttons: {
              button1: { text: "Apply Now", href: "#" },
              button2: { text: "Download Brochure", href: "#" },
            },
          },
          {
            bg: c6,
            name: "MBA",
            eligibility:
              "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a minimum of 55% marks (50% for SC/ST candidates) or equivalent grade, and should have studied Mathematics at the 10+2 level or at the Bachelor's level. Additionally, candidates need to qualify for the Joint Admission Test for M.Sc. (JAM) conducted by IITs.",
            fees: "69999",
            duration: "2 Years",
            buttons: {
              button1: { text: "Apply Now", href: "#" },
              button2: { text: "Download Brochure", href: "#" },
            },
          },
          {
            bg: c7,
            name: "BA",
            eligibility:
              "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a",
            fees: "69999",
            duration: "2 Years",
            buttons: {
              button1: { text: "Apply Now", href: "#" },
              button2: { text: "Download Brochure", href: "#" },
            },
          },
          {
            bg: c8,
            name: "MBA",
            eligibility:
              "The eligibility criteria for pursuing an M.C.A. (Master of Computer Applications) degree at IIT Madras in India are as follows: Candidates must have completed a Bachelor's degree in any discipline from a recognized university with a",
            fees: "69999",
            duration: "2 Years",
            buttons: {
              button1: { text: "Apply Now", href: "#" },
              button2: { text: "Download Brochure", href: "#" },
            },
          },
        ],
      },
      {
        navItem: "Application Process",
        title: {
          t1: "How to Apply for",
          t2: "IIT Madras",
          t3: "Scholarship?",
        },
        article:
          "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
        readMoreLink: "#",
        image: [
          {
            img: scholarship1,
            text: "Scholarship Success, Expert Guidance, Funding, Counselling Support",
          },
        ],
      },
      {
        navItem: "Selection Process",
        title: {
          t1: "IIT Madras",
          t2: "Scholarship",
          t3: "Selection Process",
        },
        article:
          "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
      },
      {
        navItem: "Selection Process",
        title: {
          t1: "IIT Madras",
          t2: "Scholarship",
          t3: "Key Dates",
        },
        article: `<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>
          `,
        table: `
        <table border="1">
  <tr>
    <th>Exams and Events</th>
    <th>Date</th>
  </tr>
  <tr>
    <td>Last Date to Apply for the Scholarship</td>
    <td>January 2, 2025</td>
  </tr>
  <tr>
    <td>Interview Dates</td>
    <td>Between April and June</td>
  </tr>
  <tr>
    <td>Declaration of Selection Results</td>
    <td>June</td>
  </tr>
  <tr>
    <td>Commencement of the Doctoral Programme</td>
    <td>In the month of September/October</td>
  </tr>
</table>
        `,
      },
    ],
    faqs: {
      title: {
        t2: "IIT Madras",
        t3: "Frequently Asked Questions",
      },
      faqsQuestionsAndAnswers: [
        {
          id: 1,
          question: "When was the University Established?",
          answer:
            "The Indian Institute of Technology, Madras was established in 1961. The institute was founded by the erstwhile Prime Minister, Shri. Venkatesh Iyengar.",
        },
        {
          id: 2,
          question: "Is the University a Private or Government University",
          answer:
            "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
        },
        {
          id: 3,
          question: "What is the University Affiliation?",
          answer:
            "The Indian Institute of Technology, Madras is affiliated to the University of Madras. The institute is governed by the Government of India. The institute has a status of Government.",
        },
        {
          id: 4,
          question: "How good is the University",
          answer:
            "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
        },
        {
          id: 5,
          question: "What courses does the University Offer?",
          answer:
            "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
        },
      ],
    },
  },
  isAbroadCollege: false,
  distanceFromAirport: "5.8",
};
