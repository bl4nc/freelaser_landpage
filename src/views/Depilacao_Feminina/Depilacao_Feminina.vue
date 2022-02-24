<template src="./Depilacao_Feminina.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardCaracteristicas from "@/components/CardCaracteristicas/CardCaracteristicas.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";

export default {
  name: "Depilacao_Feminina",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    CardCaracteristicas,
    WhatsappIcon,
  },
  data: function () {
    return {
      imgs_pc: [{img:"img/pg_depilacao_a_laser/banner_dp_laser.png"}],
      imgs_mb: [{img:"img/pg_depilacao_a_laser/banner_dp_laser.png"}],
      card_data: [
        {
          img: "img/pg_depilacao_a_laser/boneca_frente.png",
          caracteristicas: [
            {
              caracteristica: "ANTEBRAÇOS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_ANTEBRAÇOS.png",
            },
            {
              caracteristica: "ANTERIOR DE COXAS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_Coxas1.png",
            },
            {
              caracteristica: "ARÉOLAS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_AREOLAS.png",
            },
            {
              caracteristica: "BARRIGA",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_BARRIGA.png",
            },
            {
              caracteristica: "BRAÇOS COMPLETOS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_BRAÇOSCOMP.png",
            },
            {
              caracteristica: "COXAS COMPLETAS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_COXAS2.png",
            },
            {
              caracteristica: "JOELHOS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_JOELHOS.png",
            },
            {
              caracteristica: "MEIA PERNA",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_MEIAPERNAS.png",
            },
            {
              caracteristica: "MEIO BRAÇOS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_MEIOBRAC.png",
            },
            {
              caracteristica: "PERNAS INTEIRAS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_PERNASIN.png",
            },
            {
              caracteristica: "PÉS E DEDOS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_PESDEDOS.png",
            },
            {
              caracteristica: "PESCOÇO",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_PESCOC.png",
            },
            {
              caracteristica: "SEIOS",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_SEIO.png",
            },
            {
              caracteristica: "VIRILHA BIQUÍNI",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_VIRILHAB.png",
            },
             {
              caracteristica: "VIRILHA ÍNTIMA",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_VIRILHAI.png",
            },
             {
              caracteristica: "VIRILHA COMPLETA",
              img: "img/pg_depilacao_a_laser/areas_f/frente/-_VIRILHACOMPL.png",
            },
          ],
          titulo: "FRENTE",
        },
        {
          img: "img/pg_depilacao_a_laser/boneca_costas.png",
          caracteristicas: [
            {
              caracteristica: "ÂNUS",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_ANUS.png",
            },
            {
              caracteristica: "AXILAS",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_AXILAS.png",
            },
            {
              caracteristica: "GLÚTEOS",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_GLUTEOS.png",
            },
            {
              caracteristica: "INTERNO DE COXAS",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_INTERNODECOXAS.png",
            },
            {
              caracteristica: "LATERAL DE COXAS",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_LATERALDECOXAS.png",
            },
            {
              caracteristica: "LOMBAR",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_LOMBAR.png",
            },
            {
              caracteristica: "MÃOS E DEDOS",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_MAOSEDEDO.png",
            },
            {
              caracteristica: "NUCA",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_NUCA.png",
            },
            {
              caracteristica: "ORELHAS",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_ORELHAS.png",
            },
            {
              caracteristica: "POSTERIOR DE COXAS",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_POSTERIORDECOXAS.png",
            },
            {
              caracteristica: "PREGA GLÚTEA",
              img: "img/pg_depilacao_a_laser/areas_f/costas/-_PREGAGLUTEA.png",
            },
          ],
          titulo: "COSTAS",
        },
        {
          img: "img/pg_depilacao_a_laser/boneca_rosto.png",
          caracteristicas: [
            {
              caracteristica: "BUÇO",
              img: "img/pg_depilacao_a_laser/areas_f/Cabeca/-_BUÇO.png",
            },
            {
              caracteristica: "COSTELETAS",
              img: "img/pg_depilacao_a_laser/areas_f/Cabeca/-_COSTELETAS.png",
            },
            {
              caracteristica: "FACE COMPLETA",
              img: "img/pg_depilacao_a_laser/areas_f/Cabeca/-_FACE COMPLETA.png",
            },
            {
              caracteristica: "FACES LATERAIS",
              img: "img/pg_depilacao_a_laser/areas_f/Cabeca/-_FACES LATERAIS.png",
            },
            {
              caracteristica: "GLABELA",
              img: "img/pg_depilacao_a_laser/areas_f/Cabeca/-_GLABELA.png",
            },
            {
              caracteristica: "NARIZ",
              img: "img/pg_depilacao_a_laser/areas_f/Cabeca/-_NARIZ.png",
            },
            {
              caracteristica: "QUEIXO",
              img: "img/pg_depilacao_a_laser/areas_f/Cabeca/-_QUEIXO.png",
            },
            {
              caracteristica: "TESTA",
              img: "img/pg_depilacao_a_laser/areas_f/Cabeca/-_TESTA.png",
            },
          ],
          titulo: "ROSTO",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("./Depilacao_Feminina.css");
</style>
