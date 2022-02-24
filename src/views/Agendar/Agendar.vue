<template src="./Agendar.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import Accordion from "@/components/Accordion/Accordion.vue";
import axios from "../../plugins/axios";

export default {
  name: "Agendar",
  components: {
    Navbar,
    Footer,
    WhatsappIcon,
    CarroselBanner,
    Accordion,
  },
  data: function () {
    return {
      imgs_pc: [{ img: "img/pg_agendar/banner_agendar.png" }],
      imgs_mb: [{ img: "img/pg_agendar/banner_agendar_mb.png" }],
      form: {
        nome: null,
        email: null,
        celular: null,
        mensagem: null,
        cidade: null,
        unidade:null,
      },
    };
  },

  methods: {
    setUnidade(el) {
      this.form.unidade = el.target.value;
    },
    SendForm() {
      const swal = this.$swal;
      swal({
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        title: "Enviando",
        html: `
        <div class="spinner-border mt-2 mb-2" style="width: 3rem; height: 3rem; overflow:hidden;" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        `,
      });
      axios
        // .post("../teste/api/insertAgendamento", this.form)
        .post("http://localhost:9000/insertAgendamento", this.form)
        .then(function (resp) {
          swal({
            icon: "success",
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            title: resp.data.message,
          }).then(() => {
            location.reload();
          });
        })
        .catch(function (err) {
          swal({
            icon: "error",
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            title: err,
          });
        });
    },
  },
};
</script>

<style scoped src="./Agendar.css">
</style>
