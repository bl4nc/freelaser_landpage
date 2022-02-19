<template src="./BaixarRelatorio.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardCaracteristicas from "@/components/CardCaracteristicas/CardCaracteristicas.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";

export default {
  name: "BaixarRelatorio",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    CardCaracteristicas,
    WhatsappIcon,
  },
  data: function () {
    return {
      pass: this.$route.params.pass,
      hoje: this.$moment().format("YYYY-MM-DD"),
      form: {
        data_ini: "",
        data_fim: "",
        relatorio: null,
      },
    };
  },
  methods: {
    checarPass() {
      return this.pass;
    },

    baixarRelatorio() {
      this.form.data_ini = document.getElementById("ini").value;
      this.form.data_fim = document.getElementById("fim").value;
      this.form.relatorio = document.getElementById('select_relatorio').value
      console.log(this.form);
      window.open(
        `http://freelaser.com.br/teste/api/baixarRelatorio${this.form.relatorio}?data_inicial=${this.form.data_ini}&data_final=${this.form.data_fim}&passwd=adm_fl`,
        "_blank"
      );
    },
  },
  mounted() {
    if (this.checarPass() !== "adm___freeL") {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
@import url("./BaixarRelatorio.css");
</style>
