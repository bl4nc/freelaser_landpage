<template src="./Faq.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import Accordion from "@/components/Accordion/Accordion.vue";

export default {
  name: "Faq",
  components: {
    Navbar,
    Footer,
    WhatsappIcon,
    CarroselBanner,
    Accordion,
  },
  data: function () {
    return {
      imgs_pc: [{img:"img/pg_pgt_freq/banner_wb.png"}],
      imgs_mb: [{img:"img/pg_pgt_freq/banner_wb.png"}],
      duvidas_01: [
        {
          titulo: "Laser dói?",
          textos: [
            {
              texto:
                "Utilizamos tecnologias em que a ponteira resfriada causa analgesia tornando a sessão mais confortável.",
            },
          ],
          id: "d1",
        },
        {
          titulo: "Qual laser vocês usam?",
          textos: [
            {
              texto:
                "Utilizamos as 3 tecnologias mais modernas do mercado com as ponteiras resfriadas: Alexandrite, Diodo e Nd-YAG.",
            },
          ],
          id: "d1",
        },
        {
          titulo: "Quantas sessões são necessárias?",
          textos: [
            {
              texto:
                "Em média, 10 sessões. Contudo, em alguns casos esta quantidade pode não ser suficiente devido afatores hormonais e genéticos.",
            },
          ],

          id: "d1",
        },
        {
          titulo: "Gestante pode fazer depilação a laser?",
          textos: [
            {
              texto:
                "Apesar de não existir estudos contraindicando, não recomendamos devido às variações hormonais no período da gestação.",
            },
          ],

          id: "d1",
        },
        
        {
          titulo: "Com que idade posso iniciar o tratamento?",
          textos: [
            {
              texto:
                "Em meninas recomendamos após o primeiro ciclo menstrual devido a alterações hormonais e em meninos após a puberdade.",
            },
          ],

          id: "d1",
        },
        {
          titulo: "O laser pode ser aplicado em pele negra?",
          textos: [
            {
              texto:
                "Pode sim! A Freelaser dispõe de tecnologia que atende a pele negra com segurança, o NdYag.",
            },
          ],
          id: "d1",
        },
        {
          titulo: "Clareia a pele?",
          textos: [
            {
              texto:
                "A utilização de lâminas e cera machucam, irritam e escurecem a pele. Com a eliminação dos pelos de forma permanente, estes métodos agressivos não são mais necessários e além disso, a depilação a laser acaba com a foliculite. Todos estes fatores contribuem muito para uma pele mais clara e saudável.",
            },
          ],
          id: "d1",
        },
        {
          titulo: "Tive COVID. Posso fazer laser??",
          textos: [
            {
              texto: "Sim, após o término do tratamento medicamentoso.",
            },
          ],

          id: "d1",
        },
        {
          titulo: "Posso tomar sol?",
          textos: [
            {
              texto:
                "Sim. Pode tomar sol durante o tratamento, porém não pode estar bronzeado por pelo menos 10 dias antes de realizar a sessão, devido ao aumento da melanina, que é responsável pelo pigmento da pele e dos pelos.",
            },
          ],
          id: "d1",
        },
      ],
      duvidas_02: [
        {
          titulo: "Elimina pelo branco?",
          textos: [
            {
              texto:
                "Não, pois os pelos brancos têm ausência de melanina (responsável pelo pigmento da pele e dos pelos) e o laser tem atração justamente pela melanina dos pelos (bulbo capilar). Ainda não há tecnologia a laser disponível para a eliminação dos pelos brancos.",
            },
          ],

          id: "d2",
        },
        {
          titulo: "Com quanto tempo o resultado começa a aparecer?",
          textos: [
            {
              texto:
                "É possível notar redução de pelos desde a primeira sessão, com pelos mais finos.",
            },
          ],

          id: "d2",
        },
        {
          titulo: "Posso fazer em todas as partes do corpo?",
          textos: [
            {
              texto:
                "Sim! Exceto sobrancelhas, que requerem precisão na depilação para manutenção do seu formato. A depilação a laser pode ser feita em todas as regiões do corpo.",
            },
          ],
          id: "d2",
        },
        {
          titulo: "Qual o intervalo entre as sessões?",

          textos: [
            {
              texto:
                "Inicia com 30 dias e depois podem ter intervalos entre 45 a 90 dias, de acordo com o crescimento do pelo de cada indivíduo.",
            },
          ],
          id: "d2",
        },
        {
          titulo: "Pode fazer sessão menstruada?",
          textos: [
            {
              texto:
                "Sim. É necessário somente o uso de absorvente interno ou coletor. Porém, por ser um período que a mulher tem maior sensibilidade, pode causar algum desconforto.",
            },
          ],
          id: "d2",
        },
        {
          titulo: "O pelo “volta”?",
          id: "d2",
          textos: [
            {
              texto:
                "Os pelos atingidos pelo laser não voltam, pois, sua raiz é cauterizada. O que pode ocorrer é o crescimento de novos folículos pilosos, devido às variações hormonais ou características pessoais específicas.",
            },
          ],
        },
        {
          titulo:
            "Quais cuidados preciso ter ANTES da sessão de depilação a laser?",
          textos: [
            {
              texto:
                "✔️	Durante todo o tratamento de depilação a laser, é recomendado o uso de protetor solar na área, não utilizar cremes depilatórios e métodos que eliminam o pelo pela raiz como cera e pinça;",
            },
            {
              texto:
                "✔️	Recomendamos também a depilação com lâmina ou aparador de pelos, um dia antes da sessão. É necessário que o pelo esteja aparado rente a pele, para a realização das sessões com o laser;",
            },
            {
              texto:
                "✔️	Não pode estar fazendo uso de antibióticos. As sessões devem ser realizadas somente após 3 dias (no mínimo) da finalização do tratamento;",
            },
            {
              texto:
                "✔️	Suspender o uso de creme com ácidos tópicos na região a ser tratada 7 dias antes da sessão de laser;",
            },
            {
              texto:
                "✔️	Em caso de vacina, só poderá realizar a sessão após 7 dias;",
            },
            {
              texto:
                "✔️	É recomendado não se expor diretamente ao sol nos últimos 15 dias que antecedem sua sessão;",
            },
            {
              texto:
                "✔️	Recomendamos que a região a ser tratada esteja hidratada e integra para realização da sessão;",
            },
            {
              texto:
                "✔️	Não recomendamos realizar descoloração de pelos durante o tratamento na região contratada",
            },
          ],
          id: "d2",
        },
        {
          titulo:
            "Quais cuidados preciso ter APÓS a sessão de depilação a laser?",
          textos: [
            {
              texto:
                "📌 Nas primeiras 24h:",
            },
            {
              texto:
                "✔️	Hidratar a região tratada com pomadas e/ou cremes regeneradores;",
            },
            {
              texto:
                "✔️	Não tomar banho com água muito quente ou vapor como sauna, a fim de evitar sensibilizações pós-procedimento;",
            },
            {
              texto:
                "✔️	Evitar utilizar roupas apertadas;",
            },
            {
              texto:
                "✔️	Evitar atividades físicas;",
            },
            {
              texto:
                "✔️	Não utilizar na área tratada: cosméticos, desodorantes, hidratantes ou loções que contenham em sua formulação álcool, ácidos ou vitamina A ou uso de creme com ácidos tópicos na região a ser tratada.",
            },
          ],
          id: "d2",
        },
        {
          titulo: "É caro? Aceitam cartão?",
          id: "d2",
          textos: [
            {
              texto:
                "A depilação a laser representa um investimento muito menor quando comparado aos métodos tradicionais, pois é um método de longa duração e eficaz.",
            },
              {
              texto:
                "Aceitamos todos os cartões, inclusive crédito recorrente, que não ocupa o limite do seu cartão.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("./Faq.css");
</style>
