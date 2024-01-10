<template src="./Agendar.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import Accordion from "@/components/Accordion/Accordion.vue";

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
        unidade: null,
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
        icon: "success",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        title: "Agendamento feito com sucesso!",
      }).then(() => {
        location.reload();
      });
    },
  },
};
</script>

<style scoped src="./Agendar.css"></style>
