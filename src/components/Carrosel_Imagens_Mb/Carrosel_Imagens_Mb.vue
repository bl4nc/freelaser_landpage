<template src="./Carrosel_Imagens_Mb.html"></template>

<script>
export default {
  name: "Carrosel_Imagens_Mb",
  props: ["imgs","pos"],
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
@import url("./Carrosel_Imagens_Mb.css");
</style>
