import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import listaProdutos from "../../../../public/lista";
import Image from "next/image";

export default function CaracteristicasSelected({ id }: any) {
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
    <div className="grid grid-cols-2 gap-4">
      <div className="ml-24 mt-6">
        <div className="text-gray-700 text-2xl font-bold mt-2">
          <p>Descrição do Produto</p>
        </div>
        {product.length > 0 &&
          product.map((item: any) => (
            <>
              <div className="text-yellow-600 text-4xl font-bold mt-2">
                <p>{item.nome}</p>
              </div>
              <div className="text-gray-700 text-xl text-justify mt-2">
                <small>{item.desc}</small>
              </div>
              <div className="text-gray-700 text-xl font-bold mt-4">
                <p>Ficha Técnica</p>
              </div>
              <div className="text-gray-700 text-xl text-justify">
                <small>
                  {item.caracteristica
                    .split(";")
                    .map((item2: any, idx: any) => (
                      <div key={idx}>
                        <span>- {item2}</span>
                        <br />
                      </div>
                    ))}
                </small>
              </div>
              {item.categoria === "Painel Solar" && (
                <>
                  <div className="text-gray-700 text-xl font-bold mt-4">
                    <p>Caracteristicas Mecânicas</p>
                  </div>
                  <div className="text-gray-700 text-xl text-justify">
                    <small>
                      {item.caracteristicaMecanicas
                        .split(";")
                        .map((item2: any, idx: any) => (
                          <div key={idx}>
                            <span>- {item2}</span>
                            <br />
                          </div>
                        ))}
                    </small>
                  </div>
                </>
              )}
              {item.categoria === "Inversores" && (
                <>
                  <div className="text-gray-700 text-xl font-bold mt-4">
                    <p>Saída DC</p>
                  </div>
                  <div className="text-gray-700 text-xl text-justify">
                    <small>
                      {item.saidaDC.split(";").map((item2: any, idx: any) => (
                        <div key={idx}>
                          <span>- {item2}</span>
                          <br />
                        </div>
                      ))}
                    </small>
                  </div>
                </>
              )}
              {item.categoria === "Inversores" && (
                <>
                  <div className="text-gray-700 text-xl font-bold mt-4">
                    <p>Entrada DC</p>
                  </div>
                  <div className="text-gray-700 text-xl text-justify">
                    <small>
                      {item.entradaDC.split(";").map((item2: any, idx: any) => (
                        <div key={idx}>
                          <span>- {item2}</span>
                          <br />
                        </div>
                      ))}
                    </small>
                  </div>
                </>
              )}
            </>
          ))}
      </div>
      <div className="max-w-xl p-6">
        {product.length > 0 &&
          product.map((item: any) => (
            <>
              <div className="flex flex-col">
                <Image
                  src={item.img}
                  alt="image"
                  width={200}
                  height={200}
                  className="rounded-2xl"
                />
                <div className="text-yellow-600 text-2xl font-bold mt-2">
                  <p>Informações Adicionais</p>
                </div>
                <div>
                  {item.categoria === "Baterias" && (
                    <>
                      {" "}
                      <Table aria-label="Caracteristica do Produto">
                        <TableHeader className="bg-white">
                          <TableColumn>.</TableColumn>
                          <TableColumn>.</TableColumn>
                        </TableHeader>
                        <TableBody>
                          <TableRow key="1">
                            <TableCell className="text-yellow-600">
                              Tensão Nominal
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.tensaoNominal || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="2">
                            <TableCell className="text-yellow-600">
                              Capacidade Nominal
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.capacidadeNominal || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="3">
                            <TableCell className="text-yellow-600">
                              Corrente Electrica
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.correnteCarga || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="4">
                            <TableCell className="text-yellow-600">
                              Máxima Corrente de Carga
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3> {item.maxCorrenteDescarga || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="5">
                            <TableCell className="text-yellow-600">
                              Voltagem de Carga
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.voltagemCarga || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="6">
                            <TableCell className="text-yellow-600">
                              Ciclo de Vida
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.cicloVida || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="7">
                            <TableCell className="text-yellow-600">
                              Peso
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.peso || ""}</h3>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  )}
                  {item.categoria === "Inversores" && (
                    <>
                      {" "}
                      <Table aria-label="Caracteristica do Produto">
                        <TableHeader className="bg-white">
                          <TableColumn>.</TableColumn>
                          <TableColumn>.</TableColumn>
                        </TableHeader>
                        <TableBody>
                          <TableRow key="1">
                            <TableCell className="text-yellow-600">
                              Peso
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.peso || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="2">
                            <TableCell className="text-yellow-600">
                              Dimensões
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.dimensões || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="3">
                            <TableCell className="text-yellow-600">
                              Marca
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.marca || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="4">
                            <TableCell className="text-yellow-600">
                              Potência
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3> {item.potencia || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="5">
                            <TableCell className="text-yellow-600">
                              Rede
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.rede || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="6">
                            <TableCell className="text-yellow-600">
                              Tensão
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.tensao || ""}</h3>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  )}
                  {item.categoria === "Painel Solar" && (
                    <>
                      {" "}
                      <Table aria-label="Caracteristica do Produto">
                        <TableHeader className="bg-white">
                          <TableColumn>.</TableColumn>
                          <TableColumn>.</TableColumn>
                        </TableHeader>
                        <TableBody>
                          <TableRow key="1">
                            <TableCell className="text-yellow-600">
                              Peso
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.peso || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="2">
                            <TableCell className="text-yellow-600">
                              Dimensões
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.dimensões || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="3">
                            <TableCell className="text-yellow-600">
                              Marca
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3>{item.marca || ""}</h3>
                            </TableCell>
                          </TableRow>
                          <TableRow key="4">
                            <TableCell className="text-yellow-600">
                              Potência
                            </TableCell>
                            <TableCell className="text-yellow-600">
                              <h3> {item.potencia || ""}</h3>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  )}
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
