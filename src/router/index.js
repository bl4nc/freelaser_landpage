import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
import Quem_Somos from '../views/Quem_Somos/Quem_Somos.vue'
import Depilacao_Masculina from '../views/Depilacao_Masculina/Depilacao_Masculina.vue'
import Depilacao_Feminina from '../views/Depilacao_Feminina/Depilacao_Feminina.vue'
import Estetica from '../views/Estetica/Estetica.vue'
import Onde_Estamos from '../views/Onde_Estamos/Onde_Estamos.vue'
import Lead from '../views/Lead/Lead.vue'
import Faq from '../views/Faq/Faq.vue'
import Agendar from '../views/Agendar/Agendar.vue'
import Area_Cliente from '../views/Area_Cliente/Area_Cliente.vue'
import BaixarRelatorio from '../views/BaixarRelatorio/BaixarRelatorio.vue'
import Agradecimento from '../views/Agradecimento/Agradecimento.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/quem_somos',
        name: 'Quem somos',
        component: Quem_Somos
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
        path: '/lead',
        name: 'Lead',
        component: Lead
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
    }, {
        path: '/area_cliente',
        name: 'Area Cliente',
        component: Area_Cliente
    },
    {
        path: '/tl_admin/:pass',
        name: 'Admin',
        component: BaixarRelatorio
    },
    {
        path: '/agradecimento',
        name: 'Agradecimento',
        component: Agradecimento
    },
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router