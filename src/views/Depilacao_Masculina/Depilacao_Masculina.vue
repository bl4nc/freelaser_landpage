<template src="./Depilacao_Masculina.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardCaracteristicas from "@/components/CardCaracteristicas/CardCaracteristicas.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";

export default {
  name: "Depilacao_Masculina",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    CardCaracteristicas,
    WhatsappIcon
    
  },
  data: function () {
    return {
      imgs_pc: ["img/pg_depilacao_a_laser/banner_dp_laser_1.png"],
      imgs_mb: ["img/pg_depilacao_a_laser/banner_dp_laser_1.png"],
      card_data: [
        {
          img: "img/pg_depilacao_a_laser/boneco_frente.png",
          caracteristicas: [
            {
              caracteristica: "ABDOME",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__ABDOME.png",
            },
            {
              caracteristica: "ANTEBRAÇO",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__ANTEBRAÇO.png",
            },
            {
              caracteristica: "AREOLAS",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__AREOLAS.png",
            },
            {
              caracteristica: "BASE DE PÊNIS",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__BASE DE PÊNIS.png",
            },
            {
              caracteristica: "JOELHOS",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__JOELHOS.png",
            },
            {
              caracteristica: "LINHA ALBA",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__LINHA ALBA.png",
            },
            {
              caracteristica: "MÃOS E DEDOS",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__MAOS E DEDOS.png",
            },
            {
              caracteristica: "MEIA PERNA",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__MEIA PERNA.png",
            },
            {
              caracteristica: "MEIO BRAÇO",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__MEIO BRAÇO.png",
            },
            {
              caracteristica: "PERNAS COMPLETAS",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__PERNAS COMPLETA.png",
            },
            {
              caracteristica: "PÉS E DEDOS",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__PES E DEDOS.png",
            },
            {
              caracteristica: "BRAÇOS COMPLETOS",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__PESCOÇO.png",
            },
            {
              caracteristica: "TORAX",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__TORAX.png",
            },
            {
              caracteristica: "VIRILHA MASCULINA",
              img: "img/pg_depilacao_a_laser/areas_m/frente/__VIRILHA MASCULINA.png",
            },
          ],
          titulo: "FRENTE",
        },
        {
          img: "img/pg_depilacao_a_laser/boneco_costas.png",
          caracteristicas: [
            {
              caracteristica: "ÂNUS",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__ÂNUS.png",
            },
            {
              caracteristica: "AXILAS",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__AXILAS.png",
            },
            {
              caracteristica: "COSTAS INFERIO",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__COSTAS INFERIOR.png",
            },
            {
              caracteristica: "COSTAS SUPERIOR",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__COSTAS SUPERIOR.png",
            },
            {
              caracteristica: "COXAS COMPLETAS",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__COXAS COMPLETAS.png",
            },
            {
              caracteristica: "GLUTEO",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__GLUTEO.png",
            },
            {
              caracteristica: "LOMBAR",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__LOMBAR.png",
            },
            {
              caracteristica: "NUCA",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__NUCA-35.png",
            },
            {
              caracteristica: "OMBROS",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__OMBROS.png",
            },
            {
              caracteristica: "ORELHAS",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__ORELHAS.png",
            },
            {
              caracteristica: "PREGA GLUTEA",
              img: "img/pg_depilacao_a_laser/areas_m/costas/__PREGA GLUTEA.png",
            },
          ],
          titulo: "COSTAS",
        },
        {
          img: "img/pg_depilacao_a_laser/boneco_rosto.png",
         caracteristicas: [
            {
              caracteristica: "BIGODE",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/BIGODE.png",
            },
            {
              caracteristica: "CABEÇA",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/CABEÇA.png",
            },
            {
              caracteristica: "CAVANHAQUE",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/CAVANHAQUE.png",
            },
            {
              caracteristica: "COSTELETAS",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/COSTELETAS.png",
            },
            {
              caracteristica: "FACE COMPLETA",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/FACE COMPLETA.png",
            },
            {
              caracteristica: "FACES LATERAIS",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/FACES LATERAIS.png",
            },
            {
              caracteristica: "FAIXA DE BARBA",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/FAIXA DE BARBA.png",
            },
            {
              caracteristica: "GLABELA",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/GLABELA.png",
            },
            {
              caracteristica: "NARIZ",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/NARIZ.png",
            },
            {
              caracteristica: "TESTA",
              img: "img/pg_depilacao_a_laser/areas_m/cabeca/TESTA.png",
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
@import url("./Depilacao_Masculina.css");
</style>
