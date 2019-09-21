import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home/Home";
import Login from "@/views/Auth/Login";
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
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "**",
      redirect: "/login"
    }
  ]
});
