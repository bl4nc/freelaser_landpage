<template src="./Home.html"></template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import CarroselBanner from "@/components/CarroselBanner/CarroselBanner.vue";
import CardWithIcon from "@/components/CardWithIcon/CardWithIcon.vue";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon.vue";

import Animate from "../../assets/js/Animate/Animate.js";
const animacao = new Animate();

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    CarroselBanner,
    CardWithIcon,
    WhatsappIcon,
  },
  data: function () {
    return {
      imgs_pc: [
        { img: "img/banners_carrosel/banner_01.png" },
        { img: "img/banners_carrosel/banner_02.png" },
        { img: "img/banners_carrosel/banner_03.png" },
        {
          img: "img/banners_carrosel/banner_04.png",
          link: "#",
        },
        {
          img: "img/banners_carrosel/banner_05.png",
          link: "agendar",
          interno: true,
        },
        {
          img: "img/banners_carrosel/banner_06.png",
          link: "#",
        },
      ],

      imgs_mb: [
        { img: "img/banner_top_mb_01.png" },
        { img: "img/banners_carrosel/banner_02.png" },
        { img: "img/banners_carrosel/banner_03.png" },
        {
          img: "img/banners_carrosel/banner_04.png",
          link: "#",
        },
        {
          img: "img/banners_carrosel/banner_05.png",
          link: "agendar",
          interno: true,
        },
        {
          img: "img/banners_carrosel/banner_06.png",
          link: "#",
        },
      ],
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
      // const banner_06 = document.querySelector("._banner_06");
      const banner_07 = document.querySelector("._banner_07");
      const elementos = [];
      // elementos.push(banner_03, banner_04, banner_05, banner_06, banner_07);
      elementos.push(banner_03, banner_04, banner_05, banner_07);
      animacao.setAnimationDown(banner_03, 100);
      animacao.setAnimationUp(banner_04, 100);
      animacao.setAnimationRight(banner_05, 100);
      // animacao.setAnimationDown(banner_06, 100);
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
    /*
    const swal = this.$swal;
    swal.fire({
      icon: 'info',
      title: 'Comunicado',
      html: `
      <div class="text-center">
      <p class="m-1">Prezadas(os) clientes Free,<br>
      Por algum motivo que<br>
      desconhecemos, as ligações,<br>
      oriundas das operadoras <strong class="c-orange">OI</strong> e<br>
      <strong class="c-orange">AMERICANET</strong> <span style="text-decoration: underline;">não estão sendo<br>
      completadas</span> para a nossa central telefônica.<br><br>
      Para clientes destas operadoras,<br>
      solicitamos por gentizela que até<br>
      a regularização entrem em<br>
      contato através da nossa <strong>CENTRAL <br>
      Whatsapp</strong> ou "Fale Conosco" do<br>
      site <strong>www.freelaser.com.br</strong>
      </p>
      <img class="mt-2 mb-2" style="width:35%" src="./logo.png">
     <br>
     <a  href="#" target="_blank" class="btn-orange btn mt-2">
      <strong>71 99970-0077 
      <?xml version="1.0"?><svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px">    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/></svg>
      </strong>
      </a>
      </div>
      `
    });
    */
  },
};
</script>

<style scoped>
@import url("./Home.css");
</style>
