"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "../ui/flip-words";
import { Link, Button } from "@nextui-org/react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function BackgroundLinesDemo() {
  const words2 =
    "Explore o futuro da energia com a Inovações Solares, onde transformamos a luz do sol em soluções práticas e econômicas para o seu dia a dia.";
  const words = ["Vidas", "Energia", "Comunidades", "Familias"];
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-yellow-600 text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Transformando <br /> <FlipWords words={words} />
      </h2>
      <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        <TextGenerateEffect words={words2} />
      </div>
      <div className="flex justify-end mt-4">
        <Button color="warning" variant="bordered">
          Portfólio
        </Button>
      </div>
    </BackgroundLines>
  );
}
