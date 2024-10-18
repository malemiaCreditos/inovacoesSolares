"use client";
import { items } from "../../../public/Items.json";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
export default function ElasticCarousel() {
  const { elastic } = items;
  return (
    <div className="container lg:mx-auto lg:min-h-50vh">
      <div className="text-2xl font-bold text-yellow-600 font-sans mb-2 text-center">
        <h1>Sistemas de Geração de Energia Solar On Grid e Off Grid</h1>
      </div>
      <hr />
      <div className="my-4">
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          enableAutoPlay={true}
        >
          {elastic.map((item) => (
            <div className="m-4" key={item.id}>
              <Image
                src={item.imageUrl}
                alt="Logo"
                className="dark:invert"
                width={500}
                height={500}
                priority
              />
              <div className="text-xl font-bold text-yellow-600 font-sans">
                <h3>{item.title} </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
