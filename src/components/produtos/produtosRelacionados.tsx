"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import listaProdutos from "../../../public/lista";
export default function ProdutosRelacionadosPage() {
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
    </>
  );
}
