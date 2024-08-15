import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Banner2Section({ data }: any) {
  return (
    <section className="my-16 w-full">
      <Wrapper>
        {/* Title */}
        {data?.title && (
          <h1 className="title1 mb-2">
            {data?.title?.t1 && (
              <span className="text-blue-950/70">{data?.title?.t1}</span>
            )}{" "}
            {data?.title?.t2 && (
              <span className="text-blue-950">{data?.title?.t2}</span>
            )}{" "}
            {data?.title?.t3 && (
              <span className="text-blue-500">{data?.title?.t3}</span>
            )}
          </h1>
        )}
        {data?.text && <p className="mb-5">{data?.text}</p>}

        <div className="grid-cols-12 gap-10 md:grid">
          <div className="relative col-span-10 grid-cols-2 gap-10 md:grid">
            {/* left  */}
            <Image
              width="800"
              height="800"
              src={data?.img?.[0]}
              alt="banner"
              className="col-span-1 w-full rounded-2xl object-cover max-md:hidden md:h-[550px]"
            />
            {/* right  */}
            <div className="col-span-1 flex flex-col justify-between">
              <div className="gap-4 max-md:flex">
                <Image
                  width="800"
                  height="800"
                  src={data?.img?.[1]}
                  alt="banner"
                  className="mb-5 rounded-2xl object-cover max-md:h-[165px] max-md:w-[40%] md:h-[350px] md:w-full"
                />
                <div>
                  {data?.text1 && (
                    <p className="mb-5 line-clamp-4 text-wrap">{data?.text1}</p>
                  )}
                  {data?.button && (
                    <Link
                      className="md:hidden"
                      href={data?.button?.href || "#"}
                    >
                      <button className="button4 rounded-lg">
                        {data?.button?.text}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              {data?.button && (
                <Link
                  className="max-md:hidden"
                  href={data?.button?.href || "#"}
                >
                  <button className="button4 rounded-lg">
                    {data?.button?.text}
                  </button>
                </Link>
              )}
            </div>
            {/* center Card */}
            <Card
              className={
                "left-1/2 top-1/4 px-12 py-10 max-md:hidden max-md:w-min md:absolute md:-translate-x-1/2"
              }
              data={data?.cards?.[0]}
            />
          </div>
          <div className="flex grid-cols-4 gap-5 max-md:mt-5 max-md:grid md:col-span-2 md:flex-col md:flex-wrap md:justify-between">
            {data?.cards
              ?.slice(1)
              ?.map((card: any, index: number) => (
                <Card
                  key={index}
                  data={card}
                  className="p-8 shadow-[0px_0px_9px_1px_rgba(0,0,0,0.2)] max-md:col-span-2"
                />
              ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

const Card = ({ data, className }: any) => {
  return (
    <div className={`flex-center flex-col rounded-2xl bg-white ${className}`}>
      {data?.text1 && <p className="text-xl text-blue-500">{data?.text1}</p>}
      {data?.text2 && <p>{data?.text2}</p>}
      {data?.userAvatars && (
        <div className="avatarsMap">
          <ul className="flex">
            {data?.userAvatars?.map((avatar: any, index: number) => (
              <li key={index}>
                <Image
                  key={index}
                  src={avatar}
                  alt="student"
                  width="80"
                  height="80"
                  className="h-8 w-8 rounded-full border border-white"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
