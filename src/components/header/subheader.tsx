"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../../lib/utils";
import listaProdutos from "../../../public/lista";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Serviços">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/servicos/Projectos">
              Projectos de Sistemas Solares
            </HoveredLink>
            <HoveredLink href="/servicos/Fornecimento">
              Fornecimento de Materiais
            </HoveredLink>
            <HoveredLink href="/servicos/Instalacao">
              Instalação de Sistemas Solares
            </HoveredLink>
            <HoveredLink href="#">Manutenção de Sistemas Solares</HoveredLink>
            <HoveredLink href="#">
              Consultoria em Energias Renovaveis
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Produtos">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            {listaProdutos.map((item) => (
              <>
                <ProductItem
                  title={item.nome.substring(0, 25)}
                  href={`/detalhesProduto/${item.id}`}
                  src={item.img}
                  description={item.desc.substring(0, 100)}
                />
              </>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Sobre">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/sobre">Sobre Nós</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
