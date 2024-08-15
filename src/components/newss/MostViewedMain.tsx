import MostViewed from "./MostViewed";
import MainImage from "@/asset/news/card3.png";

const newsData = [
  {
    id: 1,
    title:
      "UN chief calls for 'dramatic shift' to transform education worldwide",
    author: "Ashik Umer",
    authorImage: MainImage,
    date: "Jun 28, 2024",
    content:
      "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don't wait any longer for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don't wait any longer for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don't wait any longe and...",
    image: MainImage,
  },
  {
    id: 2,
    title:
      "UN chief calls for 'dramatic shift' to transform education worldwide",
    author: "Ashik Umer",
    authorImage: MainImage,
    date: "Jun 28, 2024",
    content: "",
    image: MainImage,
  },
  {
    id: 3,
    title:
      "UN chief calls for 'dramatic shift' to transform education worldwide",
    author: "Ashik Umer",
    authorImage: MainImage,
    date: "Jun 28, 2024",
    content: "",
    image: MainImage,
  },
];

const MostViewedMain: React.FC = () => {
  return (
    <div>
      <MostViewed news={newsData} />
    </div>
  );
};

export default MostViewedMain;
