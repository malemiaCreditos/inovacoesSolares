import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Link, Button, Input } from "@nextui-org/react";
import listaProdutos from "../../../../public/lista";

export default function DetalhesSelected({ id }: any) {
  const [product, setProduct] = useState([]);
  var productVolatel: any = [];
  useEffect(() => {
    productVolatel = [];
    listaProdutos.map((item) => {
      if (item.id === id) {
        productVolatel.push(item);
      }
    });
    setProduct(productVolatel);
  }, []);
  return (
    <>
      <div className="max-w-xl p-6">
        {product.length > 0 &&
          product.map((item: any) => (
            <>
              <div className="flex flex-col">
                <div className="text-yellow-600 text-4xl font-bold">
                  {item.nome}
                </div>
                <hr className="text-red-600" />
                <div className="text-red-600 text-2xl font-bold">
                  {item.preco}
                </div>
                <div className="flex justify-end mt-4">
                  <div className="flex flex-row gap-2">
                    <Input
                      type="number"
                      min="1"
                      variant="bordered"
                      defaultValue="1"
                      className="max-w-24"
                    />
                    <Button as={Link} color="warning" href="#" variant="flat">
                      Encomendar
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center mt-12">
                  <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/inovacoes.png"
                        width={40}
                      />
                      <div className="flex flex-col">
                        <p className="text-md">Inovações Solares Lda.</p>
                        <p className="text-small text-default-500">
                          info@inovacoesoslares.co.mz
                        </p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <div className="text-gray-700 text-2xl font-bold mt-2 text-center">
                        <h3>Precisa desenvolver um projecto?</h3>
                      </div>
                      <small className="text-center">
                        Nossa equipe de engenheiros está pronta para te ajudar!
                      </small>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <div className="flex justify-center">
                        {" "}
                        <Button
                          as={Link}
                          color="primary"
                          href="#"
                          variant="flat"
                        >
                          Entrar em contacto
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
