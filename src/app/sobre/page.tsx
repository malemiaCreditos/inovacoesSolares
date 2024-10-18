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
                    A Inovações Solares Comércio Geral & Serviços, Sociedade
                    Unipessoal, Limitada é uma empresa moçambicana sediada na
                    Av. Trabalho, nº 1235, Bairro da Malanga, Cidade de Maputo.
                    Nossa missão é fornecer soluções tecnológicas de energia
                    sustentável, com foco em sistemas de energia solar, para
                    atender às necessidades tanto de empresas quanto de
                    indivíduos.
                  </h3>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="Nossa Missão"
                      title="Nossa Missão"
                    >
                      <h3 className="mb-4 text-justify">
                        Desenvolver e aplicar soluções de energias sustentáveis
                        e de qualidade que respondam ás necessidades dos
                        clientes e do mercado, assim como de todos os parceiros,
                        gerando rentabilidade e sua satisfação.
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
                      <h3 className="mb-4 text-justify">
                        Os nossos valores ligados à excelência, inovação,
                        melhoria continua e honestidade, garantiram-nos
                        fidelizar maior parte da nossa carteira d clientes,
                        prestamos com dinamismo profissionalismo.
                      </h3>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="O que oferecemos"
                      title="O que oferecemos"
                    >
                      <h3 className="mb-4 text-justify">
                        Ser uma empresa revolucionária no país por meio dos
                        sistemas renováveis, tornando-se referência em
                        tecnologia de geração de energia.
                      </h3>
                    </AccordionItem>
                  </Accordion>
                  <h3 className="my-4 text-justify">
                    Com anos de experiência no sector de energia solar, nossa
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
      </div>
      <Footer />
    </main>
  );
}
