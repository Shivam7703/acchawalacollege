import {
  au1,
  au2,
  au3,
  co1,
  co2,
  co3,
  courseBg1,
  courseBg2,
  courseBg3,
  video1,
  video2,
  video3,
  user1,
  coursesBanner,
  coursesBanner1,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  testimonialBg,
  collegeLogo,
  c2,
} from "@/asset";

export const courseListingPage = {
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
  courseData :[{
    id:1,
    img: user1,
    rating: 4.5,
    reviews: 7,
    state: "Tamil Nadu",
    city: "Chennai",
    courseType: "Govt",
    avgFeePerYear: 1.2,
    package: 10,
    exam: "Exam",
    desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
    name: "Bachelor of Technology [B.Tech] (Computer Science and Engineering)",
    readMore: "#",
    navbar: [
      "Dates",
      "Admission",
      "Placement",
      "Courses",
      "Cut Off",
      "Facilities",
    ],
    button1: { text: "Apply Now" },
    button2: { text: "Contact Us" },
  },
  {id:2,
    img: user1,
    rating: 4.5,
    reviews: 7,
    state: "Tamil Nadu",
    city: "Chennai",
    courseType: "Govt",
    avgFeePerYear: 1.2,
    package: 10,
    exam: "Exam",
    desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
    name: "Bachelor of Technology [B.Tech] (Computer Science and Engineering)",
    readMore: "#",
    navbar: [
      "Dates",
      "Admission",
      "Placement",
      "Courses",
      "Cut Off",
      "Facilities",
    ],
    button1: { text: "Apply Now" },
    button2: { text: "Contact Us" },
  },{
    id:3,
    img: user1,
    rating: 4.5,
    reviews: 7,
    state: "Tamil Nadu",
    city: "Chennai",
    courseType: "Govt",
    avgFeePerYear: 1.2,
    package: 10,
    exam: "Exam",
    desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
    name: "Bachelor of Technology [B.Tech] (Computer Science and Engineering)",
    readMore: "#",
    navbar: [
      "Dates",
      "Admission",
      "Placement",
      "Courses",
      "Cut Off",
      "Facilities",
    ],
    button1: { text: "Apply Now" },
    button2: { text: "Contact Us" },
  },{id:4,
    img: user1,
    rating: 4.5,
    reviews: 7,
    state: "Tamil Nadu",
    city: "Chennai",
    courseType: "Govt",
    avgFeePerYear: 1.2,
    package: 10,
    exam: "Exam",
    desc: "The Indian Institute of Technology Madras is known both nationally and internationally for excellence in technical education, basic and applied research, innovation, entrepreneurship and industrial consultancy.",
    name: "Bachelor of Technology [B.Tech] (Computer Science and Engineering)",
    readMore: "#",
    navbar: [
      "Dates",
      "Admission",
      "Placement",
      "Courses",
      "Cut Off",
      "Facilities",
    ],
    button1: { text: "Apply Now" },
    button2: { text: "Contact Us" },
  },],
  

 
  MBA: {
    homeBanner: {
      title: {
        t1: "Discover Our",
        t2: "Online",
        t3: "MBA Programs",
      },
      text1: "Improve your MBA Journey with us and become the best",
      button1: {
        text: "Explore Courses",
        href: "#",
      },
      button2: {
        text: "Explore Courses",
        href: "#",
      },
      img: [courseBg1, courseBg2, courseBg3],
    },
    brochureSection: {
      text: "Discover courses tailored to your aspirations and unlock endless \nopportunities for growth and success.",
      buttons: {
        button1: {
          text: "Download Brochure",
          href: "#",
        },
      },
    },
    about: {
      section1: {
        title: "Fully \nOnline",
        text: "Berpedoman dan berakhlak mulia sesuai dengan ajaran Nabi Muhammad SAW",
        isHighlights: false,
      },
      section2: {
        title: "5m+ Worldwide \nLearners",
        text: "Berpedoman dan berakhlak mulia sesuai dengan ajaran Nabi Muhammad SAW",
        isHighlights: false,
      },
      section3: {
        title: "80% Positive \nCareer Impact",
        text: "Berpedoman dan berakhlak mulia sesuai dengan ajaran Nabi Muhammad SAW",
        isHighlights: true,
      },
      section4: {
        title: "15m+ Learning \nHours",
        text: "Berpedoman dan berakhlak mulia sesuai dengan ajaran Nabi Muhammad SAW",
        isHighlights: false,
      },
    },
    topCourses: {
      title: {
        t1: "Discover",
        t2: "Top Courses",
      },
      courses: [
        {
          id: 1,
          stream: "MBA",

          bg: co1,
          teacherAvatar: user1,
          teacherName: "Dr. Pankaj Kumar",
          teacherRole: "Teacher",
          designation: "MBA Specialist and Director of Admission",

          title: "Acchawala",
          rating: 4.5,
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
            href: "#",
          },
        },
        {
          id: 2,
          stream: "MBA",

          bg: co2,
          teacherAvatar: au2,
          teacherName: "Andrew Garfield",
          teacherRole: "Teacher",
          designation: "MBA Specialist and Director of Admission",

          title: "Acchawala",
          rating: 4.5,
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
            href: "#",
          },
        },
        {
          id: 3,
          stream: "MBA",

          bg: co3,
          teacherAvatar: au3,
          teacherName: "Andrew Garfield",
          teacherRole: "Teacher",
          designation: "MBA Specialist and Director of Admission",

          title: "Acchawala",
          rating: 4.5,
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
            href: "#",
          },
        },
        {
          id: 4,
          stream: "MBA",

          bg: co1,
          teacherAvatar: au1,
          teacherName: "Andrew Garfield",
          teacherRole: "Teacher",
          designation: "MBA Specialist and Director of Admission",

          title: "Acchawala",
          rating: 4.5,
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
            href: "#",
          },
        },
      ],
    },
    bannerSection: {
      bg1: coursesBanner,
      bg2: coursesBanner1,
      title:
        "Embark on Your Career Journey Today! Find \nThe Best Course To Take You To The Next Level",
      text: "Navigate the Path to Success with Our Support",
      button: {
        text: "Browse Courses",
        href: "#",
      },
    },
    partners: {
      title: "Our Knowledge Partners",
      images: [comp1, comp2, comp3, comp4, comp5],
    },
    testimonial: {
      title: {
        t1: "What Our",
        t2: "Student Say",
        t3: "About Us",
      },
      text: "Discover Success Stories from Our Satisfied Students",
      bg: testimonialBg,
      card: [
        {
          id: 1,
          name: "Pankaj Kumar",
          avatar: user1,
          collegeName: "MBA, IIM Ahmedabad",
          rating: 4.5,
          comment:
            "Thanks to the guidance I received from this platform, I not only found the perfect college but also gained valuable insights into the admission process. Highly recommended!",
          button: {
            text: "Watch their Story",
            href: "#",
          },
        },
        {
          id: 2,
          name: "Aman Sherawat",
          avatar: au1,
          collegeName: "B.tech, IIT Delhi",
          rating: 4.5,
          comment:
            "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
          button: {
            text: "Watch their Story",
            href: "#",
          },
        },
        {
          id: 3,
          name: "Priya Mehra",
          avatar: au2,
          collegeName: "Computer sciences, IIT Bombay",
          rating: 3,
          comment:
            "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
          button: {
            text: "Watch their Story",
            href: "#",
          },
        },
        {
          id: 4,
          name: "Karan Gill",
          avatar: au3,
          collegeName: "B.tech, IIT Delhi",
          rating: 4.5,
          comment:
            "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
          button: {
            text: "Watch their Story",
            href: "#",
          },
        },
      ],
    },
    videos: {
      title1: "MBA Videos",
      title2: {
        t1: "You Might",
        t2: "Like To",
        t3: "Watch",
      },
      thumbnails: [
        {
          id: 1,
          title: "Online MBA with Deakin University and acchaWalaCollege",
          img: video1,
          button: {
            text: "",
            href: "#",
          },
          timeLength: "2:30",
          noOfViews: "1.5K",
        },
        {
          id: 2,
          title: "Online MBA with Deakin University and acchaWalaCollege",
          img: video2,
          button: {
            text: "",
            href: "#",
          },
          timeLength: "2:30",
          noOfViews: "1.5K",
        },
        {
          id: 3,
          title: "Online MBA with Deakin University and acchaWalaCollege",
          img: video3,
          button: {
            text: "",
            href: "#",
          },
          timeLength: "2:30",
          noOfViews: "1.5K",
        },
      ],
    },
    featuredPrograms: {
      title1: "Featured MBA Programs",
      title2: {
        t2: "Free",
        t3: "Masterclasses",
      },
      card: [
        {
          id: 1,
          bg: courseBg1,
          teacher: {
            avatar: au1,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Speaker",
          },
          title: "Dive Into Leadership In 3 Weeks",
          button: {
            button1: {
              text: "Ask me anything",
              href: "#",
            },
            button2: {
              text: "Register",
              href: "#",
            },
          },
        },
        {
          id: 2,
          bg: courseBg2,
          teacher: {
            avatar: au2,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Speaker",
          },
          title: "Dive Into Leadership In 3 Weeks",
          button: {
            button1: {
              text: "Ask me anything",
              href: "#",
            },
            button2: {
              text: "Register",
              href: "#",
            },
          },
        },
        {
          id: 3,
          bg: courseBg3,
          teacher: {
            avatar: au3,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Speaker",
          },
          title: "Dive Into Leadership In 3 Weeks",
          button: {
            button1: {
              text: "Ask me anything",
              href: "#",
            },
            button2: {
              text: "Register",
              href: "#",
            },
          },
        },
        {
          id: 4,
          bg: courseBg1,
          teacher: {
            avatar: au1,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Speaker",
          },
          title: "Dive Into Leadership In 3 Weeks",
          button: {
            button1: {
              text: "Ask me anything",
              href: "#",
            },
            button2: {
              text: "Register",
              href: "#",
            },
          },
        },
      ],
    },
    freePrograms: {
      title1: "Free Programs Related to MBA",
      title2: {
        t2: "Start Learning",
        t3: "For Free",
      },
      freeProgramsCard: [
        {
          id: 1,
          bg: courseBg1,
          teacher: {
            avatar: au1,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Teacher",
          },
          tag: "Free Course",
          title: "Advantages of MBA worldwide",
          summery:
            "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
          button: {
            text: "Start Learning",
            href: "#",
          },
          noOfCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          rating: 4.5,
        },
        {
          id: 2,
          bg: courseBg2,
          teacher: {
            avatar: au2,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Teacher",
          },
          tag: "Free Course",
          title: "Advantages of MBA worldwide",
          summery:
            "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
          button: {
            text: "Start Learning",
            href: "#",
          },
          noOfCourses: "13",
          courseTime: "2 hours",
          duration: "15 months",
          rating: 4.5,
        },
        {
          id: 3,
          bg: courseBg3,
          teacher: {
            avatar: au3,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Teacher",
          },
          tag: "Free Course",
          title: "Advantages of MBA worldwide",
          summery:
            "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
          button: {
            text: "Start Learning",
            href: "#",
          },
          noOfCourses: "13",
          courseTime: "2 Hours",
          duration: "15 Months",
          rating: 4.5,
        },
        {
          id: 4,
          bg: courseBg1,
          teacher: {
            avatar: au1,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Teacher",
          },
          tag: "Free Course",
          title: "Advantages of MBA worldwide",
          summery:
            "MBA is a graduate degree in business management, covering finance, marketing, operations, and strategy.",
          button: {
            text: "Start Learning",
            href: "#",
          },
          noOfCourses: "13",
          courseTime: "2 Hours",
          duration: "15 Months",
          rating: 4.5,
        },
      ],
    },
  },
};

