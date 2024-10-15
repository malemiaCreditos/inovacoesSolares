"use client";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import ProdutoSelected from "./produtoSelected";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Produtos() {
  const params = useParams();
  const { id } = params;
  return (
    <main className="min-h-screen">
      <Header />
      <ProdutoSelected id={id} />
      <div className="mt-4"></div>
      <Footer />
    </main>
  );
}
