<template src="./Quem_Somos.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";

export default {
  name: "Quem_Somos",
  components: {
    Navbar,
    Footer,
    WhatsappIcon,
  },

  methods: {

    beforeCreate(){
      console.log('Entrei')
      window.scrollTo(0, 0);
    }
  },
};
</script>

<style scoped>
@import url("./Quem_Somos.css");
</style>
