import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/views/Home.vue"
import cityPage from "@/views/City.vue"
import busPage from "@/views/Bus.vue"
import stopPage from "@/views/Stop.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: homePage,
  },
  {
    path: "/city/:city",
    name: "City",
    component: cityPage,
  },
  {
    path: "/bus/:city/:bus",
    name: "Bus",
    component: busPage,
  },
  {
    path: "/stop/:city/:stop",
    name: "Stop",
    component: stopPage,
  },  
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
