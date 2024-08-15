import {
  Student,
  Certificate,
  GraduationCap,
  section6Bg,
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  p1,
  c1,
  c2,
  c4,
  c3,
  c5,
  c6,
  c7,
  c8,
  exam1,
  abroad1,
  abroad2,
  abroad3,
  abroad4,
  abroad5,
  abroad6,
  au3,
  au2,
  au1,
  collegeLogo,
  user1,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  scholarship1,
  examBg3,
  scLogo,
  abroadBanner,
} from "@/asset";
import { BiSolidInstitution } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaTransgenderAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoHeartCircle } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { TbRuler2Off } from "react-icons/tb";

export const studyAbroadData = {
  homeBanner: {
    title: {
      t1: "Embark on",
      t2: "Your Global",
      t3: "Education Journey",
    },
    text1:
      "Explore Top Universities Worldwide and Transform Your \\nFuture with Expert Guidance",
    button1: {
      text: "Explore Colleges",
      href: "#",
    },
    button2: {
      text: "Schedule Counselling",
      href: "#",
    },
    img: [abroad4, abroad5, abroad6],
    text2: "Get 30% off on every \\n  1st month",
    text3: "Expert Counsellors",
  },
  section2: {
    card1: {
      icon: { url: Certificate },
      title: "2,300+",
      text: "Admissions done",
    },
    card2: {
      icon: { url: Student },
      title: "6,200+",
      text: "Fulfilled dreams",
    },
    card3: {
      icon: { url: GraduationCap },
      title: "5,100+",
      text: "Counselling sessions ",
    },
  },
  partners: {
    title: "Our Knowledge Partners",
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10],
  },
  brochureSection: {
    text: "Discover courses tailored to your aspirations and unlock endless \\nopportunities for growth and success.",
    buttons: {
      button1: {
        text: "Download Brochure",
        href: "#",
      },
    },
  },

  // listing banner
  listingBanner:{
bgImage:abroadBanner,
title:'"Unlock Your Global Potential. Study Abroad."',
img1:user1,
img2:user1,
img3:user1,
text:[
  {
    id: 1,
    icon: PiClockCountdownFill,
    text: "Updated on Nov 17, 2023 14:25 IST"
  },
  {
    id: 2,
    icon: IoHeartCircle,
    text: "Save"
  },
  {
    id: 3,
    icon: BsQuestionCircleFill,
    text: "Ask"
  }
],
buttons:[{text:"Explore More", variant:"blue"}, {text:"Download Brochure", variant:"white"}],

  },
  topAbroadColleges: {
    title: {
      t1: "",
      t2: "Discover",
      t3: "Top Colleges",
    },
    colleges: [
      {
        id: 1,
        bgImage: c1,
        collegeName: "University of Cambridge",
        location: {
          state: "Tamil Nadu",
          city: "England",
          country: "England",
        },
        reviews: {
          title: {
            t1: "IIT Madras",
            t2: "Reviews",
            t3: "",
          },
          totalReviews: "7",
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
        avgFeePerYear: "$ 95.1k Yearly",
        distanceFromAirport: "5.8",
      },
      {
        id: 2,
        bgImage: c2,
        collegeName: "University of Oxford",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: {
          title: {
            t1: "IIT Madras",
            t2: "Reviews",
            t3: "",
          },
          totalReviews: "7",
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
        avgFeePerYear: "$ 95.1k Yearly",
        distanceFromAirport: "5.8",
      },
      {
        id: 3,
        bgImage: c3,
        collegeName: "University of Massachusetts",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: {
          title: {
            t1: "IIT Madras",
            t2: "Reviews",
            t3: "",
          },
          totalReviews: "7",
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
        avgFeePerYear: "$ 95.1k Yearly",
        distanceFromAirport: "5.8",
      },
      {
        id: 4,
        bgImage: c5,
        collegeName: "University of California",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: {
          title: {
            t1: "IIT Madras",
            t2: "Reviews",
            t3: "",
          },
          totalReviews: "7",
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
        avgFeePerYear: "$ 95.1k Yearly",
        distanceFromAirport: "5.8",
      },
      {
        id: 5,
        bgImage: c5,
        collegeName: "University of Cambridge",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: {
          title: {
            t1: "IIT Madras",
            t2: "Reviews",
            t3: "",
          },
          totalReviews: "7",
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
        avgFeePerYear: "$ 95.1k Yearly",
        distanceFromAirport: "5.8",
      },
      {
        id: 6,
        bgImage: c1,
        collegeName: "University of Oxford",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: {
          title: {
            t1: "IIT Madras",
            t2: "Reviews",
            t3: "",
          },
          totalReviews: "7",
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
        avgFeePerYear: "$ 95.1k Yearly",
        distanceFromAirport: "5.8",
      },
      {
        id: 7,
        bgImage: c2,
        collegeName: "University of Massachusetts",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: {
          title: {
            t1: "IIT Madras",
            t2: "Reviews",
            t3: "",
          },
          totalReviews: "7",
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
        avgFeePerYear: "$ 95.1k Yearly",
        distanceFromAirport: "5.8",
      },
      {
        id: 8,
        bgImage: c2,
        collegeName: "University of California",
        location: {
          state: "Tamil Nadu",
          city: "England",
        },
        overallRating: "4.5",
        reviews: {
          title: {
            t1: "IIT Madras",
            t2: "Reviews",
            t3: "",
          },
          totalReviews: "7",
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
        avgFeePerYear: "$ 95.1k Yearly",
        distanceFromAirport: "5.8",
      },
    ],
  },
  banner2: {
    title: {
      t1: "Growth and",
      t2: "Success Stories",
    },
    text: "Discover how our guidance has empowered students to achieve their dreams abroad.",
    text1:
      "Raj transformed his aspirations into reality by securing admission to  MIT. With our  personalized guidance, he navigated the complexities of studying abroad and achieved his dream",
    button: {
      text: "Read More",
      href: "#",
    },
    img: [abroad1, abroad2],
    cards: [
      { userAvatars: [au1, au2, au3], text1: "50K+", text2: "Students" },
      { text1: "35+", text2: "Course" },
      { text1: "56+", text2: "Startups" },
      { text1: "100+", text2: "Language" },
      { text1: "150+", text2: "Professors" },
    ],
  },
  // Admission Process and Assistance
  banner3: {
    title: {
      t1: "Student Admission",
      t2: "Process and",
      t3: "Assistance from us",
    },
    text: "Comprehensive Guidance and Support for a Seamless Admission Process to Your Dream University",
    button: {
      text: "See all our admission",
      href: "#",
    },
    img: abroad3,
    steps: [
      "Fill The Acchawalacollege End to End Form",
      "Our Expert Counsellor will Contact you",
      "Select The Right Counselling Package",
      "Shortlist Colleges And Fill Application Forms",
      "Upload Documents & Pay Fee",
      "Confirm Admission and Claim Gift",
    ],
  },
  banner1: {
    title:
      "Embark on Your Career Journey Today! Connect \\n with Our Expert Counseling Team Now.",
    text1: "Navigate the Path to Success with Our Support",
    button: {
      text: "Schedule  Counselling",
      href: "#",
    },
    bgImg: section6Bg,
  },
  counsellingPackages: {
    title: "Counselling Packages",
    CounsellingPackagesCards: [
      {
        id: 1,
        icon: p1,
        PackageName: "Silver Package",
        isPopular: false,
        price: 11000,
        text1: "Essential guidance to kickstart \\nyour journey",
        list: [
          {
            isInclude: true,
            text: "Personal Counsellor",
          },
          {
            isInclude: true,
            text: "Admission Procedure",
          },
          {
            isInclude: true,
            text: "Lowest Package Seats",
          },
          {
            isInclude: true,
            text: "Budget Based Counselling",
          },
          {
            isInclude: true,
            text: "Detailed College Description",
          },
          {
            isInclude: false,
            text: "Premium College Counseling",
          },
          {
            isInclude: false,
            text: "24x7 Availability via Messaging",
          },
          {
            isInclude: false,
            text: "24x7 Availability via Calling",
          },
          {
            isInclude: false,
            text: "MCI/NTA Updates",
          },
          {
            isInclude: false,
            text: "College Based Analysis",
          },
          {
            isInclude: false,
            text: "Score Based Analysis",
          },
          {
            isInclude: false,
            text: "Management Quota Counseling",
          },
          {
            isInclude: false,
            text: "Fees Negotiation",
          },
        ],
        button: {
          text: "Get Started",
          href: "#",
        },
        styling: {
          border: "border-zinc-300",
          tagBg: "from-zinc-400 to-white",
        },
      },
      {
        id: 2,
        icon: p1,
        PackageName: "Gold Package",
        // isPopular: TbRuler2Off,
        price: 25000,
        text1: "Comprehensive support tailored \\nto your ambitions",
        list: [
          {
            isInclude: true,
            text: "Personal Counsellor",
          },
          {
            isInclude: true,
            text: "Admission Procedure",
          },
          {
            isInclude: true,
            text: "Lowest Package Seats",
          },
          {
            isInclude: true,
            text: "Budget Based Counselling",
          },
          {
            isInclude: true,
            text: "Detailed College Description",
          },
          {
            isInclude: true,
            text: "Premium College Counseling",
          },
          {
            isInclude: true,
            text: "24x7 Availability via Messaging",
          },
          {
            isInclude: false,
            text: "24x7 Availability via Calling",
          },
          {
            isInclude: false,
            text: "MCI/NTA Updates",
          },
          {
            isInclude: false,
            text: "College Based Analysis",
          },
          {
            isInclude: false,
            text: "Score Based Analysis",
          },
          {
            isInclude: false,
            text: "Management Quota Counseling",
          },
          {
            isInclude: false,
            text: "Fees Negotiation",
          },
        ],
        button: {
          text: "Get Started",
          href: "#",
        },
        styling: {
          border: "border-orange-300",
          tagBg: "from-orange-400 to-white",
        },
      },
      {
        id: 3,
        icon: p1,
        PackageName: "Diamond Package",
        isPopular: false,
        price: 55000,
        text1: "Unmatched assistance for your \\nacademic aspirations",
        list: [
          {
            isInclude: true,
            text: "Personal Counsellor",
          },
          {
            isInclude: true,
            text: "Admission Procedure",
          },
          {
            isInclude: true,
            text: "Lowest Package Seats",
          },
          {
            isInclude: true,
            text: "Budget Based Counselling",
          },
          {
            isInclude: true,
            text: "Detailed College Description",
          },
          {
            isInclude: true,
            text: "Premium College Counseling",
          },
          {
            isInclude: true,
            text: "24x7 Availability via Messaging",
          },
          {
            isInclude: false,
            text: "24x7 Availability via Calling",
          },
          {
            isInclude: false,
            text: "MCI/NTA Updates",
          },
          {
            isInclude: false,
            text: "College Based Analysis",
          },
          {
            isInclude: false,
            text: "Score Based Analysis",
          },
          {
            isInclude: false,
            text: "Management Quota Counseling",
          },
          {
            isInclude: false,
            text: "Fees Negotiation",
          },
        ],
        button: {
          text: "Get Started",
          href: "#",
        },
        styling: {
          border: "border-orange-300",
          tagBg: "from-orange-400 to-white",
        },
      },
    ],
  },
  upcomingExams: {
    title: {
      t1: "Abroad",
      t2: "Upcoming",
      t3: "Exams",
    },
    exams: [
      {
        id: 1,
        img: exam1,
        title: "Joint Entrance Exam Advanced (JEE Advanced)",
        studentsParticipation: "63,73,884",
        slug: "/jee-advanced",
        stream: "Engineering",
        level: ["national", "international"],
        mode: ["offline", "online"],
        category: ["JEE MAIN", "JEE ADVANCED"],
        examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        applicationFormDate: {
          startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
          endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        },
        resultAnnounceDate:
          "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        examDetails: [
          {
            navItem: "overview",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Overview",
            },
          },
          {
            navItem: "sample papers",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Sample Papers",
            },
          },
          {
            navItem: "cutoff",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Cutoff",
            },
          },
          {
            navItem: "eligibility",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Eligibility",
            },
          },
          {
            navItem: "application",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Application",
            },
          },
          {
            navItem: "results",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Results",
            },
          },
          {
            navItem: "Exam Pattern",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Exam Pattern",
            },
          },
          {
            navItem: "Preparation Tips",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Preparation Tips",
            },
          },
          {
            navItem: "Answer Key",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Answer Key",
            },
          },
          {
            navItem: "Counselling",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Counselling",
            },
          },
          {
            navItem: "College Predictor",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "College Predictor",
            },
          },
        ],
        button1: {
          text: "Register Now",
          href: "#",
        },
        button2: {
          text: "Get Updates",
          href: "#",
        },
        button3: {
          text: "Download Brochure",
          href: 1,
        },
      },
      {
        id: 2,
        img: exam1,
        title: "Joint Entrance Exam Advanced (JEE Advanced)",
        slug: "/jee-advanced",
        studentsParticipation: "63,73,884",
        stream: "Engineering",
        level: ["national", "international"],
        mode: ["offline", "online"],
        category: ["JEE MAIN", "JEE ADVANCED"],
        examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        applicationFormDate: {
          startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
          endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        },
        resultAnnounceDate:
          "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        examDetails: [
          {
            navItem: "overview",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Overview",
            },
          },
          {
            navItem: "sample papers",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Sample Papers",
            },
          },
          {
            navItem: "cutoff",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Cutoff",
            },
          },
          {
            navItem: "eligibility",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Eligibility",
            },
          },
          {
            navItem: "application",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Application",
            },
          },
          {
            navItem: "results",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Results",
            },
          },
          {
            navItem: "Exam Pattern",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Exam Pattern",
            },
          },
          {
            navItem: "Preparation Tips",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Preparation Tips",
            },
          },
          {
            navItem: "Answer Key",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Answer Key",
            },
          },
          {
            navItem: "Counselling",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Counselling",
            },
          },
          {
            navItem: "College Predictor",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "College Predictor",
            },
          },
        ],
        button1: {
          text: "Register Now",
          href: "#",
        },
        button2: {
          text: "Get Updates",
          href: "#",
        },
        button3: {
          text: "Download Brochure",
          href: 1,
        },
      },
      {
        id: 3,
        img: exam1,
        title: "Joint Entrance Exam Advanced (JEE Advanced)",
        slug: "/jee-advanced",
        studentsParticipation: "63,73,884",
        stream: "Engineering",
        level: ["national", "international"],
        mode: ["offline", "online"],
        category: ["JEE MAIN", "JEE ADVANCED"],
        examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        applicationFormDate: {
          startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
          endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        },
        resultAnnounceDate:
          "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        examDetails: [
          {
            navItem: "overview",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Overview",
            },
          },
          {
            navItem: "sample papers",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Sample Papers",
            },
          },
          {
            navItem: "cutoff",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Cutoff",
            },
          },
          {
            navItem: "eligibility",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Eligibility",
            },
          },
          {
            navItem: "application",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Application",
            },
          },
          {
            navItem: "results",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Results",
            },
          },
          {
            navItem: "Exam Pattern",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Exam Pattern",
            },
          },
          {
            navItem: "Preparation Tips",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Preparation Tips",
            },
          },
          {
            navItem: "Answer Key",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Answer Key",
            },
          },
          {
            navItem: "Counselling",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Counselling",
            },
          },
          {
            navItem: "College Predictor",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "College Predictor",
            },
          },
        ],
        button1: {
          text: "Register Now",
          href: "#",
        },
        button2: {
          text: "Get Updates",
          href: "#",
        },
        button3: {
          text: "Download Brochure",
          href: "#",
        },
      },
      {
        id: 4,
        img: exam1,
        title: "Joint Entrance Exam Advanced (JEE Advanced)",
        slug: "/jee-advanced",
        studentsParticipation: "63,73,884",
        stream: "Engineering",
        level: ["national", "international"],
        mode: ["offline", "online"],
        category: ["JEE MAIN", "JEE ADVANCED"],
        examDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        applicationFormDate: {
          startDate: "Thu Jan 30 2024 14:42:25 GMT+0530 (India Standard Time)",
          endDate: "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        },
        resultAnnounceDate:
          "Thu May 30 2024 14:42:25 GMT+0530 (India Standard Time)",
        examDetails: [
          {
            navItem: "overview",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Overview",
            },
          },
          {
            navItem: "sample papers",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Sample Papers",
            },
          },
          {
            navItem: "cutoff",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Cutoff",
            },
          },
          {
            navItem: "eligibility",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Eligibility",
            },
          },
          {
            navItem: "application",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Application",
            },
          },
          {
            navItem: "results",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Results",
            },
          },
          {
            navItem: "Exam Pattern",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Exam Pattern",
            },
          },
          {
            navItem: "Preparation Tips",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Preparation Tips",
            },
          },
          {
            navItem: "Answer Key",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Answer Key",
            },
          },
          {
            navItem: "Counselling",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "Counselling",
            },
          },
          {
            navItem: "College Predictor",
            title: {
              t1: "",
              t2: "JEE Advanced",
              t3: "College Predictor",
            },
          },
        ],
        button1: {
          text: "Register Now",
          href: "#",
        },
        button2: {
          text: "Get Updates",
          href: "#",
        },
        button3: {
          text: "Download Brochure",
          href: 1,
        },
      },
    ],
  },
};

