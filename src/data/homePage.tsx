import {
  c1,
  b1,
  b2,
  b3,
  Student,
  Certificate,
  GraduationCap,
  user1,
  testimonialBg,
  section6Bg,
  co1,
  co2,
  co3,
  au1,
  au2,
  au3,
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
  Landing1, Landing2, Landing3, banner2
} from "@/asset";
import { CiCalendar, CiStar } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import {
  MdDescription,
  MdOutlineFileDownload,
  MdOutlineHomeRepairService,
} from "react-icons/md";
import { TbRuler2Off } from "react-icons/tb";


export const home = {
  homeBanner: {
    title: {
      t1: "Best Education",
      t2: "Counselling Platform",
      t3: "in The World",
    },
    text1: "Search your career opportunities across 27000+ Colleges",
    button1: {
      text: "Explore Colleges",
      href: "#",
    },
    button2: {
      text: "Schedule Counselling",
      href: "#",
    },
    img: [Landing1, Landing2, Landing3],
    text2: "Get 30% off on every 1st month",
    text3: "Expert Counsellors",
  },
  section2: {
    card1: {
      icon: Certificate,
      title: "2,300+",
      text: "Admissions done",
    },
    card2: {
      icon: Student,
      title: "6,200+",
      text: "Fulfilled dreams",
    },
    card3: {
      icon: GraduationCap,
      title: "5,100+",
      text: "Counselling sessions ",
    },
  },
  partners: {
    title: "Our Knowledge Partners",
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10],
  },
  CounsellingPackages: {
    title: "Counselling Packages",
    CounsellingPackagesCards: [
      {
        id: 1,
        icon: {data:[{url:p1}]},
        PackageName: "Silver Package",
        isPopular: false,
        price: 11000,
        text1: "Essential guidance to kickstart \nyour journey",
        lists: {data:[
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
      },
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
        icon: {data:[{url:p1}]},
        PackageName: "Gold Package",
        isPopular: TbRuler2Off,
        price: 25000,
        text1: "Comprehensive support tailored \nto your ambitions",
        lists:{
          data: [
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
        },
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
        icon: {data:[{url:p1}]},
        PackageName: "Diamond Package",
        isPopular: false,
        price: 55000,
        text1: "Unmatched assistance for your \nacademic aspirations",
        lists: {
          data:[
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
          ]
        },
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
  banner1 : {
    title:
      "Embark on Your Career Journey Today! Connect \\n with Our Expert Counseling Team Now.",
    text1: "Navigate the Path to Success with Our Support",
    button: {
      text: "Schedule  Counselling",
      href: "#",
    },
    bgImg: {url:section6Bg},
  },
  banner2 : {
    title:{
      t1:"End-to-End",
      t2:"Counselling",
      t3:"Simplified"
    },
    text:"Get help for your search, shortlist, application, preparation, admission and \nplacement requirements!",
    steps:[
      "Fill The Acchawalacollege End to End Form",
      "Our Expert Counsellor will Contact you",
      "Select The Right Counselling Package",
      "Shortlist Colleges And Fill Application Forms",
      "Upload Documents & Pay Fee",
      "Confirm Admission and Claim Gift"
    ],
    bg:banner2,
  }
};
