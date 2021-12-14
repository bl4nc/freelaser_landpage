<template src="./Home.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardWithIcon from "@/components/CardWithIcon/CardWithIcon.vue";



import Animate from "../../assets/js/Animate/Animate.js";
const animacao = new Animate();

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    CardWithIcon
  },
  data: function () {
    return {
      imgs_pc: ["img/banners_carrosel/banner_01.png"],
      imgs_mb: ["img/banner_top_mb_01.png"],
    };
  },
  methods: {
    debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },

    animacao_rolagem() {
      const banner_03 = document.querySelector("._banner_03");
      const banner_04 = document.querySelector("._banner_04");
      const banner_05 = document.querySelector("._banner_05");
      const banner_06 = document.querySelector("._banner_06");
      const banner_07 = document.querySelector("._banner_07");
      const elementos = [];
      elementos.push(banner_03, banner_04, banner_05, banner_06, banner_07);
      animacao.setAnimationDown(banner_03, 100);
      animacao.setAnimationLeft(banner_04, 100);
      animacao.setAnimationRight(banner_05, 100);
      animacao.setAnimationDown(banner_06, 100);
      animacao.setAnimationUp(banner_07, 100);

      function anima_scroll() {
        /* Distância entre a barra de scroll e o topo do site
           A divisão do window.innerHeight serve para a animação aparecer em 3/4 da tela do usuário */
        const altura_scroll = window.pageYOffset + (window.innerHeight * 3) / 4;
        elementos.forEach((item) => {
          if (altura_scroll > item.offsetTop) {
            animacao.startAnimate(item);
          }
        });
      }

      window.addEventListener(
        "scroll",
        this.debounce(function ativa_animacao_scroll() {
          anima_scroll();
        }, 100)
      );
    },
  },

  mounted() {
    this.animacao_rolagem();
  },
};
</script>

<style scoped>
@import url("./Home.css");
</style>
