<template src="./Depilacao_Masculina.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";

export default {
  name: "Depilacao_Masculina",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
  },
  data: function () {
    return {
      imgs_pc: ["img/pg_depilacao_a_laser/banner_dp_laser_1.png"],
      imgs_mb: ["img/pg_depilacao_a_laser/banner_dp_laser_1.png"],
    };
  },
};
</script>

<style scoped>
@import url("./Depilacao_Masculina.css");
</style>
