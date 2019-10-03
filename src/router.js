import Vue from "vue";
import Router from "vue-router";

import store from "@/store/index";

import Home from "@/views/Home/Home";
import Login from "@/views/Auth/Login";
import Register from "@/views/Auth/Register";
import Detail from "@/views/Detail/Detail";
import Main from "@/layouts/Main";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { transitionName: "slide" }
    },
    {
      name: "register",
      path: "/register",
      component: Register,
      meta: { transitionName: "slide" }
    },
    {
      path: "/",
      component: Main,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
          meta: { transitionName: "slide" }
        },
        {
          path: "/detail/:slug",
          name: "detail",
          component: Detail,
          meta: { transitionName: "slide" },
          props: true
        }
      ]
    },
    {
      path: "**",
      redirect: "/login"
    }
  ]
});

router.beforeEach((to, from, next) => {
  const hasPermission = store.getters["auth/hasPermission"];

  if (!hasPermission) {
    if (to.name === "home") {
      next("/login");
    }
    if (to.name === "detail") {
      next("/login");
    }
  }
  next();
});

export default router;
