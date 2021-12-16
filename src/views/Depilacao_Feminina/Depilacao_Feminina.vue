<template src="./Depilacao_Feminina.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardCaracteristicas from "@/components/CardCaracteristicas/CardCaracteristicas.vue";

export default {
  name: "Depilacao_Feminina",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    CardCaracteristicas,
  },
  data: function () {
    return {
      imgs_pc: ["img/pg_depilacao_a_laser/banner_dp_laser.png"],
      imgs_mb: ["img/pg_depilacao_a_laser/banner_dp_laser.png"],
      card_data: [
        {
          img: "img/pg_depilacao_a_laser/boneca_frente.png",
          caracteristicas: [
            "BUÇO",
            "ORELHAS",
            "NARIZ",
            "QUEIXO",
            "NUCA",
            "VIRILHA",
            "AXILAS",
            "BRAÇOS",
            "MÃOS E DEDOS",
            "PEITORAL",
            "ABDOMÊN",
            "LINHA ALBA",
            "PERNA INTEIRA",
            "MEIA PERNA",
          ],
          titulo: "FRENTE",
        },
        {
          img: "img/pg_depilacao_a_laser/boneca_costas.png",
          caracteristicas: [
            "BUÇO",
            "ORELHAS",
            "NARIZ",
            "QUEIXO",
            "NUCA",
            "VIRILHA",
            "AXILAS",
            "BRAÇOS",
            "MÃOS E DEDOS",
            "PEITORAL",
            "ABDOMÊN",
            "LINHA ALBA",
            "PERNA INTEIRA",
            "MEIA PERNA",
          ],
          titulo: "COSTAS",
        },
        {
          img: "img/pg_depilacao_a_laser/boneca_rosto.png",
          caracteristicas: [
            "BUÇO",
            "ORELHAS",
            "NARIZ",
            "QUEIXO",
            "NUCA",
            "VIRILHA",
            "AXILAS",
            "BRAÇOS",
            "MÃOS E DEDOS",
            "PEITORAL",
            "ABDOMÊN",
            "LINHA ALBA",
            "PERNA INTEIRA",
            "MEIA PERNA",
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
