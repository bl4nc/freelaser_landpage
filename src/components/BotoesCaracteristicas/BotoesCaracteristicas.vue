<template src="./BotoesCaracteristicas.html"></template>

<script>
export default {
  name: "BotoesCaracteristicas",
  props: ["caracteristicas", "tipo"], //Json
  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    },
    data: function () {},
    // this.caracteristicas[0].img
    mudar_imagem(img) {
      let el_img = this.$el.closest('div').parentNode.querySelector('img')
      el_img.src = this.getImgUrl(img);
    },
  },
};
</script>

<style scoped>
@import url("./BotoesCaracteristicas.css");
</style>
