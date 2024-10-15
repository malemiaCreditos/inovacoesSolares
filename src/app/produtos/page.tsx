import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import React from "react";
import { SidebarDemo } from "./sidebar";

export default function Produtos() {
  return (
    <main className="min-h-screen">
      <Header />
      <SidebarDemo />
      <Footer />
    </main>
  );
}
