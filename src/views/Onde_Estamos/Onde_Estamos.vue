<template src="./Onde_Estamos.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import Localizacao from "@/components/Localizacao/Localizacao.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";

export default {
  name: "Onde_Estamos",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    Localizacao,
    WhatsappIcon,
  },
  data: function () {
    return {
      imgs_pc: [{img:"img/Onde_estamos/Banner_web.png"}],
      imgs_mb: [{img:"img/Onde_estamos/Banner_mb.png"}],
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
          horario: `Segunda à sábado: Das 09:00h às 22:00h
                    Domingos: Das 13:00h às 21:00h`,
          telefone: "(71) 3039-0007",
          whatsapp: "(71) 9.9970-0077",
          link_whats_web: "https://api.whatsapp.com/send?phone=557199970-0077",
          endereco:
            "Al. Euvaldo Luz, 92 – Shopping Bela Vista, Piso L2 – Loja L 31.2 - Horto Bela Vista, Salvador/BA.",
          link_localizacao: "https://goo.gl/maps/hPdZW7mGMkGCvq8e8",
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
          horario: `Segunda à sábado: Das 09:00h às 22:00h
                    Domingos: Das 13:00h às 21:00h`,
          telefone: "(71) 3039-0007",
          whatsapp: "(71) 9.9970-0077",
          link_whats_web: "https://api.whatsapp.com/send?phone=5571999700077",
          endereco:
            "Avenida Tancredo Neves, 3133 – Salvador Shopping, 1° Piso - Loja 1153 - Caminho das Árvores, Salvador/BA.",
          link_localizacao: "https://goo.gl/maps/88Y37zMySgshDhD17",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("./Onde_Estamos.css");
</style>
