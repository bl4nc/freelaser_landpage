<template src="./CardCaracteristicas.html"></template>

<script>

import BotoesCaracteristicas from "@/components/BotoesCaracteristicas/BotoesCaracteristicas.vue";


export default {
  name: "CardCaracteristicas",
  components: {
   BotoesCaracteristicas
  },
  props: ["card_props"], //Json com img e caracteristicas
  data: function () {
    return {
    };
  },
  
  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    },
  },
};
</script>

<style scoped>
@import url("./CardCaracteristicas.css");
</style>
