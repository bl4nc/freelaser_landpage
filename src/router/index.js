import Vue from 'vue'
import VueRouter from 'vue-router'
import Lead from '../views/Lead/Lead.vue'
import BaixarRelatorio from '../views/BaixarRelatorio/BaixarRelatorio.vue'
import Agradecimento from '../views/Agradecimento/Agradecimento.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Leading',
        component: Lead
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
    mode: 'history',
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router