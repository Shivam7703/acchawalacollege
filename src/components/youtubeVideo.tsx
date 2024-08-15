// import { IoPlayCircleOutline } from "react-icons/io5";

type Props = {
  videoId: string;
  width: string;
  height: string;
};
export default function YoutubeVideo({ videoId, width, height }: Props) {
  return (
    <div className="relative cursor-pointer">
      <iframe
        className={`${videoId}  rounded-lg`}
        height={height}
        width={width}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* <IoPlayCircleOutline className="absolute bottom-5 right-5 cursor-pointer text-4xl text-white" /> */}
    </div>
  );
}
