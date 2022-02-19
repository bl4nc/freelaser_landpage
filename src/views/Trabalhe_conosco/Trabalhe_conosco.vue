<template src="./Trabalhe_conosco.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import FileInput from "@/components/FileInput/FileInput.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import Accordion from "@/components/Accordion/Accordion.vue";
import axios from "../../plugins/axios";

export default {
  name: "Trabalhe_conosco",
  components: {
    Navbar,
    FileInput,
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
        vaga: null,
        anexo: null,
      },
    };
  },

  methods: {
    uploadFile() {
      const swal = this.$swal;
      swal
        .fire({
          icon: "info",
          title: "Confirmação de segurança",
          text: "Você tem certeza?",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showCancelButton: true,
          confirmButtonText: "Confirmar",
          cancelButtonText: "Cancelar",
        })
        .then((result) => {
          if (result.isConfirmed) {
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
            const formData = new FormData();
            let arquivo = document.getElementById(`upload_file`);
            formData.append("file", arquivo.files[0]);
            formData.append("nome", this.form.nome);
            formData.append("email", this.form.email);
            formData.append("celular", this.form.celular);
            formData.append("vaga", this.form.vaga);
            axios
              .post(
                `../teste/api/enviarDadosTrabalheConosco`,
                // "http://localhost:9000/enviarDadosTrabalheConosco",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              )
              .then(function (resp) {
                if (resp.data.success) {
                  swal({
                    icon: "success",
                    title: resp.data.message,
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                  }).then(() => {
                    location.reload();
                  });
                } else {
                  swal
                    .fire({
                      icon: "error",
                      title: "Erro para enviar base",
                      text: resp.data.message,
                    })
                    .then(() => {
                      location.reload();
                    });
                }
              })
              .catch(function (err) {
                swal
                  .fire({
                    icon: "error",
                    title: "Erro na API",
                    text: err,
                  })
                  .then((result) => {
                    console.log(result);
                    location.reload();
                  });
              });
          }
        });
    },
  },
};
</script>

<style scoped src="./Trabalhe_conosco.css">
</style>
