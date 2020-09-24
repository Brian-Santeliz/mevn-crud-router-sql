import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/Create.vue"),
  },
  {
    path: "/action",
    name: "actions",
    component: () => import("./pages/Actions.vue"),
  },
  {
    path: "/update/:id",
    name: "update",
    component: () => import("./pages/Update.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
