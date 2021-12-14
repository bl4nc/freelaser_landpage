<template src="./Onde_Estamos.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import Localizacao from "@/components/Localizacao/Localizacao.vue";

export default {
  name: "Onde_Estamos",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    Localizacao,
  },
  data: function () {
    return {
      imgs_pc: ["img/Onde_estamos/Banner_web.png"],
      imgs_mb: ["img/Onde_estamos/Banner_mb.png"],
      localizacoes: [
        {
          imgs_mb: [
            {
              img: "img/Onde_estamos/galeria_mb.png",
            },
            {
              img: "img/Onde_estamos/galeria_mb.png",
            },
          ],
          img: "img/Onde_estamos/galeria.png",
          localizacao: "Shopping Bela vista",
          horario: "Das XXh as XXh",
          telefone: "(71) 3333-3333",
          whatsapp: "(71) 9.9999-9999",
          endereco: "Endereço completo",
        },
        {
          imgs_mb: [
            {
              img: "img/Onde_estamos/galeria_mb.png",
            },
            {
              img: "img/Onde_estamos/galeria_mb.png",
            },
          ],
          img: "img/Onde_estamos/galeria.png",
          localizacao: "Shopping Salvador",
          horario: "Das XXh as XXh",
          telefone: "(71) 3333-3333",
          whatsapp: "(71) 9.9999-9999",
          endereco: "Endereço completo",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("./Onde_Estamos.css");
</style>
