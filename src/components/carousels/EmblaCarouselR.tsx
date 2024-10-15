import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
const listV = ["/carousel1.jpg", "/carousel2.jpg", "/carousel3.jpg"];
import Image from "next/image";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarouselWWW: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  return (
    <section className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={listV[index]}
                alt="Logo"
                className="dark:invert"
                width={1500}
                height={800}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselWWW;
