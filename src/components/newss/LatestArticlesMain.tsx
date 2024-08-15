import LatestArticles from "./LatestArticles";
import MainImage from "@/asset/news/card3.png";

const articles = [
  {
    id: "1",
    title:
      "UN chief calls for 'dramatic shift' to transform education worldwide",
    excerpt:
      "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don't wait any longer and...",
    author: {
      name: "Ashik Umer",
      avatar: MainImage,
    },
    date: "June 24, 2024 5:30 PM",
    image: MainImage,
  },
  {
    id: "2",
    title:
      "UN chief calls for 'dramatic shift' to transform education worldwide",
    excerpt:
      "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don't wait any longer and...",
    author: {
      name: "Ashik Umer",
      avatar: MainImage,
    },
    date: "June 24, 2024 5:30 PM",
    image: MainImage,
  },
  {
    id: "3",
    title:
      "UN chief calls for 'dramatic shift' to transform education worldwide",
    excerpt:
      "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don't wait any longer and...",
    author: {
      name: "Ashik Umer",
      avatar: MainImage,
    },
    date: "June 24, 2024 5:30 PM",
    image: MainImage,
  },
  // Add more articles...
];

const LatestArticlesMain = () => {
  return (
    <div>
      <LatestArticles articles={articles} />
    </div>
  );
};

export default LatestArticlesMain;