import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
const listV = [
  {
    title: "Instalacoa de Paineis Solares",
    content: "conteudo",
  },
  {
    title: "Nossa Equipa de Trabalho",
    content: "conteudo",
  },
  {
    title: "Furos de Água",
    content: "conteudo",
  },
];
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
              <div className="embla__slide__number">
                <div className="flex flex-row">
                  <div className="text-xl font-bold text-yellow-600 font-sans mb-2">
                    <h1>{listV[index].title}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselWWW;
