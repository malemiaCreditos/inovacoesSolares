import { cn } from "../../../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { AiOutlineStar } from "react-icons/ai";
import { Badge } from "@nextui-org/react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
export function BentoGridDemo({ listaProdutos }: any) {
  return (
    <BentoGrid className="w-full mx-auto p-4">
      {listaProdutos.map(
        (
          item: {
            preco: string | undefined;
            id: any;
            img: string;
            nome:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            categoria:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
          },
          i: React.Key | null | undefined
        ) => (
          <BentoGridItem
            key={i}
            title={item.nome}
            description={item.categoria}
            header={
              <div className="flex justify-center h-full">
                <Link href={`/detalhesProduto/${item.id}`}>
                  <Image
                    src={item.img}
                    alt="Logo"
                    className="dark:invert"
                    width={150}
                    height={150}
                    priority
                  />
                </Link>
              </div>
            }
            icon={
              <div className="flex justify-between">
                <div className="flex flex-row gap-2">
                  <AiOutlineStar className="h-4 w-4 text-yellow-500" />
                  <AiOutlineStar className="h-4 w-4 text-yellow-500" />
                  <AiOutlineStar className="h-4 w-4 text-yellow-500" />
                  <AiOutlineStar className="h-4 w-4 text-yellow-500" />
                  <AiOutlineStar className="h-4 w-4 text-yellow-500" />
                </div>
                <div>
                  <Badge size="sm" content="0" color="warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 cursor-pointer text-yellow-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </Badge>
                </div>
              </div>
            }
            preco={item.preco}
            //   className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        )
      )}
    </BentoGrid>
  );
}
