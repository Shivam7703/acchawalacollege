import Image from "next/image";
import Link from "next/link";
import bgImage from "@/asset/news/banner.png";
export default function ScheduleSection() {
  return (
    <section className="my-5 mt-8 w-full">
      <div className="relative mx-auto w-full">
        <Image
          src={bgImage}
          alt="bg"
          width={2880}
          height={768}
          className="max-h-[368px] w-full object-cover max-md:h-[480px]"
        />
        <div className="flex-center absolute left-0 top-0 h-full w-full flex-col gap-5 bg-blue-950/70 px-5">
          <p className="text-center text-2xl font-bold text-white md:text-4xl">
            Embark on Your Career Journey Today! Connect with Our Expert
            Counseling Team Now.
          </p>
          <p className="text-wrap text-center font-mont text-white max-md:text-sm">
            Navigate the Path to Success with Our Support
          </p>
          <Link href="#" className="button4 rounded-lg">
            <button className="text-xl font-medium">
              Schedule Councelling
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}