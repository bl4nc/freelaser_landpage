<template src="./Agendar.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import Accordion from "@/components/Accordion/Accordion.vue";

export default {
  name: "Agendar",
  components: {
    Navbar,
    Footer,
    WhatsappIcon,
    CarroselBanner,
    Accordion,
  },
  data: function () {
    return {
      imgs_pc: [{ img: "img/pg_agendar/banner_agendar.png" }],
      imgs_mb: [{ img: "img/pg_agendar/banner_agendar_mb.png" }],
    };
  },
};
</script>

<style scoped>
@import url("./Agendar.css");
</style>
