const listaProdutos = [
  {
    id: "1",
    categoria: "Inversores",
    activeStar: "3",
    NunActiveStar: "2",
    nome: "Inversor Solax Trifásico 15000W / 23.9A MPPT Duplo",
    preco: "MZN 55.000,00",
    img: "/inversor.png",
    peso: "32 kg",
    dimensões: "25 × 45 × 60 cm",
    marca: "Solax",
    potencia: "15000",
    rede: "Trifásica",
    tensao: "380 V",
    caracteristica:
      "Ampla faixa de tensão; Tela LCD Touch; Monitoramento Online; Eficiência máxima de até 98,3%.",
    saidaDC:
      "Potência AC nominal: 15000; Potencia AC maxima: 16500; Tensão nominal da rede (faixa de tensão AC): 230/240: 310~480; Frequência / faixa nominal da rede: 50/60,+-5; Corrente AC nominal: 21.7; Corrente AC maxima: 23.9; Fator de potência de deslocamento: 0.8 conduzindo ~ 0.8 atrasado; THDI, potência nominal: <3.",
    entradaDC:
      "Potencia Maxima de Entrada: 22500Wp; Tensão maxima DC: 1000v; Tensão de Operação nominal DC: 600v; Corrente máxima de entrada: 12/24a; Corrente máxima de curto-circuito: 14/28a; Faixa de tensão MPPT: 160-850v; Iniciar tensão operacional: 180v.",
    desc: "A Solax desenvolveu uma linha de inversores monofásicos incomparáveis na indústria por sua qualidade, confiabilidade e eficiência. Os inversores monofásicos Solax 15000W possuem uma ampla faixa de tensão MPPT para permitir uma maior captação de energia e têm uma tensão máxima de entrada de 580 V, com uma eficiência máxima de 98,3%. Além disso, os inversores monofásicos Solax são classificados como IP65, não têm ventilador interno e vêm com WIFI plug & play.",
  },
  {
    id: "2",
    categoria: "Baterias",
    activeStar: "1",
    NunActiveStar: "4",
    nome: "Bateria AGM Ecosolar 150Ah C100 12V",
    preco: "MZN 22.000,00",
    img: "/bateria.png",
    tensaoNominal: "25.6 V",
    capacidadeNominal: "1000 Ah",
    correnteCarga: "50 A",
    maxCorrenteDescarga: "50 A",
    voltagemCarga: "28.4 V",
    cicloVida: ">4500 ciclos @0.5C 80% DOD",
    dimensoes: "530*207*215 (LxWxH em mm)",
    peso: "20 kg",
    caracteristica:
      "Medidas: 33 x 17,5 x 22 / 22,5 cm  (Comprimento x Largura x Altura / Altura com terminais colocados); Peso: 29 Kg; Voltagem: 12V; Marca: Ecosolar; Fabricadas com tecnologia hermética VRLA; Tipo de bateria: AGM; Não requer manutenção",
    desc: "A bateria AGM de 150Ah C100 de capacidade (110Ah C10) e 12V fabricada pela marca europeia Ecosolar. É selada e não necessita de nenhum tipo de manutenção. As suas medidas e tamanho fazem com que seja ideal para o uso em embarcações ou caravanas nas quais o espaço seja limitado. Esta bateria AGM, ao contrário das baterias básicas solares monoblock abertas, suportam, sem qualquer problema, os picos de arranque dos aparelhos com motor ou de electrodomésticos e não prejudica a sua vida útil, sendo que optimiza o seu rendimento. Foi desenhada para armazenar a energia gerada nos painéis solares da instalação de energia solar. Uma vez recebido o pagamento, é feito o envio de forma gratuita através da agência de transporte com serviço 24h. Com a garantia da Damia Solar!",
  },
  {
    id: "3",
    activeStar: "3",
    categoria: "Painel Solar",
    NunActiveStar: "2",
    nome: "Módulo Solar Osda – 585W TOPCON",
    preco: "MZN 25.300,00",
    img: "/painelSolar.png",
    peso: "27,4 kg",
    dimensões: "227 × 113 × 30 cm",
    marca: "OSDA",
    potencia: "585w",
    caracteristica:
      "Tipo: Monocristalino Half Cell; Potência Máxima – Pmax (W): 585W; Tensão de Circuito Aberto – Voc (V): 51.16± 3%; Corrente de Curto Circuito – Isc (A): 14.55± 3%; Tensão em Máxima Potência – Vmp (V): 42,52; Corrente em Máxima Potência – Imp (A): 13,76; Eficiência Máxima do Módulo: 22.65%.",
    caracteristicaMecanicas:
      "Número de células: 144; Dimensões do módulo: 2278mm C x 1134mmL x 30mm; Peso: 27.4 kg; Capa Frontal: Transmissão de 3,2 mm, revestimento anti-reflexo; Quadro: Liga de alumínio anodizado; Caixa de Conexão: IP68/IP67 3diodes; Cabo: 4,0 mm2 cabo 55cm (incluindo conector MC4); Conector: MC4 ou compatível com MC4.",
    desc: "O Módulo Osda é Monocristalino Half-Cell de 144 células 585W. Este módulo é ideal para uso em sistemas conectados à rede (grid-tied) e também sistemas isolados com baterias (off-grid). Possui um design e processo de produção avançado, garantindo um alto rendimento e durabilidade. Oferece alta eficiência de até 22,65%, garantindo alto aproveitamento da radiação solar a longo prazo.",
  },
];

export default listaProdutos;