export const studyAbroadListingPage = {
  bannerSection: {
    title: {
      t1: "Top",
      t2: "Abroad Colleges",
      t3: "2024",
    },
    author: {
      avatar: user1,
      name: "Pankaj Kumar",
      lastUpdated: "MAR 21, 2024 18:39 IST",
    },
    article:
      "<p>Explore the world of global education with our curated list of <strong class='text-blue-500'>Top Abroad Colleges</strong> for 2024. Whether you're aiming for prestigious Ivy League institutions, renowned technical universities, or vibrant cultural hubs, we've got you covered. Our selection highlights the best colleges across the globe, offering exceptional academic programs, cutting-edge research opportunities, and diverse, inclusive environments. Discover the possibilities and take the first step towards an international education that will shape your future.</p>",
    readMoreLink: "#",
  },
  filterBy: {
continent:["Asia", "Africa", "North America", "South America", "Australia", "Europe"],
language:["English", "French", "German", "Hindi", "Korean", "Chinese", "Spanish", "Scottish"],
region:["South Asian", "North Asian", "East Asian", "Western Europe", "Eastern Europe", "Western Africa"],
programType: ["High - School", "Diploma", "Bachelor’s Degree", "Master’s Degree", "PHD"],
experience:["Entry-level", "Mid-Level", "Senior-level"],
value:["Work Life Balance", "Creativity", "Stability", "Teamwork"],
skill:["Coding", "Problem-Solving","Communication", "Writing"],
location:["On-Site", "Hybrid", "On-Site/Hybrid/WFH"],
  },
};

