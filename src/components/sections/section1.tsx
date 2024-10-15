import React from "react";
import Image from "next/image";
import { CardStackDemo } from "./CardStackDemo";
export default function Section1() {
  return (
    <>
      <div className="my-12">
        <div className="bg-no-repeat bg-[url('/section1.jpg')] bg-cover bg-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4 place-items-center h-full">
              <CardStackDemo />
            </div>
            <div>
              <div className="flex justify-center">
                <Image
                  src="/bombasFundo.png"
                  alt="Logo"
                  className="dark:invert"
                  width={800}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
