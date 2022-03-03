<template src="./Accordion.html"></template>

<script>
export default {
  name: "Accordion",
  props: ["accord_props"], //Json com img e caracteristicas
  data: function () {
    return {};
  },

  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    },

    check(event) {
      let inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
        if (input.type == "checkbox") {
          if (input != event.target) {
            if (input.checked == true) input.checked = false;
          }
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("./Accordion.css");
</style>
