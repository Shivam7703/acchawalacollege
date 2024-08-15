import LatestNews from "./LatestNews";
import MainImage from "@/asset/news/card3.png";

const newsData = {
  id: 1,
  title: "UN chief calls for 'dramatic shift' to transform education worldwide",
  author: "Ashik Umer",
  authorImage: MainImage,
  timeAgo: "12 minutes ago",
  content:
    "JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? IITs is done based on JEE Advanced rank and JEE Advanced seat allocation will be conducted through JoSAA counselling 2024...",
  image: MainImage,
};

const LatestNewsMain: React.FC = () => {
  return (
    <div>
      <LatestNews news={newsData} />
    </div>
  );
};

export default LatestNewsMain;
