"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import EmblaCarouselWWW from "./EmblaCarouselL";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { axis: "y", direction: "rtl", loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export function EmblaCarousel2() {
  const [emblaRef] = useEmblaCarousel({ loop: true, axis: "y" }, [Autoplay()]);

  return <EmblaCarouselWWW slides={SLIDES} options={OPTIONS} />;
}
