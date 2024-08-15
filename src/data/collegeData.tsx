import {
  academicZone,
  auditorium,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  scholarship1,
  user1,
} from "@/asset";
import { BiSolidInstitution } from "react-icons/bi";
import { FaTransgenderAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdCastForEducation } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

export const collegePages = {
  bannerSection: {
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
  },
  filterBy: {
    stream: [
      "Engineering",
      "Business",
      "Arts",
      "Science",
      "Commerce",
      "Management",
      "Law",
      "Medical",
    ],
    course: [
      "Computer Science",
      "Electronics",
      "Mechanical",
      "Civil",
      "Chemical",
      "Chemistry",
      "Architecture",
      "Biotechnology",
      "Agriculture",
    ],
    courseDuration: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    state: [
      "Tamil Nadu",
      "Karnataka",
      "Kerala",
      "Andhra Pradesh",
      "Telangana",
      "Maharashtra",
      "Gujarat",
      "Rajasthan",
    ],
    city: ["faridabad", "bhiwani", "Hisar", "delhi", "sirsa"],
    collegeType: ["Government", "Private", "Semi-Private", "Foriegn"],
    collegeCategory: [
      "State University",
      "Private University",
      "Semi-Private University",
      "Foriegn University",
    ],
    affiliation: [
      "AICTE",
      "NITI Aayog",
      "NIRF",
      "SCHOLARSHIP",
      "CITYUNION",
      "NDAI",
      "NITI Aayog",
      "NIRF",
      "SCHOLARSHIP",
      "CITYUNION",
      "NDAI",
    ],
    gender: ["Co-ed", "Boys", "Girls"],
    ranking: [
      "Top 10",
      "Top 20",
      "Top 30",
      "Top 40",
      "Top 50",
      "Top 60",
      "Top 70",
      "Top 80",
      "Top 90",
      "Top 100",
    ],
    exam: ["JEE Adv", "JEE Main", "CAT", "CET", "SDR", "DRY", "DRB", "GATE"],
    avgFeePerYear: [
      "1-3",
      "3-5",
      "5-8",
      "8-10",
      "10-12",
      "12-15",
      "15-20",
      "20-25",
    ],
    programType: ["Full-Time", "Part-Time", "Distance", "Online", "Hybrid"],
  },
  // Don't use for backend 
  CollegesDataArray: [
    {
      id: 1,
      img: c2,
      name: "IIT Madras - Indian Institute of Technology ",
      slug: "/iit-madras",
      stream: "Engineering",
      duration: "4 years",
      avgFeePerYear: "1-3",
      state: "Tamil Nadu",
      city: "Chennai",
      course: "Computer Science",
      programType: "Full-Time",
      collegeType: "Government",
      collegeCategory: "State University",
      affiliation: "AICTE",
      gender: "Co-ed",
      ranking: "Top 10",
      exam: "JEE Adv, CAT",
      rating: 4.5,
      reviews: 7,
      package: "16.5",
      desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
      navbar: [
        "Dates",
        "Admission",
        "Placement",
        "Courses",
        "Cut Off ",
        "Facilities",
      ],
      button1: {
        text: "Apply Now",
        link: "#",
      },
      button2: {
        text: "Download Brochure",
        link: "#",
      },
      tag: {
        text: "NIRF",
        tagNo: 1,
      },
    },
    {
      id: 2,
      name: "XYZ College",
      link: "#",
      img: c2,
      stream: "Medical",
      duration: "5 years",
      avgFeePerYear: "$15,000",
      state: "New York",
      city: "New York City",
      course: "Medicine",
      programType: "Part-Time",
      collegeType: "Private",
      collegeCategory: "Research University",
      affiliation: "XYZ Medical Association",
      gender: "Mixed",
      ranking: "Top 20",
      exam: "MCAT",
      rating: 4.5,
      reviews: 7,
      package: "16.5",
      desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
      navbar: [
        "Dates",
        "Admission",
        "Placement",
        "Courses",
        "Cut Off ",
        "Facilities",
      ],
      button1: {
        text: "Apply Now",
        link: "#",
      },
      button2: {
        text: "Download Brochure",
        link: "#",
      },
      tag: {
        text: "NIRF",
        tagNo: 1,
      },
    },
    {
      id: 3,
      img: c2,
      name: "Sunset University",
      link: "#",
      stream: "Business",
      duration: "3 years",
      avgFeePerYear: "$12,000",
      state: "Texas",
      city: "Houston",
      course: "Finance",
      programType: "Online",
      collegeType: "Public",
      collegeCategory: "State University",
      affiliation: "Sunset Board of Education",
      gender: "Co-ed",
      ranking: "Top 30",
      exam: "GMAT",
      rating: 4.5,
      reviews: 7,
      package: "16.5",
      desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
      navbar: [
        "Dates",
        "Admission",
        "Placement",
        "Courses",
        "Cut Off ",
        "Facilities",
      ],
      button1: {
        text: "Apply Now",
        link: "#",
      },
      button2: {
        text: "Download Brochure",
        link: "#",
      },
      tag: {
        text: "NIRF",
        tagNo: 1,
      },
    },
    {
      id: 4,
      img: c2,
      name: "Sunset University",
      link: "#",
      stream: "Business",
      duration: "3 years",
      avgFeePerYear: "$12,000",
      state: "Texas",
      city: "Houston",
      course: "Finance",
      programType: "Online",
      collegeType: "Public",
      collegeCategory: "State University",
      affiliation: "Sunset Board of Education",
      gender: "Co-ed",
      ranking: "Top 30",
      exam: "GMAT",
      rating: 4.5,
      reviews: 7,
      package: "16.5",
      desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
      navbar: [
        "Dates",
        "Admission",
        "Placement",
        "Courses",
        "Cut Off ",
        "Facilities",
      ],
      button1: {
        text: "Apply Now",
        link: "#",
      },
      button2: {
        text: "Download Brochure",
        link: "#",
      },
      tag: {
        text: "NIRF",
        tagNo: 1,
      },
    },
    {
      id: 5,
      img: c2,
      name: "Sunset University",
      link: "#",
      stream: "Business",
      duration: "3 years",
      avgFeePerYear: "$12,000",
      state: "Texas",
      city: "Houston",
      course: "Finance",
      programType: "Online",
      collegeType: "Public",
      collegeCategory: "State University",
      affiliation: "Sunset Board of Education",
      gender: "Co-ed",
      ranking: "Top 30",
      exam: "GMAT",
      rating: 4.5,
      reviews: 7,
      package: "16.5",
      desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
      navbar: [
        "Dates",
        "Admission",
        "Placement",
        "Courses",
        "Cut Off ",
        "Facilities",
      ],
      button1: {
        text: "Apply Now",
        link: "#",
      },
      button2: {
        text: "Download Brochure",
        link: "#",
      },
      tag: {
        text: "NIRF",
        tagNo: 1,
      },
    },
  ],
  faqs: {
    title: {
      t1: "IIT Madras",
      t2: "Frequently Asked Questions",
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
};

export const CollegesArray = [
  {
    id: 1,
    collegeName: "IIT Madras - Indian Institute of Technology ",
    collegeLogo: "image",
    bannerImage: "image",
    slug: "/iit-madras",
    collegePhotos: ["image1", "image2", "image3"],
    collegeOfficialLink: "https://www.iitmadras.ac.in/",
    stream: ["Engineering", "Business"],
    location: {
      state: "Tamil Nadu",
      city: "Chennai",
      country: "India",
      pincode: "600001",
    },
    courseAvailable: [
      "Computer Science",
      "Chemical Engineering",
      "Mechanical Engineering",
    ],
    collegeType: "Government",
    affiliations: ["AICTE", "NIRF"],
    brochureDownload: "https://www.iitmadras.ac.in/",
    estYear: "1990",
    avgFeePerYear: "1-3 LPA",
    programType: ["Full-Time", "PartTime"],
    campusSize: "617 Acres",
    noOfFaculty: "592",
    noOfStudents: "10224",
    avgFee: "95.1k Yearly",
    genderAccepted: "Co-ed",
    studyMode: ["Regular", "Part-time", "online"],
    ranking: "10",
    exam: ["JEE Adv", "CAT"],
    desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
    gender: "Co-ed",
    displaySequence: "1",
    isTopCollege: true,
    topCollegeSequence: "1",
    isFeatured: true,
    featuredSequence: "1",
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
    courses: [], // reusable
    news: [], // reusable
    blogs: [], // reusable
    review: {
      // reusable
      userDetails: {
        name: "Shri. Venkatesh Iyengar",
        email: "xZUeh@example.com",
      },
    },
    reviewsComponent: {
      // reusable
      likes: {
        title: "IIT Madras",
      },
      disLikes: {
        title: "IIT Madras",
      },
    },
    ratings: {
      title: {
        t1: "IIT Madras",
        t2: "Ratings",
      },
      overallRating: "4.5",
      individualRatings: [
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
    seo: {
      title: "IIT Madras",
      ogTitle: "IIT Madras",
      desc: "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
      ogDesc:
        "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
      canonicalUrl: "https://www.iitmadras.ac.in/",
      ogUrl: "https://www.iitmadras.ac.in/",
      favicon: "https://www.iitmadras.ac.in/favicon.ico",
      faviconAltText: "IIT Madras",
    },
    avgPackage: "16.5 LPA",
    tag: {
      text: "NIRF",
      tagNo: 1,
    },
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
    collegeDetails: [
      {
        navItem: "Overview",
        sections: [
          {
            id: 1,
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
            id: 2,
            title: {
              t1: "",
              t2: "Overview",
              t3: "2024",
            },
            article:
              "<p><strong>Indian Institute of Technologies, National Institute or Technologies and Indian Institutes or Information Technology</strong> are considered to be the best Engineering Colleges in India. Engineering is likewise one of the most logically predominant fields of choice in India. Pretty much every science student has a fantasy to turn into a successful engineer. However, It is not easy for engineering aspirants to select the right engineering college in India. Here Is the following information regarding the Top Engineering Colleges in India for engineering aspirants...</p>",
            readMoreLink: "#",
          },
        ],
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
    photoGallery: {
      title: {
        t1: "IIT Madras",
        t2: "Photo Gallery",
      },
      photos: [c3, c4, c5, c6, c7, c8],
    },
    videoGallery: {
      title: {
        t1: "IIT Madras",
        t2: "Video Gallery",
      },
      videos: [
        { id: 1, title: "Video 1", videoId: "4-YEBaUXUGo", thumbnail: "" },
        { id: 2, title: "Video 2", videoId: "4-YEBaUXUGo", thumbnail: "" },
        { id: 3, title: "Video 3", videoId: "4-YEBaUXUGo", thumbnail: "" },
      ],
    },
    // reusable
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
    lastUpdate: "Nov 17, 2023 14:25 IST",
  },
];
