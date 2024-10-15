"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Produto",
      value: "Produto",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-700 to-yellow-200">
          <p>Produto Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Serviço",
      value: "Serviço",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-700 to-yellow-200">
          <p>Serviço tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Consultoria",
      value: "Consultoria",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-700 to-yellow-200">
          <p>Consultoria tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Projectos",
      value: "Projectos",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-700 to-yellow-200">
          <p>Projectos tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/inversor.png"
      alt="dummy image"
      width="800"
      height="800"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
