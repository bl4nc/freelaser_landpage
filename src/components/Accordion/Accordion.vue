<template src="./Accordion.html"></template>

<script>
export default {
  name: "Accordion",
  props: ["accord_props"], //Json com img e caracteristicas
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
@import url("./Accordion.css");
</style>
