import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import metalle from "./components/metalle.vue";
import hello from "./components/HelloWorld.vue";
import hi from "./components/Hi.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/metalle", component: metalle },
  { path: "/hello", component: hello },
  { path: "/", component: hi }
];

const router = new VueRouter({
  routes
});
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