// Single college Details
export const countryData =[ {
  img: user1,
  flag: user1,
  location: "Europe",
  name: "United State of America  (USA)",
  desc: "Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future. Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future.",
  lang: "English",
  avgLivingCost: [40, 60],
  rank: "QS Top 10",
  viewAll: "#", //link
  topUniversities: [
    {
      img: user1,
      title: "Massachusetts Institute of Technology (MIT)",
    },
    {
      img: user1,
      title: "Harvard University",
    },
  ],
  button: { text: "Explore Programs in USA" },
},
{
  img: user1,
  flag: user1,
  location: "Europe",
  name: "United State of America  (USA)",
  desc: "Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future. Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future.",
  lang: "English",
  avgLivingCost: [40, 60],
  rank: "QS Top 10",
  viewAll: "#", //link
  topUniversities: [
    {
      img: user1,
      title: "Massachusetts Institute of Technology (MIT)",
    },
    {
      img: user1,
      title: "Harvard University",
    },
  ],
  button: { text: "Explore Programs in USA" },
},
{
  img: user1,
  flag: user1,
  location: "Europe",
  name: "United State of America  (USA)",
  desc: "Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future. Explore new horizons with a study abroad experience. Immerse yourself in a different culture, broaden your perspective, and gain valuable skills for your future.",
  lang: "English",
  avgLivingCost: [40, 60],
  rank: "QS Top 10",
  viewAll: "#", //link
  topUniversities: [
    {
      img: user1,
      title: "Massachusetts Institute of Technology (MIT)",
    },
    {
      img: user1,
      title: "Harvard University",
    },
  ],
  button: { text: "Explore Programs in USA" },
},   ]

