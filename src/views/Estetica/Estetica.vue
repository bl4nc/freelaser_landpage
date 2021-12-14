<template src="./Estetica.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardWithIcon from "@/components/CardWithIcon/CardWithIcon.vue";



export default {
  name: "Estetica",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    CardWithIcon
  },
  data: function () {
    return {
      imgs_pc: ["img/tratamentos_esteticos/CAPA.png"],
      imgs_mb: ["img/tratamentos_esteticos/CAPA.png"],
    };
  },
};
</script>

<style scoped>
@import url("./Estetica.css");
</style>
