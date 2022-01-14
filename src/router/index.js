import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App";
import Join from "../views/join";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: App,
  },
  {
    path: "/join",
    name: "join",
    component: Join,
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;
