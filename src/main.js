import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import metalle from './components/metalle.vue';


Vue.use(VueRouter);
const routes = [
  {path:'/metalle', component : metalle },

];

const router = new VueRouter({
routes
});
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
