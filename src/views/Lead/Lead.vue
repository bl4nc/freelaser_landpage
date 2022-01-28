<template src="./Lead.html"></template>
<script>
// @ is an alias to /src
import Footer_02 from "@/components/Footer_02/Footer_02.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import CardWithIcon from "@/components/CardWithIcon/CardWithIcon.vue";
import Navbar_03 from "@/components/Navbar_03/Navbar_03.vue";
import axios from "../../plugins/axios";

export default {
  name: "Lead",
  components: {
    Navbar_03,
    Footer_02,
    WhatsappIcon,
    CardWithIcon,
  },
  data: function () {
    return {
      form: {
        nome: null,
        email: null,
        celular: null,
        unidade: null,
        cidade: null,
      },
    };
  },
  methods: {
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
        .post("../teste/api/insertLead", this.form)
        .then(function (resp) {
          swal({
            icon: "success",
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            title: resp.data.message,
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("./Lead.css");
</style>
