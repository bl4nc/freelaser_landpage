<template src="./Depilacao_Feminina.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";


export default {
  name: "Depilacao_Feminina",
  components: {
    Navbar,
    Footer,
    CarroselBanner
  },
  data: function () {
    return {
      imgs_pc: ["img/pg_depilacao_a_laser/banner_dp_laser.png"],
      imgs_mb: ["img/pg_depilacao_a_laser/banner_dp_laser.png"],
    };
  },
};
</script>

<style scoped>
@import url("./Depilacao_Feminina.css");
</style>
