import Vue from 'vue';
import Router from 'vue-router';
import Index from "@/pages/index";
import Home from '@/pages/home';
import Find from '@/pages/find';
import Remote from '@/pages/remote';
import Mine from '@/pages/mine';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {name: "home"},
    },
    {
      path: "/index",
      component: Index,
      redirect: {name: "home"},
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'find',
          name: 'find',
          component: Find
        },
        {
          path: 'remote',
          name: 'remote',
          component: Remote
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        }
      ]
    },
  ]
});
