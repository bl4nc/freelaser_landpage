import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
import Quem_Somos from '../views/Quem_Somos/Quem_Somos.vue'
import Depilacao_Masculina from '../views/Depilacao_Masculina/Depilacao_Masculina.vue'
import Depilacao_Feminina from '../views/Depilacao_Feminina/Depilacao_Feminina.vue'
import Estetica from '../views/Estetica/Estetica.vue'

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

]

const router = new VueRouter({
    routes
})

export default router