export const abroadColleges = [
  {
    slug: "ucla",
    collegeLogo: { url: collegeLogo },
    breadCrumb: "UCLA",
    bgImage: { url: c1 },
    collegeName: "UCLA- The University of California, Los Angeles",
    description:
      "Located in the vibrant city of Los Angeles, UCLA (University of California, Los Angeles) is renowned for its academic excellence and innovative research programs. With a diverse student body and a wide range. Located in the vibrant city of Los Angeles, UCLA (University of California, Los Angeles) is renowned for its",
    location: {
      state: "",
      city: "Los Angeles",
      country: "USA",
    },
    collegeType: "Government",
    affiliation: ["WASC", "WSCUC"],
    estYear: "1990",
    lastUpdate: "Nov 17, 2023 14:25 IST",
    exam: ["SAT", "ACT"],
    //  don't collegeDetails right now
    collegeDetails: [
      {
        navItem: "overview",
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
              "<p>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>",
            button: {
              button1: { text: "Apply Now", link: "#" },
              button2: { text: "Download Brochure", link: "#" },
            },
            importantLinks: [
              {
                id: 1,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
              {
                id: 2,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
              {
                id: 2,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
            ],
            banner: {
              img: examBg3,
              text: "JEE Main 2024: Paper 2 Result (Out), Cut Off, Toppers List, Counselling Dates",
              href: "#",
            },
            article1: `<p class="bg-blue-100 rounded-lg p-5">JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>`,
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
            article2:
              "<p>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>",
          },
          {
            id: 2,
            title: {
              t1: "",
              t2: "",
              t3: "",
            },
            article:
              "<p>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>",
          },
        ],
      },
      {
        navItem: "sample papers",
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
              "<p>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>",
            button: {
              button1: { text: "Apply Now", link: "#" },
              button2: { text: "Download Brochure", link: "#" },
            },
            importantLinks: [
              {
                id: 1,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
              {
                id: 2,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
              {
                id: 2,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
            ],
          },
          {
            id: 2,
            title: {
              t1: "",
              t2: "",
              t3: "",
            },
            article:
              "<p>JEE Main 2024: NTA has released the JEE Main 2024 session 2 result for paper 2 at jeemain.nta.ac.in. The authority closed the JEE Main 2024 challenge window on May 1, 2024. The provisional JEE Main 2024 answer key for paper 2 has been released on April 30. Candidates can check the JEE Main B.Arch answer key 2024 for session 2 on the official website. Candidates who appeared for the JEE Main exam could raise objections to the answer key from April 30 to May 1. </p>",
          },
          {
            importantLinks: [
              {
                id: 1,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
              {
                id: 2,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
              {
                id: 2,
                title: "Important Links",
                text: "https://nta.ac.in/",
                href: "#",
              },
            ],
          },
        ],
      },
      {
        navItem: "cutoff",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "Cutoff",
        },
      },
      {
        navItem: "eligibility",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "Eligibility",
        },
      },
      {
        navItem: "application",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "Application",
        },
      },
      {
        navItem: "results",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "Results",
        },
      },
      {
        navItem: "Exam Pattern",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "Exam Pattern",
        },
      },
      {
        navItem: "Preparation Tips",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "Preparation Tips",
        },
      },
      {
        navItem: "Answer Key",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "Answer Key",
        },
      },
      {
        navItem: "Counselling",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "Counselling",
        },
      },
      {
        navItem: "College Predictor",
        title: {
          t1: "",
          t2: "JEE Advanced",
          t3: "College Predictor",
        },
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
      totalReviews: "7",
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
    scholarship: {
      title: {
        t1: "Discover",
        t2: "Top Scholarships",
        t3: "in Germany",
      },
      scholarshipsArray: [
        {
          id: 1,
          slug: "Bayer-Foundation",
          logo: { url: scLogo },
          bgImage: { url: scholarship1 },
          title: "Bayer Foundation",
          awardedTo:
            "International students pursuing masters or PhD in German Universities ",
          date: "31st August , 2024",
          amount: "$10,000",
          country: "United States",
          scholarshipType: ["merit-based", "Need-based"],
          eligibility: ["age", "Income"],
          applicationStatus: "Open",
          provider: ["Government"],
          noOfScholarShipAvailable: "10",
          conductedBy:
            "University College Cork [UCC] and Government of Ireland",
          course: ["sports", "Creative Arts"],
          IsInternationalAllowed: true,
          sequence: "1",
          isTop: true,
          topSequence: "1",
        },
        {
          id: 2,
          slug: "Bayer-Foundation",
          logo: { url: scLogo },
          bgImage: { url: scholarship1 },
          title: "Bayer Foundation",
          awardedTo:
            "International students pursuing masters or PhD in German Universities ",
          date: "31st August , 2024",
          amount: "$10,000",
          country: "United States",
          scholarshipType: ["merit-based", "Need-based"],
          eligibility: ["age", "Income"],
          applicationStatus: "Open",
          provider: ["Government"],
          noOfScholarShipAvailable: "10",
          conductedBy:
            "University College Cork [UCC] and Government of Ireland",
          course: ["sports", "Creative Arts"],
          IsInternationalAllowed: true,
          sequence: "2",
          isTop: true,
          topSequence: "1",
        },
        {
          id: 3,
          slug: "Bayer-Foundation",
          logo: { url: scLogo },
          bgImage: { url: scholarship1 },
          title: "Bayer Foundation",
          awardedTo:
            "International students pursuing masters or PhD in German Universities ",
          date: "31st August , 2024",
          amount: "$10,000",
          country: "United States",
          scholarshipType: ["merit-based", "Need-based"],
          eligibility: ["age", "Income"],
          applicationStatus: "Open",
          provider: ["Government"],
          noOfScholarShipAvailable: "10",
          conductedBy:
            "University College Cork [UCC] and Government of Ireland",
          course: ["sports", "Creative Arts"],
          IsInternationalAllowed: true,
          sequence: "1",
          isTop: true,
          topSequence: "1",
        },
        {
          id: 4,
          slug: "Bayer-Foundation",
          logo: { url: scLogo },
          bgImage: { url: scholarship1 },
          title: "Bayer Foundation",
          awardedTo:
            "International students pursuing masters or PhD in German Universities ",
          date: "31st August , 2024",
          amount: "$10,000",
          country: "United States",
          scholarshipType: ["merit-based", "Need-based"],
          eligibility: ["age", "Income"],
          applicationStatus: "Open",
          provider: ["Government"],
          noOfScholarShipAvailable: "10",
          conductedBy:
            "University College Cork [UCC] and Government of Ireland",
          course: ["sports", "Creative Arts"],
          IsInternationalAllowed: true,
          sequence: "1",
          isTop: true,
          topSequence: "1",
        },
        {
          id: 5,
          slug: "Bayer-Foundation",
          logo: { url: scLogo },
          bgImage: { url: scholarship1 },
          title: "Bayer Foundation",
          awardedTo:
            "International students pursuing masters or PhD in German Universities ",
          date: "31st August , 2024",
          amount: "$10,000",
          country: "United States",
          scholarshipType: ["merit-based", "Need-based"],
          eligibility: ["age", "Income"],
          applicationStatus: "Open",
          provider: ["Government"],
          noOfScholarShipAvailable: "10",
          conductedBy:
            "University College Cork [UCC] and Government of Ireland",
          course: ["sports", "Creative Arts"],
          IsInternationalAllowed: true,
          sequence: "1",
          isTop: true,
          topSequence: "1",
        },
      ],
    },
    campusSize: "617 Acres",
    noOfFaculty: "592",
    noOfStudents: "10224",
    avgFeePerYear: "95.1k Yearly",
    avgFeePerSem: "$4.8k",
    avgPackage: "$79.8K",
    genderAccepted: "Co-ed",
    studyMode: "Regular, Part-time",
    isAbroadCollege: false,
    collegeSequence: 1,
    isTopCollege: true,
    topCollegeSequence: 2,
    distanceFromAirport: "5.8",
    tag: {
      sequence: 1,
      tagName: "NRIF",
    },
    banner1: {
      title:
        "Embark on Your Career Journey Today! Connect \\n with Our Expert Counseling Team Now.",
      text1: "Navigate the Path to Success with Our Support",
      button: {
        text: "Schedule  Counselling",
        href: "#",
      },
      bgImg: { url: section6Bg },
    },
  },
];
