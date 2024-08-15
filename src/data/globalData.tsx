import {
  logo,
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
  c1,
  b1,
  b2,
  b3,
  user1,
  testimonialBg,
  co1,
  co2,
  co3,
  au1,
  au2,
  au3,
  exam1,
  examPaper,
  collegeLogo,
  examBg3,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  scLogo,
  scholarship1,
  section6Bg,
  building,
  Student,
  community,
  academicZone,
  auditorium,
  c2,
} from "@/asset";
import { BiSolidInstitution } from "react-icons/bi";
import { CiCalendar, CiStar } from "react-icons/ci";
import { FaTransgenderAlt, FaUniversity } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import {
  MdCastForEducation,
  MdOutlineFileDownload,
  MdOutlineHomeRepairService,
} from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

export const global = {
  header: {
    logo: logo,
    href: "/",

    navItems: [
      {
        id: 1,
        label: "Colleges",
        href: "/colleges",
        subNav: [
          // {
          //   id: 21,
          //   label: "courses1",
          //   href: "#",
          // },
        ],
      },
      {
        id: 2,
        label: "Courses",
        href: "/courses",
        subNav: [],
      },
      {
        id: 3,
        label: "Exams",
        href: "/exams",
        subNav: [],
      },
      {
        id: 4,
        label: "Study Abroad",
        href: "/study-abroad",
        subNav: [],
      },
      {
        id: 5,
        label: "Latest Updates",
        href: "/latest-updates",
        subNav: [],
      },
      {
        id: 6,
        label: "More",
        href: "/more",
        subNav: [],
      },
    ],
  },
  partners: {
    title: "Our Knowledge Partners",
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10],
  },
  footer: {
    logo: logo,
    newLetterTitle: "Subscribe to Our Newsletter!",
    contactDetails: {
      contactNo: "+1 (999) 888-77-66",
      email: "info@acchawalacollege.com",
      location:
        "#1701, B Tower, World \nTrade Tower, Sector - 16, \nNoida, U.P - 201301",
    },
    socials: {
      facebook: "https://www.facebook.com/acchawalacollege",
      twitter: "https://twitter.com/acchawalacollege",
      instagram: "https://www.instagram.com/acchawalacollege/",
      linkedin: "https://www.linkedin.com/school/acchawalacollege/",
      youtube: "https://www.youtube.com/c/acchawalacollege",
    },
    copyrightText: "Copyrights © 2024 Acchawalacollege. All rights reserved.",
    list1: {
      title: "Quick Links",
      links: [
        {
          id: 1,
          label: "Home",
          href: "/",
        },
        {
          id: 2,
          label: "About",
          href: "/about",
        },
        {
          id: 3,
          label: "Contact Us",
          href: "/contact-us",
        },
        {
          id: 4,
          label: "Work with Us",
          href: "/work-with-us",
        },
        {
          id: 5,
          label: "Testimonials",
          href: "/testimonials",
        },
        {
          id: 6,
          label: "Blogs",
          href: "/blogs",
        },
        {
          id: 7,
          label: "News",
          href: "/news",
        },
      ],
    },
    list2: {
      title: "Useful Links",
      links: [
        {
          id: 1,
          label: "Education Loan",
          href: "/education-loan",
        },
        {
          id: 2,
          label: "Courses",
          href: "/courses",
        },
        {
          id: 3,
          label: "MBBS India",
          href: "/mbbs-india",
        },
        {
          id: 4,
          label: "MBBS Abroad",
          href: "/mbbs-abroad",
        },
        {
          id: 5,
          label: "Top Para Medical Colleges",
          href: "/top-para-medical-colleges",
        },
        {
          id: 6,
          label: "Top MBA Colleges",
          href: "/top-mba-colleges",
        },
        {
          id: 7,
          label: "B.Tech",
          href: "/b-tech",
        },
        {
          id: 8,
          label: "Explore Exams",
          href: "/explore-exams",
        },
      ],
    },
    list3: {
      title: "Pages",
      links: [
        {
          id: 1,
          label: "Application Form",
          href: "/application-form",
        },
        {
          id: 2,
          label: "Counselling Packages",
          href: "/counselling-packages",
        },
        {
          id: 3,
          label: "Study Abroad",
          href: "/study-abroad",
        },
        {
          id: 4,
          label: "Latest Updates",
          href: "/latest-updates",
        },
      ],
    },
  },
  topColleges: {
    title: {
      t1: "",
      t2: "Discover",
      t3: "Top Colleges",
    },
    colleges: [
      {
        slug: "upgrad-tech",
        id: 1,
        stream: "MBA",
        collegeName: "upGrad Tech",
        icon: <FaUniversity />,
        img: c1,
        title: "UpGrad",
        text1: "Dual Specialisation",
        degreeType: {
          name: "Masters Degree",
          icon: <CiStar />,
        },
        duration: {
          name: "15 Months",
          icon: <CiCalendar />,
        },
        noOfSpecializations: {
          no: 13,
          icon: <MdOutlineHomeRepairService />,
        },
        button1: {
          icon: "",
          text: "View Program",
          href: "#",
        },
        button2: {
          icon: <MdOutlineFileDownload />,
          text: "Syllabus",
          href: "#",
        },
      },
      {
        id: 2,
        slug: "upgrad-tech",
        stream: "MBA",
        collegeName: "upGrad Tech",
        icon: <FaUniversity />,
        img: c1,
        title: "Upgrad",
        text1: "Dual Specialization",
        degreeType: {
          name: "Masters Degree",
          icon: <CiStar />,
        },
        duration: {
          name: "15 Months",
          icon: <CiCalendar />,
        },
        noOfSpecializations: {
          no: 13,
          icon: <MdOutlineHomeRepairService />,
        },
        button1: {
          icon: "",
          text: "View Program",
          href: "#",
        },
        button2: {
          icon: <MdOutlineFileDownload />,
          text: "Syllabus",
          href: "#",
        },
      },
      {
        id: 3,
        slug: "upgrad-tech",
        stream: "MBA",
        collegeName: "upGrad Tech",
        icon: <FaUniversity />,
        img: c1,
        title: "Upgrad",
        text1: "Dual Specialisation",
        degreeType: {
          name: "Masters Degree",
          icon: <CiStar />,
        },
        duration: {
          name: "15 Months",
          icon: <CiCalendar />,
        },
        noOfSpecializations: {
          no: 13,
          icon: <MdOutlineHomeRepairService />,
        },
        button1: {
          icon: "",
          text: "View Program",
          href: "#",
        },
        button2: {
          icon: <MdOutlineFileDownload />,
          text: "Syllabus",
          href: "#",
        },
      },
      {
        id: 4,
        slug: "upgrad-tech",
        stream: "MBA",
        collegeName: "upGrad Tech",
        icon: <FaUniversity />,
        img: c1,
        title: "Upgrad",
        text1: "Dual Specialisation",
        degreeType: {
          name: "Masters Degree",
          icon: <CiStar />,
        },
        duration: {
          name: "15 Months",
          icon: <CiCalendar />,
        },
        noOfSpecializations: {
          no: 13,
          icon: <MdOutlineHomeRepairService />,
        },
        button1: {
          icon: "",
          text: "View Program",
          href: "#",
        },
        button2: {
          icon: <MdOutlineFileDownload />,
          text: "Syllabus",
          href: "#",
        },
      },
    ],
  },
  topCourses: {
    title: {
      t1: "",
      t2: "Discover",
      t3: "Top Courses",
    },
    courses: [
      {
        id: 1,
        slug: "acchawala",
        stream: "MBA",
        bg: co1,
        teacherAvatar: user1,
        teacherName: "Dr. Pankaj Kumar",
        teacherRole: "Teacher",
        designation: "MBA Specialist and Director of Admission",

        title: "Acchawala",
        stars: 4.5,
        courseDetails: {
          noOfAvailableCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          coursesPrice: {
            fullTime: "20000",
            partTime: "10000",
          },
        },
        summery:
          "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
        button: {
          text: "Learn More",
        },
      },
      {
        id: 2,
        stream: "MBA",
        slug: "acchawala",
        bg: co2,
        teacherAvatar: au2,
        teacherName: "Andrew Garfield",
        teacherRole: "Teacher",
        designation: "MBA Specialist and Director of Admission",

        title: "Acchawala",
        stars: 4.5,
        courseDetails: {
          noOfAvailableCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          coursesPrice: {
            fullTime: "20000",
            partTime: "10000",
          },
        },
        summery:
          "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
        button: {
          text: "Learn More",
        },
      },
      {
        id: 3,
        stream: "MBA",
        slug: "acchawala",
        bg: co3,
        teacherAvatar: au3,
        teacherName: "Andrew Garfield",
        teacherRole: "Teacher",
        designation: "MBA Specialist and Director of Admission",

        title: "Acchawala",
        stars: 4.5,
        courseDetails: {
          noOfAvailableCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          coursesPrice: {
            fullTime: "20000",
            partTime: "10000",
          },
        },
        summery:
          "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
        button: {
          text: "Learn More",
        },
      },
      {
        id: 4,
        stream: "MBA",
        slug: "acchawala",
        bg: co1,
        teacherAvatar: au1,
        teacherName: "Andrew Garfield",
        teacherRole: "Teacher",
        designation: "MBA Specialist and Director of Admission",

        title: "Acchawala",
        stars: 4.5,
        courseDetails: {
          noOfAvailableCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          coursesPrice: {
            fullTime: "20000",
            partTime: "10000",
          },
        },
        summery:
          "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
        button: {
          text: "Learn More",
        },
      },
    ],
  },
  upcomingExams: {
    title: {
      t1: "",
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
  previousYearPapers: {
    title: {
      t1: "",
      t2: "Top JEE Main",
      t3: "Previous Year Paper",
    },
    filterBy: {
      category: [
        "JEE MAIN",
        "NEET",
        "CAT",
        "GATE",
        "CLAT",
        "JEE ADVANCED",
        "KCET",
        "GRE",
        "TOEFL",
        "IELTS",
        "GMAT",
      ],
    },
    papers: [
      {
        id: "1",
        title: "JEE Main 2024 Mathematics Question Paper April 8 Shift 1",
        href: "#",
        img: examPaper,
        category: "JEE MAIN",
      },
      {
        id: "2",
        title: "JEE Main 2024 Mathematics Question Paper April 8 Shift 1",
        href: "#",
        img: examPaper,
        category: "JEE MAIN",
      },
      {
        id: "3",
        title: "JEE MAIN 2024 Mathematics Question Paper April 8 Shift 1",
        href: "#",
        img: examPaper,
        category: "JEE MAIN",
      },
      {
        id: "4",
        title: "JEE MAIN 2024 Mathematics Question Paper April 8 Shift 1",
        href: "#",
        img: examPaper,
        category: "JEE MAIN",
      },
    ],
  },
  BlogsAndOthers: {
    filterBy: [
      {
        id: 1,
        category: "articles",
      },
      {
        id: 2,
        category: "blog",
      },
      {
        id: 3,
        category: "news",
      },
    ],
    cardsContent: [
      {
        id: 1,
        img: b1,
        tag: "Study abroad",
        category: ["all", "articles"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 2,
        img: b2,
        tag: "Study abroad",
        category: ["all", "articles"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 3,
        img: b3,
        tag: "Study abroad",
        category: ["all", "articles"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 4,
        img: b2,
        tag: "Study abroad",
        category: ["all", "blog"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 5,
        img: b3,
        tag: "Study abroad",
        category: ["all", "blog"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 6,
        img: b3,
        tag: "Study abroad",
        category: ["all", "news"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
      {
        id: 7,
        img: b3,
        tag: "Study abroad",
        category: ["all", "boards"],
        date: "June 28, 2024",
        shares: "1K Shares",
        author: {
          name: "Joanna Wllick",
          avatar: b1,
        },
        title: "Integration of AI on this Acchawala College",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus maecenas pretium lectus sit ut ullamcorper massa. Id adipiscing faucibus dictum vitae. Pellentesque urna a pretium sed. Volutpat sem habitant faucibus pharetra dui.",
        button: {
          label: "View Post",
          href: "#",
        },
      },
    ],
  },
  testimonialsSection: {
    title: {
      t1: "Student",
      t2: "Testimonials",
    },
    text1: "Discover Success Stories \nfrom Our Satisfied Students",
    bgImg: testimonialBg,
    testimonials: [
      {
        id: "1",
        userName: "Pankaj",
        userAvatar: user1,
        college: "MBA, IIM Ahmedabad",
        comment:
          "Thanks to the guidance I received from this platform, I not only found the perfect college but also gained invaluable insights into the admission process. Highly recommended!",
        storyVideoLink: "#",
      },
      {
        id: "2",
        userName: "Aman Sherawat",
        userAvatar: user1,
        college: "B.tech, IIT Delhi",
        comment:
          "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
        storyVideoLink: "#",
      },
      {
        id: "3",
        userName: "Karan Gill",
        userAvatar: user1,
        college: "B.tech, IIT Delhi",
        comment:
          "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
        storyVideoLink: "#",
      },
      {
        id: "4",
        userName: "Aman Gill",
        userAvatar: user1,
        college: "B.tech, IIT Delhi",
        comment:
          "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
        storyVideoLink: "#",
      },
    ],
  },
};

// Single college Details
export const colleges = [
  {
    id: "1",
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
    //  See Below for tabsSections
    tabsSections: [],
    // leave courseArray right now
    courseArray: [],
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

export const tabsSections = [
  {
    navItem: "overview",
    sections: [
      {
        id: 1,
        starRating: [
          { star: 5, percentage: 90 },
          { star: 4, percentage: 73 },
          { star: 3, percentage: 44 },
          { star: 2, percentage: 75 },
          { star: 1, percentage: 30 },
        ],
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
        collegereviews: [
          {
            id: 1,
            title: "A Brief About Manipal University",
            author: "Akshat",
            date: "March 25, 2024",
            overallRating: 4,
            content: {
              overall:
                "It is one of the top IT colleges in India. It is a place where you can compete with a lot of competitors like you. It provides a great academic environment.",
              placement:
                "No need to worry about placements because every small to international company visits this institute for placements and the average package is 17 - 20 LPA.",
              infrastructure:
                "The overall college contains a main academic building along with a large playground, a canteen and hostels. The buildings are so nicely designed and it is very attractive.",
              faculty:
                "The faculty is very supportive, interactive and highly qualified. They are very helpful and always stand with students to help them. They also support us mentally sometimes.",
              hostel:
                "Hostels are much facilitating. Rooms are given with a fan, a shelf, an almirah, a bed and a study table and chair. The cleanliness is also not bad. The washrooms are available in each individual room.",
            },
            ratings: {
              placement: 4,
              infrastructure: 4,
              faculty: 4,
              hostel: 4,
            },
          },
          {
            id: 2,
            title: "My Experience at IIT Bombay",
            author: "Priya",
            date: "April 2, 2024",
            overallRating: 5,
            content: {
              overall:
                "IIT Bombay is a world-class institution that offers unparalleled opportunities for learning and growth. The academic rigor and research facilities are exceptional.",
              placement:
                "The placement cell is highly efficient, with top companies visiting regularly. Many students secure excellent positions or opt for higher studies abroad.",
              infrastructure:
                "The campus is vast and beautiful, with state-of-the-art laboratories, libraries, and sports facilities. The hostels are comfortable and well-maintained.",
              faculty:
                "The professors are brilliant minds in their fields, always encouraging critical thinking and innovation. They are approachable and supportive of student initiatives.",
              hostel:
                "Hostel life at IIT Bombay is an integral part of the experience. The rooms are spacious, and the community atmosphere fosters lifelong friendships and collaborations.",
            },
            ratings: {
              placement: 5,
              infrastructure: 5,
              faculty: 5,
              hostel: 4,
            },
          },
          {
            id: 3,
            title: "Delhi University: A Hub of Diversity",
            author: "Rahul",
            date: "March 30, 2024",
            overallRating: 4,
            content: {
              overall:
                "Delhi University offers a vibrant academic environment with a diverse student body. It's known for its excellent humanities and commerce programs.",
              placement:
                "While placement opportunities vary by college within DU, many reputed companies recruit from here. The alumni network is strong and helpful.",
              infrastructure:
                "The infrastructure quality depends on the specific college, but generally, the facilities are good. Some colleges have beautiful, historic campuses.",
              faculty:
                "Most faculty members are well-qualified and passionate about teaching. They often encourage students to think critically and engage in discussions.",
              hostel:
                "Not all colleges offer hostel facilities, but those that do provide a good living environment. However, competition for hostel seats can be high.",
            },
            ratings: {
              placement: 4,
              infrastructure: 3,
              faculty: 4,
              hostel: 3,
            },
          },
        ],

        chartData: {
                    placementData: {
            labels: ["2023", "2022", "2021", "2020", "2019", "2018", "2017"],
            data: [400, 200, 150, 250, 100, 75, 50],
          },
          packageData: {
            highestPackage: "1.98 Cr",
            averagePackage: "1 Cr",
            highestPackagePercentage: 80,
            averagePackagePercentage: 33,
          },

          companyDistribution: [
            { name: "TCL", percentage: 25, color: "bg-green-600" },
            { name: "INTEL", percentage: 23, color: "bg-blue-600" },
            { name: "AMAZON", percentage: 22, color: "bg-yellow-700" },
            { name: "MICROSOFT", percentage: 21, color: "bg-red-300" },
            { name: "GOOGLE", percentage: 26, color: "bg-purple-400" },
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
        topCourses2: {
          title: {
            t1: "",
            t2: "Discover",
            t3: "Top Colleges",
          },
          colleges: [
            {
              slug: "upgrad-tech",
              id: 1,
              stream: "MBA",
              collegeName: "upGrad Tech",
              icon: <FaUniversity />,
              img: c1,
              title: "UpGrad",
              text1: "Dual Specialisation",
              degreeType: {
                name: "Masters Degree",
                icon: <CiStar />,
              },
              duration: {
                name: "15 Months",
                icon: <CiCalendar />,
              },
              noOfSpecializations: {
                no: 13,
                icon: <MdOutlineHomeRepairService />,
              },
              button1: {
                icon: "",
                text: "View Program",
                href: "#",
              },
              button2: {
                icon: <MdOutlineFileDownload />,
                text: "Syllabus",
                href: "#",
              },
            },
            {
              id: 2,
              slug: "upgrad-tech",
              stream: "MBA",
              collegeName: "upGrad Tech",
              icon: <FaUniversity />,
              img: c1,
              title: "Upgrad",
              text1: "Dual Specialization",
              degreeType: {
                name: "Masters Degree",
                icon: <CiStar />,
              },
              duration: {
                name: "15 Months",
                icon: <CiCalendar />,
              },
              noOfSpecializations: {
                no: 13,
                icon: <MdOutlineHomeRepairService />,
              },
              button1: {
                icon: "",
                text: "View Program",
                href: "#",
              },
              button2: {
                icon: <MdOutlineFileDownload />,
                text: "Syllabus",
                href: "#",
              },
            },
            {
              id: 3,
              slug: "upgrad-tech",
              stream: "MBA",
              collegeName: "upGrad Tech",
              icon: <FaUniversity />,
              img: c1,
              title: "Upgrad",
              text1: "Dual Specialisation",
              degreeType: {
                name: "Masters Degree",
                icon: <CiStar />,
              },
              duration: {
                name: "15 Months",
                icon: <CiCalendar />,
              },
              noOfSpecializations: {
                no: 13,
                icon: <MdOutlineHomeRepairService />,
              },
              button1: {
                icon: "",
                text: "View Program",
                href: "#",
              },
              button2: {
                icon: <MdOutlineFileDownload />,
                text: "Syllabus",
                href: "#",
              },
            },
            {
              id: 4,
              slug: "upgrad-tech",
              stream: "MBA",
              collegeName: "upGrad Tech",
              icon: <FaUniversity />,
              img: c1,
              title: "Upgrad",
              text1: "Dual Specialisation",
              degreeType: {
                name: "Masters Degree",
                icon: <CiStar />,
              },
              duration: {
                name: "15 Months",
                icon: <CiCalendar />,
              },
              noOfSpecializations: {
                no: 13,
                icon: <MdOutlineHomeRepairService />,
              },
              button1: {
                icon: "",
                text: "View Program",
                href: "#",
              },
              button2: {
                icon: <MdOutlineFileDownload />,
                text: "Syllabus",
                href: "#",
              },
            },
          ],
        },
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
          text:
            "JEE Main 2024: Paper 2 Result (Out), Cut Off, Toppers List, Counselling Dates",
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
        cardsSection: {
          card1: {
            icon: building,
            title: "617 Acres",
            text: "Campus Size",
          },
          card2: {
            icon: community,
            title: "592",
            text: "No. of Faculty",
          },
          card3: {
            icon: Student,
            title: "10224",
            text: "No. of students",
          },
        },
        highlights: {
          avgFeePerYear: "95.1k Yearly",
          genderAccepted: "Co-ed",
          collegeType: "Government",
          studyMode: "Regular, Part-time",
          estYear: "1990",
          noOfFaculty: "592",
        },
        topRecruitersLogos: [
          { url: comp1 },
          { url: comp2 },
          { url: comp3 },
          { url: comp4 },
          { url: comp5 },
        ],
        brochureSection: {
          text:
            "Interested in learning more about the Indian Institute of Technology, Madras?",
          buttons: {
            button1: {
              text: "Download Brochure",
              href: "#",
            },
          },
        },

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
        reviews: {
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
        photoGallery: [
          { url: c3 },
          { url: c4 },
          { url: c5 },
          { url: c6 },
          { url: c7 },
          { url: c8 },
        ],
        videoGallery: [
          { id: 1, title: "Video 1", videoId: "4-YEBaUXUGo" },
          { id: 2, title: "Video 2", videoId: "4-YEBaUXUGo" },
          { id: 3, title: "Video 3", videoId: "4-YEBaUXUGo" },
        ],
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
];
