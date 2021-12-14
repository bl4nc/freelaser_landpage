<template src="./CardWithImage.html"></template>

<script>
export default {
  name: "CardWithImage",
  props: ["card_props"], //Json com img, titulo, texto
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
@import url("./CardWithImage.css");
</style>
