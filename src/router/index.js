import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import { useUserStore } from "../stores/UserStore";

const routes = [
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      if (useUserStore().id) {
        next();
      } else {
        next("/login");
      }
    },
    component: HomeView,
  },
  {
    path: "/login",
    beforeEnter: (to, from, next) => {
      if (useUserStore().id) {
        next("/");
      } else {
        next();
      }
    },
    component: LoginView,
  },
  {
    path: "/signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