export const courseDetailsPage = {
  bTech: {
    homeBanner: {
      title: "B.Tech Engineering Technology at IIT Madras",
      courseType: "offline",
      collegeDetails: {
        collegeLogo: collegeLogo,
        bg: courseBg1,
        CollegeName: "IIT Madras - Indian Institute of Technology ",
        location: {
          state: "Tamil Nadu",
          city: "Chennai",
        },
        affiliation: "AICTE",
      },
      duration: "48 Months",
      fees: "500000",
      lastUpdate: "Nov 17, 2023 14:25 IST",
      button1: {
        text: "Register Now",
        href: "#",
      },
      button2: {
        text: "Download Brochure",
        href: "#",
      },
    },
    courseDetails: [
      {
        navItem: "Overview",
        sections: [
          {
            article: `<p>This is an overview of the course.</p><p class='note'>Disclaimer: Data for total fees has been calculated based on all years/semesters as provided by the college.</p> <p>The actual fees may vary.</p><p>This is an overview of the course.</p>`,
          },
        ],
      },
      {
        navItem: "Course Details",
        sections: [
          {
        article: "These are the details of the course.",
      },
    ],
      },
      {
        navItem: "Programme Offerings",
        sections: [
          {
        article: "These are the details of the course.",
        list: [
          "UGC approved",
          "Online classes on weekends",
          "Expert Faculty",
          "Mock test",
          "Placements",
          "Case Studies",
          "Scholarships",
          "Project work",
          "Access to online lab and remote lab.",
        ],
      }]
      },
      {
        navItem: "Eligibility Criteria",
        sections: [
          {
        article: "Eligibility criteria for the course.",
          }]
      },
      {
        navItem: "Admission Details",
        sections: [
          {
        article: "Details about the admission process.",
          }]
      },
      {
        navItem: "Application Details",
        sections: [
          {
        article: "How to apply for the course.",
          }]
      },
      {
        navItem: "The Syllabus",
        sections: [
          {
        article: "",
        semesters: [
          {
            id: 1,
            title: "Semester 1",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 2,
            title: "Semester 2",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 3,
            title: "Semester 3",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 4,
            title: "Semester 4",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 5,
            title: "Semester 5",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 6,
            title: "Semester 6",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 7,
            title: "Semester 7",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
          {
            id: 8,
            title: "Semester 8",
            text: "<ul style='list-style-type: circle;'><li>Electrical & Electronics Technology</li><li>Communication Technology</li><li>Computer Technology</ul>",
          },
        ],
      }]
      },
      {
        navItem: "Evaluation Process",
        sections: [
          {
        article: `<p>Evaluation process of the course.</p> <p>This is an overview of the course.</p> <p>The actual fees may vary.</p><p class="note">This is an overview of the course.</p>`,
          }]
      },
    ],
    faqs: {
      title: {
        t1: "",
        t2: "Frequently",
        t3: "Asked Questions",
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
    similarCourses: {
      title: {
        t2: "Discover",
        t3: "Similar Courses",
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
    moreCourses: {
      title: {
        t2: "More Courses by",
        t3: "IIT Madras",
      },
      coursesCard: [
        {
          id: 1,
          bg: courseBg1,
          teacher: {
            avatar: au1,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Speaker",
          },
          title: "Dive Into Leadership In 3 Weeks",
          button: {
            button1: {
              text: "Ask me anything",
              href: "#",
            },
            button2: {
              text: "Register",
              href: "#",
            },
          },
        },
        {
          id: 2,
          bg: courseBg2,
          teacher: {
            avatar: au2,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Speaker",
          },
          title: "Dive Into Leadership In 3 Weeks",
          button: {
            button1: {
              text: "Ask me anything",
              href: "#",
            },
            button2: {
              text: "Register",
              href: "#",
            },
          },
        },
        {
          id: 3,
          bg: courseBg3,
          teacher: {
            avatar: au3,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Speaker",
          },
          title: "Dive Into Leadership In 3 Weeks",
          button: {
            button1: {
              text: "Ask me anything",
              href: "#",
            },
            button2: {
              text: "Register",
              href: "#",
            },
          },
        },
        {
          id: 4,
          bg: courseBg1,
          teacher: {
            avatar: au1,
            name: "Dr. Andrew Garfield",
            designation: "MBA Specialist and Director of \nAdmission",
            role: "Speaker",
          },
          title: "Dive Into Leadership In 3 Weeks",
          button: {
            button1: {
              text: "Ask me anything",
              href: "#",
            },
            button2: {
              text: "Register",
              href: "#",
            },
          },
        },
      ],
    },
  },
};
