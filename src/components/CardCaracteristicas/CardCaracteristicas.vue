<template src="./CardCaracteristicas.html"></template>

<script>
export default {
  name: "CardCaracteristicas",
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
