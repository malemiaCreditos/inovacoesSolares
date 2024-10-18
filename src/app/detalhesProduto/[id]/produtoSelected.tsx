import ProdutosRelacionadosPage from "@/components/produtos/produtosRelacionados";
import React from "react";
import { LensDemo } from "./lensDemo";
import DetalhesSelected from "./detalhesSelected";
import CaracteristicasSelected from "./caracteristicasSelected";

export default function ProdutoSelected({ id }: any) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
        <div>
          <LensDemo id={id} />
        </div>
        <div>
          <DetalhesSelected id={id} />
        </div>
      </div>
      <hr className="text-red-600" />
      <CaracteristicasSelected id={id} />
      <div className="mt-4"></div>
      <ProdutosRelacionadosPage />
    </>
  );
}
