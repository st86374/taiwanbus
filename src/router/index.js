import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/city/:city",
    name: "City",
    component: () => import("../views/City.vue"),
  },
  {
    path: "/bus/:city/:bus",
    name: "Bus",
    component: () => import("../views/Bus.vue"),
  },
  {
    path: "/stop/:city/:stop",
    name: "Stop",
    component: () => import("../views/Stop.vue"),
  },  
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
