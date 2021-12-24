<template src="./Lead.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";

export default {
  name: "Lead",
  components: {
    Navbar,
    Footer,
    WhatsappIcon,
  },
};
</script>

<style scoped>
@import url("./Lead.css");
</style>
