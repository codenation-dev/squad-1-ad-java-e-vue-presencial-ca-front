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
          component: Home
        },
        {
          path: "/detail",
          name: "detail",
          component: Detail
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      name: "register",
      path: "/register",
      component: Register
    },
    {
      path: "**",
      redirect: "/login"
    }
  ]
});
