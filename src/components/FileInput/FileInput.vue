<template src="./FileInput.html"></template>

<script>
export default {
  name: "FileInput",

  methods: {
    higthlight_on() {
      document
        .querySelector(".area-upload .label-upload")
        .classList.add("highlight");
    },
    higthlight_off() {
      document
        .querySelector(".area-upload .label-upload")
        .classList.remove("highlight");
    },
    alterar_texto(el) {
      let texto_arquivo_input = document.getElementById("_texto_arquivo");
      let arquivo = el.target.files[0];
      texto_arquivo_input.innerHTML = arquivo.name;
    },
  },
};
</script>

<style scoped src="./FileInput.css">
</style>
