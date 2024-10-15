"use client";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Sobre() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container lg:mx-auto lg:min-h-50vh my-12">
        <h3 className="text-yellow-600 text-4xl drop-shadow-lg mb-4 font-bold sm:text-center">
          Sobre Nós
        </h3>
        <div className="flex justify-center">
          <div className="w-1/2">
            <Card>
              <CardBody>
                <div className="p-4">
                  <h3 className="mb-4 text-justify">
                    Somos uma empresa especializada em soluções de energia solar
                    focada em transformar o modo como nossos clientes geram e
                    consomem energia. Com uma forte missão de promover a
                    sustentabilidade e a independência energética, oferecemos
                    serviços completos que vão desde o fornecimento de material,
                    projetos personalizados, até a instalação e manutenção de
                    sistemas solares para residências, comércios e indústrias.
                  </h3>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="Nossa Missão"
                      title="Nossa Missão"
                    >
                      <h3 className="mb-4 text-justify">
                        Nosso objetivo é liderar a transição para fontes de
                        energia renováveis, proporcionando aos nossos clientes
                        soluções acessíveis, eficientes e ambientalmente
                        responsáveis. Acreditamos no poder da energia solar como
                        uma ferramenta crucial para enfrentar os desafios
                        ambientais globais e reduzir a dependência de
                        combustíveis fósseis.
                      </h3>
                      <h3>O que nos diferencia:</h3>
                      <div className="m-2">
                        <ul className="list-disc">
                          <li>
                            <h3 className="text-md">
                              Excelência Técnica: Contamos com uma equipe de
                              engenheiros, técnicos e consultores altamente
                              capacitados e certificados, que trabalham com os
                              mais altos padrões de qualidade e segurança.
                            </h3>
                          </li>
                          <li>
                            <h3 className="text-md">
                              Soluções Personalizadas: Cada cliente tem
                              necessidades específicas. Oferecemos soluções sob
                              medida, adaptadas às condições de cada projeto,
                              para garantir a máxima eficiência energética e
                              retorno sobre o investimento.
                            </h3>
                          </li>
                          <li>
                            <h3 className="text-md">
                              Parcerias com os Melhores Fornecedores:
                              Trabalhamos com os principais fabricantes de
                              equipamentos solares do mercado, garantindo que
                              todos os materiais fornecidos tenham alta
                              durabilidade, inovação tecnológica e garantias
                              estendidas.
                            </h3>
                          </li>
                          <li>
                            <h3 className="text-md">
                              Atendimento Completo: Oferecemos um serviço
                              completo que acompanha o cliente desde a fase de
                              planejamento até o monitoramento contínuo do
                              sistema após a instalação. Nosso suporte técnico é
                              dedicado e sempre disponível para garantir que seu
                              sistema opere com a máxima eficiência.
                            </h3>
                          </li>
                        </ul>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Nossos Valores"
                      title="Nossos Valores"
                    >
                      <div className="m-2">
                        <ul className="list-disc">
                          <li>
                            <h3 className="text-md">
                              Sustentabilidade: Acreditamos que a energia solar
                              é parte da solução para um futuro mais
                              sustentável, e nos dedicamos a oferecer produtos e
                              serviços que ajudem a reduzir o impacto ambiental
                              e a promover uma economia de energia limpa.
                            </h3>
                          </li>
                          <li>
                            <h3 className="text-md">
                              Inovação: Estamos sempre na vanguarda da
                              tecnologia solar, adotando as últimas inovações
                              para garantir que nossos clientes tenham acesso
                              aos sistemas mais modernos e eficientes
                              disponíveis no mercado.
                            </h3>
                          </li>
                          <li>
                            <h3 className="text-md">
                              Compromisso com a Qualidade: Nossa prioridade é
                              garantir que cada projeto seja executado com
                              precisão e excelência. Desde o fornecimento de
                              materiais até a instalação e suporte, trabalhamos
                              com atenção aos detalhes e rigor técnico.
                            </h3>
                          </li>
                        </ul>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="O que oferecemos"
                      title="O que oferecemos"
                    >
                      <div className="m-2">
                        <ul className="list-disc">
                          <li>
                            <h3 className="text-md">
                              Projetos de Sistemas Solares: Desenvolvemos
                              soluções personalizadas, otimizadas para atender
                              às necessidades energéticas de nossos clientes,
                              com foco em eficiência e sustentabilidade.
                            </h3>
                          </li>
                          <li>
                            <h3 className="text-md">
                              Fornecimento de Material: Fornecemos uma vasta
                              gama de produtos de alta qualidade, incluindo
                              painéis solares, inversores, baterias, cabos e
                              estruturas de montagem.
                            </h3>
                          </li>
                          <li>
                            <h3 className="text-md">
                              Instalação e Manutenção: Nossa equipe experiente
                              garante a instalação segura e eficiente de
                              sistemas solares, além de oferecer monitoramento e
                              manutenção para assegurar a máxima vida útil dos
                              equipamentos.
                            </h3>
                          </li>
                        </ul>
                      </div>
                    </AccordionItem>
                  </Accordion>
                  <h3 className="my-4 text-justify">
                    Com anos de experiência no setor de energia solar, nossa
                    empresa se orgulha de ser uma referência em soluções
                    sustentáveis e inovadoras. Estamos comprometidos em ajudar
                    nossos clientes a fazer uma transição tranquila para a
                    energia solar, promovendo uma economia energética mais
                    eficiente e um futuro mais verde para todos.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 gap-4 my-12">
          <div className="flex justify-center">
            <Card>
              <CardBody>1</CardBody>
            </Card>
          </div>
          <div className="flex justify-center">1</div>
          <div className="flex justify-center">1</div>
        </div> */}
      </div>
      <Footer />
    </main>
  );
}
