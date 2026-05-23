import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/product/:id(\\d+)",
      name: "product",
      component: () => import("@/views/ProductView.vue"),
      props: (route) => ({ id: Number(route.params.id) })
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue")
    }
  ]
})

export default router;