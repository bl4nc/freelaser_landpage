import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Quem_Somos from '../views/Quem_Somos/Quem_Somos.vue'
import Depilacao_Masculina from '../views/Depilacao_Masculina/Depilacao_Masculina.vue'
import Depilacao_Feminina from '../views/Depilacao_Feminina/Depilacao_Feminina.vue'
import Estetica from '../views/Estetica/Estetica.vue'
import Onde_Estamos from '../views/Onde_Estamos/Onde_Estamos.vue'
import Faq from '../views/Faq/Faq.vue'
import Fale_conosco from '../views/Fale_conosco/Fale_conosco.vue'
import Trabalhe_conosco from '../views/Trabalhe_conosco/Trabalhe_conosco.vue'
import Agendar from '../views/Agendar/Agendar.vue'

Vue.use(VueRouter)

const routes = [{
        path: '*',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/quem_somos',
        name: 'Quem somos',
        component: Quem_Somos
    },
    {
        path: '/fale_conosco',
        name: 'Fale conosco',
        component: Fale_conosco
    },
    {
        path: '/trabalhe_conosco',
        name: 'Trabalhe conosco',
        component: Trabalhe_conosco
    },
    {
        path: '/depilacao_masculina',
        name: 'Depilação Masculina',
        component: Depilacao_Masculina
    },
    {
        path: '/depilacao_feminina',
        name: 'Depilacao Feminina',
        component: Depilacao_Feminina
    },
    {
        path: '/estetica',
        name: 'Estetica',
        component: Estetica
    },
    {
        path: '/onde_estamos',
        name: 'Onde Estamos',
        component: Onde_Estamos
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq
    },
    {
        path: '/agendar',
        name: 'Agendar',
        component: Agendar
    }
]

const router = new VueRouter({
    // mode: 'history',     
    routes,
    scrollBehavior() {
        if (location.href.split('=')[1]) {
            window.location.href = `#${location.href.split('=')[1]}`;
        } else {
            document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
        }

    }
})

export default router