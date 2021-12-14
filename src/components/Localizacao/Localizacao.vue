<template src="./Localizacao.html"></template>

<script>
import Carrosel_Imagens_Mb from "@/components/Carrosel_Imagens_Mb/Carrosel_Imagens_Mb.vue";

export default {
   components: {
    Carrosel_Imagens_Mb,
   
  },
  name: "Localizacao",
  props: ["infomarcoes"], //Json com img, titulo, texto
  data: function () {
    return {};
  },

  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    },

    check_pos(pos) {
      if (pos / 2 == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
@import url("./Localizacao.css");
</style>
