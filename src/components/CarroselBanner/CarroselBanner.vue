<template src="./CarroselBanner.html"></template>

<script>
export default {
  name: "CarroselBanner",
  props: ["imgs_pc", "imgs_mb"],
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
@import url("./CarroselBanner.css");
</style>
