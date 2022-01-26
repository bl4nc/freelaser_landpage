import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import moment from 'vue-moment'

Vue.use(VueMask)
Vue.use(VueSweetalert2);
Vue.use(moment);

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')