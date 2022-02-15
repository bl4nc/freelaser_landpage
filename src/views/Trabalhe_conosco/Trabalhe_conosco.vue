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
    uploadFile(form) {
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
            console.log(form)
            let formData = new FormData();
            let arquivo = form.target[4];
            console.log(arquivo.files[0])
            formData.append("arq", arquivo.files[0]);
            const send = {
              arquivo: formData,
              form: this.form,
            };
            console.log(formData)
            axios
              .post("http://localhost:9000/enviarDadosTrabalheConosco", send)

              // .post(`${this.api}/enviarDadosTrabalheConosco`, send, {})
              .then(function (resp) {
                if (resp.data.success) {
                  swal({
                    title: `<div>
                                <h4>Dados enviados com sucesso!</h4>
                                  <img src='../../assets/img/success_gif.gif' width="100%">
                              </div>`,
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
                      // location.reload();0
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
