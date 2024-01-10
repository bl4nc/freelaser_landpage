<template src="./Fale_conosco.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import Accordion from "@/components/Accordion/Accordion.vue";

export default {
  name: "Fale_conosco",
  components: {
    Navbar,
    Footer,
    WhatsappIcon,
    CarroselBanner,
    Accordion,
  },
  data: function () {
    return {
      form: {
        nome: null,
        email: null,
        celular: null,
        mensagem: null,
        assunto: null,
      },
    };
  },

  methods: {
    setAssunto(el) {
      this.form.assunto = el.target.value;
    },
    SendForm() {
      const swal = this.$swal;
       swal({
            icon: "success",
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            title: "Email enviado com sucesso.",
          }).then(() => {
            location.reload();
          });
    },
  },
};
</script>

<style scoped src="./Fale_conosco.css">
</style>
