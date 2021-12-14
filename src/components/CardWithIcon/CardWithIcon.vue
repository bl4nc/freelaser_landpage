<template src="./CardWithIcon.html"></template>

<script>
export default {
  name: "CardWithIcon",
  props: ["icone", "titulo","texto"],
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
@import url("./CardWithIcon.css");
</style>
