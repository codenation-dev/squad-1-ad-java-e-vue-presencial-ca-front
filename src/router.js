import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home/Home";
import Login from "@/views/Auth/Login";
import Register from "@/views/Auth/Register";
import Detail from "@/views/Detail/Detail";
import Main from "@/layouts/Main";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
          path: "/detail",
          name: "detail",
          component: Detail,
          meta: { transitionName: "slide" }
        }
      ]
    },
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
      path: "**",
      redirect: "/login"
    }
  ]
});
