<template src="./BaixarRelatorio.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardCaracteristicas from "@/components/CardCaracteristicas/CardCaracteristicas.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import axios from "../../plugins/axios";

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
      tk: {
        tk_us: this.$route.params.tk,
      },
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
      this.form.relatorio = document.getElementById("select_relatorio").value;
      window.open(
        `http://freelaser.com.br/teste/api/baixarRelatorio${this.form.relatorio}?data_inicial=${this.form.data_ini}&data_final=${this.form.data_fim}&us_tk=${this.tk.tk_us}`,
        // `http://localhost:9000/baixarRelatorio${this.form.relatorio}?data_inicial=${this.form.data_ini}&data_final=${this.form.data_fim}&us_tk=${this.tk.tk_us}`,
        "_blank"
      );
    },
  },
  mounted() {
    const router = this.$router;
    axios
      .post("../teste/api/authUs", this.tk, {
      // .post("../teste/api/insertFaleConosco", this.form)
      // .post("http://localhost:9000/authUs", this.tk, {
        "Content-Type": "application/json",
      })
      .then(function () {
      })
      .catch(function () {
       router.push("/");
      });
  },
};
</script>

<style scoped src="./BaixarRelatorio.css">
</style>
