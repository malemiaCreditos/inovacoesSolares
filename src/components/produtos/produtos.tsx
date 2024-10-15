"use client";
import { Link, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { AiOutlineArrowRight } from "react-icons/ai";
import listaProdutos from "../../../public/lista";
export default function ProdutosHomePage() {
  return (
    <>
      <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={listaProdutos}
          direction="right"
          speed="slow"
          className="bg-gradient-to-r from-white from-10% via-yellow-300/20 via-30% to-white to-90%"
        />
      </div>
      <div className="flex justify-end px-4">
        <Button as={Link} color="warning" href="/produtos" variant="flat">
          Ver mais...
          <AiOutlineArrowRight />
        </Button>
      </div>
    </>
  );
}
