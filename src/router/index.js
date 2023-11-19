import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { usePokemon } from "../stores/pokemon.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/registerView.vue"),
    },
    {
      path: "/favourite",
      name: "favourite",
      component: () => import("../views/favouriteView.vue"),
    },
  ],
});
router.beforeEach(async (to, from) => {
  const pokemon = usePokemon();
  if (!pokemon.user && to.name !== "register") return "/register";
  if (pokemon.user && to.name === "register") return "/";
});
export default router;
