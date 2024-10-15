"use client";
import Image from "next/image";
import React from "react";
import { Link, Button } from "@nextui-org/react";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import { BackgroundLinesDemo } from "./linhas";
export default function HomeCabecalho() {
  const words = ["Vidas", "Energia", "Comunidades", "Familias"];
  return (
    <div className="container lg:mx-auto lg:min-h-50vh">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-4 m-4">
        <div className="mt-12">
          <BackgroundLinesDemo />
        </div>
        <div className="hidden md:block md:h-96 mt-12">
          <div className="">
            <motion.div
              initial={{ x: 520, opacity: 0 }}
              animate={{ y: -36, x: 100, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 500 }}
            >
              <Image
                src="/frenteCasa.png"
                alt="Logo"
                className="dark:invert"
                width={800}
                height={800}
                priority
              />
            </motion.div>
            <motion.div
              initial={{ y: 520, opacity: 0 }}
              animate={{ y: -536, x: 100, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 500 }}
            >
              <Image
                src="/lateralCarro.png"
                alt="Logo"
                className="dark:invert"
                width={800}
                height={800}
                priority
              />
            </motion.div>
            <motion.div
              initial={{ y: 520, opacity: 0 }}
              animate={{ y: -1035, x: 100, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 500 }}
            >
              <Image
                src="/tecto.png"
                alt="Logo"
                className="dark:invert"
                width={800}
                height={800}
                priority
              />
            </motion.div>
            <motion.div
              initial={{ y: 520, opacity: 0 }}
              animate={{ y: -1536, x: 100, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 500 }}
            >
              <Image
                src="/subteranio.png"
                alt="Logo"
                className="dark:invert"
                width={800}
                height={800}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
