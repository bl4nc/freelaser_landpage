<template src="./Estetica.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardWithIcon from "@/components/CardWithIcon/CardWithIcon.vue";
import CardWithImage from "@/components/CardWithImage/CardWithImage.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";



export default {
  name: "Estetica",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    CardWithIcon,
    CardWithImage,
    WhatsappIcon
  },
  data: function () {
    return {
      imgs_pc: ["img/tratamentos_esteticos/CAPA.png"],
      imgs_mb: ["img/tratamentos_esteticos/CAPA_MB.png"],
      cards_data: [
        {
          img: "img/tratamentos_esteticos/card_1_img.png",
          titulo: "MÁSCARAS FACIAIS",
          texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        {
          img: "img/tratamentos_esteticos/card_2_img.png",
          titulo: "LIMPEZA DE PELE",
          texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        {
          img: "img/tratamentos_esteticos/card_3_img.png",
          titulo: "MASSAGEM",
          texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        {
          img: "img/tratamentos_esteticos/card_4_img.png",
          titulo: "PEELING DE DIAMANTE",
          texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
      ]
    };
  },
};
</script>

<style scoped>
@import url("./Estetica.css");
</style>
