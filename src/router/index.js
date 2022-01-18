import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("/src/views/Home.vue"),
  },
  {
    path: "/city/:city",
    name: "City",
    component: () => import("/src/views/City.vue"),
  },
  {
    path: "/bus/:city/:bus",
    name: "Bus",
    component: () => import("/src/views/Bus.vue"),
  },
  {
    path: "/stop/:city/:stop",
    name: "Stop",
    component: () => import("/src/views/Stop.vue"),
  },  
  {
    path:"*",
    component: () => import("/src/views/Home.vue"),
  }
  // {
  //   path: "/city",
  //   name: "",
  //   children: [
  //     {
  //       path: "/:city",
  //       name: "City",
  //       component: () => import("/src/views/City.vue"),
  //     },
  //     // {
  //     //   path: ':city/:busName',
  //     //   name: 'BusRouteStatusInfo',
  //     //   component: () => import("/src/views/Search.vue"),
  //     // },
  //   ],
  // },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
