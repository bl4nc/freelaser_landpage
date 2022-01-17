<template src="./Lead.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import CardWithIcon from "@/components/CardWithIcon/CardWithIcon.vue";

export default {
  name: "Lead",
  components: {
    Navbar,
    Footer,
    WhatsappIcon,
    CardWithIcon
  },
};
</script>

<style scoped>
@import url("./Lead.css");
</style>
