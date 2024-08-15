import { c2, user1 } from "@/asset";

export const scholarshipPage = {
    filterBy: {
        country: ["India", "USA", "UK", "Canada", "New Zealand", "South Africa", "Nigeria"],
        eligibilityCriteria: [
          "Age",
          "Income",
          "Academic Performance",
        ],
      scholarshipType: [
          "Merit-based",
          "Need-based",
          "Specific Categories",
        ],

        applicationStatus: [
          "Open",
          "Closed",
          "Incoming",
        ],

        provider: [
          "Government",
          "Private Organization",
          "Educational Institutions",
        ],
      },
      // Don't use for backend 
      scholarshipData :[
        {id:1,
          img: user1,
          uccImg: user1,
          imgText:
            "Conducted By : University College Cork [UCC] and Government of Ireland",
          title: "UCC Ireland Meritorious Scholarship for Indian Students",
          eligiblity: "International Student (Yes)",
          type: "Merit-Based",
          numberOfSchol: 150,
          amount: 28961,
          degree: "(Doctorate Degree)",
          button1: { text: "Apply Now" },
          button2: { text: "Get Alert" },
        },
        {id:2,
          img: user1,
          uccImg: user1,
          imgText:
            "Conducted By : University College Cork [UCC] and Government of Ireland",
          title: "UCC Ireland Meritorious Scholarship for Indian Students",
          eligiblity: "International Student (Yes)",
          type: "Merit-Based",
          numberOfSchol: 150,
          amount: 28961,
          degree: "(Doctorate Degree)",
          button1: { text: "Apply Now" },
          button2: { text: "Get Alert" },
        }, {id:3,
          img: user1,
          uccImg: user1,
          imgText:
            "Conducted By : University College Cork [UCC] and Government of Ireland",
          title: "UCC Ireland Meritorious Scholarship for Indian Students",
          eligiblity: "International Student (Yes)",
          type: "Merit-Based",
          numberOfSchol: 150,
          amount: 28961,
          degree: "(Doctorate Degree)",
          button1: { text: "Apply Now" },
          button2: { text: "Get Alert" },
        }, {id:4,
          img: user1,
          uccImg: user1,
          imgText:
            "Conducted By : University College Cork [UCC] and Government of Ireland",
          title: "UCC Ireland Meritorious Scholarship for Indian Students",
          eligiblity: "International Student (Yes)",
          type: "Merit-Based",
          numberOfSchol: 150,
          amount: 28961,
          degree: "(Doctorate Degree)",
          button1: { text: "Apply Now" },
          button2: { text: "Get Alert" },
        }, {id:5,
          img: user1,
          uccImg: user1,
          imgText:
            "Conducted By : University College Cork [UCC] and Government of Ireland",
          title: "UCC Ireland Meritorious Scholarship for Indian Students",
          eligiblity: "International Student (Yes)",
          type: "Merit-Based",
          numberOfSchol: 150,
          amount: 28961,
          degree: "(Doctorate Degree)",
          button1: { text: "Apply Now" },
          button2: { text: "Get Alert" },
        },
      ],
}