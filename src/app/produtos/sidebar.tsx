"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { cn } from "../../../lib/utils";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BentoGridDemo } from "./bentoGrid";
import listaProdutos from "../../../public/lista";
export function SidebarDemo() {
  const links = [
    {
      label: "Categoria 1",
      href: "#",
      icon: (
        <AiOutlineUnorderedList className="text-yellow-600 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Categoria 2",
      href: "#",
      icon: (
        <AiOutlineUnorderedList className="text-yellow-600 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Categoria 3",
      href: "#",
      icon: (
        <AiOutlineUnorderedList className="text-yellow-600 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Categoria 4",
      href: "#",
      icon: (
        <AiOutlineUnorderedList className="text-yellow-600 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row w-full flex-1 mx-auto border overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2 ">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  const [filtrado, setFiltrado] = useState([]);
  const [filtradoName, setFiltradoName] = useState("");
  function filterItems(arr: any, query: any) {
    return arr.filter((el: any) =>
      el.nome.toLowerCase().includes(query.toLowerCase())
    );
  }
  useEffect(() => {
    setFiltrado(filterItems(listaProdutos, filtradoName));
  }, [filtradoName]);
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex justify-center mb-4">
          <Input
            type="text"
            label="Procurar Produto"
            variant="underlined"
            value={filtradoName}
            onValueChange={(value) => setFiltradoName(value)}
            className="w-[400px] text-yellow-600"
            color={"warning"}
            endContent={
              <AiOutlineSearch className="text-2xl text-yellow-600 pointer-events-none" />
            }
          />
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(1)].map((i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
            >
              {filtrado.length > 0 ? (
                <>
                  <BentoGridDemo listaProdutos={filtrado} />
                </>
              ) : (
                <>
                  <BentoGridDemo listaProdutos={listaProdutos} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
