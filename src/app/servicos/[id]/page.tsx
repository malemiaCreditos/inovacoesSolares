"use client";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Servicos() {
  const params = useParams();
  const { id } = params;
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container lg:mx-auto lg:min-h-50vh my-12 p-2">
        {id === "Projectos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
                <Image
                  src="/projecto.png"
                  alt="Logo"
                  className="dark:invert"
                  width={500}
                  height={500}
                  priority
                />
              </motion.div>
            </div>
            <div>
              <h3 className="text-yellow-600 text-4xl drop-shadow-lg mb-4 font-bold sm:text-center">
                Projectos de Sistemas Solares
              </h3>
              <h3 className="mb-4 text-justify">
                Nosso serviço de Projectos de Sistemas Solares oferece soluções
                integradas e inovadoras para a implementação de sistemas de
                energia solar, atendendo desde pequenas residências até grandes
                empresas e indústrias. Combinamos tecnologia de ponta e uma
                equipe de especialistas qualificados para entregar projetos sob
                medida, adaptados às necessidades e condições específicas de
                cada cliente.
              </h3>
              <h3 className="text-yellow-600 text-2xl font-bold">
                Nossos serviços incluem:
              </h3>
              <ul className="list-disc">
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Análise de Viabilidade Técnica e Econômica:
                    </small>{" "}
                    Avaliamos o potencial energético do local, considerando a
                    posição geográfica, nível de radiação solar e a demanda
                    energética do cliente, garantindo que o investimento traga o
                    retorno esperado e reduza os custos de eletricidade a longo
                    prazo.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Design Técnico e Planejamento
                    </small>{" "}
                    Desenvolvemos o projeto técnico completo, incluindo a
                    escolha adequada de painéis fotovoltaicos, inversores e
                    outros componentes de alta qualidade. Garantimos que o
                    sistema seja projetado para maximizar a produção de energia,
                    mantendo os padrões de segurança e eficiência.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Design Técnico e Planejamento
                    </small>{" "}
                    Desenvolvemos o projeto técnico completo, incluindo a
                    escolha adequada de painéis fotovoltaicos, inversores e
                    outros componentes de alta qualidade. Garantimos que o
                    sistema seja projetado para maximizar a produção de energia,
                    mantendo os padrões de segurança e eficiência.
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        )}
        {id === "Fornecimento" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
                <Image
                  src="/fornecimento.png"
                  alt="Logo"
                  className="dark:invert"
                  width={500}
                  height={500}
                  priority
                />
              </motion.div>
            </div>
            <div>
              <h3 className="text-yellow-600 text-4xl drop-shadow-lg mb-4 font-bold sm:text-center">
                Fornecimento de Material para Sistemas Solares
              </h3>
              <h3 className="mb-4 text-justify">
                Oferecemos uma ampla gama de soluções especializadas em
                Fornecimento de Material para Sistemas Solares, atendendo às
                mais diversas necessidades de projetos residenciais, comerciais
                e industriais. Nossos produtos são rigorosamente selecionados de
                fabricantes renomados no mercado, garantindo alta eficiência,
                durabilidade e um excelente desempenho para cada sistema de
                energia solar instalado.
              </h3>
              <h3 className="text-yellow-600 text-2xl font-bold">
                Nossos materiais incluem:
              </h3>
              <ul className="list-disc">
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Painéis Solares Fotovoltaicos:
                    </small>{" "}
                    Fornecemos painéis solares de última geração, com alta
                    eficiência na conversão de energia solar em eletricidade.
                    Trabalhamos com diferentes capacidades e tecnologias
                    (monocristalinos, policristalinos e bifaciais) para atender
                    a qualquer tipo de demanda energética.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Inversores Solares
                    </small>{" "}
                    Oferecemos inversores on-grid, off-grid e híbridos, que
                    transformam a energia gerada pelos painéis solares em
                    eletricidade utilizável. Garantimos que nossos inversores
                    sejam compatíveis com sistemas de diferentes portes e
                    proporcionem máxima eficiência com mínima perda de energia.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Estruturas de Suporte e Fixação:
                    </small>{" "}
                    Nossas soluções de montagem incluem estruturas de suporte de
                    alta qualidade para telhados e superfícies planas,
                    projetadas para suportar condições climáticas adversas e
                    garantir a segurança e estabilidade dos painéis ao longo do
                    tempo.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Cabos e Conectores:
                    </small>{" "}
                    Fornecemos cabos fotovoltaicos e conectores específicos para
                    instalações solares, garantindo alta resistência e segurança
                    elétrica em todas as conexões, prevenindo perdas de
                    eficiência e riscos de curto-circuito.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Baterias para Sistemas de Armazenamento:
                    </small>{" "}
                    Trabalhamos com baterias de lítio e chumbo-ácido para
                    sistemas de armazenamento de energia, permitindo que a
                    eletricidade gerada durante o dia seja utilizada à noite ou
                    em momentos de menor geração solar.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Controladores de Carga:
                    </small>{" "}
                    Oferecemos controladores de carga para gerenciar e otimizar
                    o fluxo de eletricidade entre os painéis solares, as
                    baterias e o sistema de consumo, protegendo o sistema contra
                    sobrecargas e prolongando a vida útil dos componentes.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Acessórios e Equipamentos de Proteção:
                    </small>{" "}
                    Além dos principais componentes, fornecemos acessórios como
                    fusíveis, disjuntores, caixas de proteção e sistemas de
                    aterramento, essenciais para garantir a segurança elétrica e
                    a confiabilidade do sistema solar.
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        )}
        {id === "Instalacao" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
                <Image
                  src="/instalacao.png"
                  alt="Logo"
                  className="dark:invert"
                  width={1000}
                  height={1000}
                  priority
                />
              </motion.div>
            </div>
            <div>
              <h3 className="text-yellow-600 text-4xl drop-shadow-lg mb-4 font-bold sm:text-center">
                Instalação de Sistemas Solares
              </h3>
              <h3 className="mb-4 text-justify">
                Nosso serviço de Instalação de Sistemas Solares oferece soluções
                completas e personalizadas para transformar a energia solar em
                uma fonte de eletricidade eficiente e sustentável para
                residências, comércios e indústrias. Contamos com uma equipe de
                técnicos certificados e engenheiros especializados, garantindo
                que cada instalação seja feita com máxima qualidade, segurança e
                dentro dos prazos estipulados.
              </h3>
              <h3 className="text-yellow-600 text-2xl font-bold">
                Nossos serviços de instalação incluem:
              </h3>
              <ul className="list-disc">
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Consultoria Técnica Inicial:
                    </small>{" "}
                    Avaliamos as condições do local e as necessidades
                    energéticas do cliente para propor a melhor solução solar.
                    Esta etapa inclui visitas técnicas, análise do consumo de
                    energia e recomendações personalizadas sobre a capacidade e
                    tipo de sistema ideal para o espaço.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Projeto e Dimensionamento do Sistema:
                    </small>{" "}
                    Com base na análise preliminar, desenvolvemos o projeto
                    técnico detalhado do sistema solar, considerando fatores
                    como posição geográfica, ângulo de inclinação dos painéis,
                    sombreamento e área disponível para garantir a máxima
                    eficiência na geração de energia.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Integração com a Rede Elétrica (On-Grid):
                    </small>{" "}
                    Para projetos on-grid, conectamos o sistema solar à rede
                    elétrica local, permitindo que o cliente utilize a energia
                    solar gerada e, em alguns casos, venda o excedente de
                    energia para a concessionária.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Testes e Comissionamento:
                    </small>{" "}
                    Após a instalação, realizamos testes rigorosos para garantir
                    que todos os componentes estejam funcionando corretamente e
                    que o sistema esteja gerando a quantidade de energia
                    esperada. O cliente recebe um relatório detalhado de
                    desempenho e orientações sobre o uso do sistema.
                  </h3>
                </li>
                <li>
                  <h3 className="text-md">
                    <small className="font-bold text-xl">
                      Treinamento e Suporte ao Cliente:
                    </small>{" "}
                    Nossa equipe oferece treinamento ao cliente sobre o uso e
                    monitoramento do sistema, explicando como acompanhar a
                    geração de energia e identificar possíveis melhorias no
                    consumo. Além disso, disponibilizamos suporte técnico
                    contínuo para eventuais dúvidas ou problemas.
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
