"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: any;
}

interface NewsCardProps {
  items: NewsItem[];
}

const NewsCard: React.FC<NewsCardProps> = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextItem = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const prevItem = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + items.length) % items.length,
//     );
//   };


  const uniqueId = "package123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="mx-auto max-w-[1300px] flex p-3 flex-nowrap w-full overflow-auto"> 
            {items.map((item, index) => (
                <div key={item.id} className="flex items-center p-4 min-w-[500px]">
                  <Image
                    src={item.image}
                    alt="News image"
                    width={100}
                    height={100}
                    className="mr-4 h-20 rounded-lg object-fill"
                  />
                  <div>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <h2 className="mt-1 text-lg font-semibold">{item.title}</h2>
                  </div>
                </div>
            ))}
      {/* Add navigation buttons */}
      {/* <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div> */}
          {/* </CarouselContent>
          <CarouselPrevious onClick={prevItem}>
            <button className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md">
              &#8592;
            </button>
          </CarouselPrevious>
          <CarouselNext onClick={nextItem}>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md">
              &#8594;
            </button>
          </CarouselNext>
        </Carousel> */}
      </div>
  );
};

export default NewsCard;