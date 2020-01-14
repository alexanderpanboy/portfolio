import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import metalle from "./components/metalle.vue";
import computex from "./components/computex.vue";
import hi from "./components/Hi.vue";
import Gface from "./components/Gface.vue";
import wood from "./components/Wood.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/metalle", component: metalle },
  { path: "/computex", component: computex },
  { path: "/", component: hi },
  { path: "/gface", component: Gface },
  { path: "/wood", component: wood },
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
