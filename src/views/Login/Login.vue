<template src="./Login.html"></template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer/Footer.vue'
import LoginForm from '@/components/LoginForm/LoginForm.vue'
import CadastroForm from '@/components/CadastroForm/CadastroForm.vue'
import WhatsappIcon from '@/components/WhatsappIcon/WhatsappIcon.vue'

export default {
  name: 'Login',
  components: {
    Navbar,
    Footer,
    LoginForm,
    CadastroForm,
    WhatsappIcon
  }
}
</script>

<style scoped>
@import url("./Login.css");
</style>
