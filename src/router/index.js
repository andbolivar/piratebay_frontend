import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from "@/views/SignIn";
import Dashboard from "@/views/Dashboard";
import login from "@/views/login";
import Logout from "@/views/Logout";
import Usuarios from "@/views/Usuarios";
import Pedido from "@/views/Pedido";
import Courrier from "@/views/Courrier";
import Delivered from "@/views/Delivered";
import Pelicula from "@/views/Peliculas";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
   },
    {
      path: '/Signin',
      name: 'Signin',
      component: SignIn,
        meta: {
            requiresVisitor: true,
        }
    },
      {
          path: '/login',
          name: 'login',
          component: login,
          meta: {
              requiresVisitor: true,
          }
      },
      {
          path: '/logout',
          name: 'logout',
          component: Logout
      },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
        meta: {
            requiresAuth: true,
        }
    },
      {
          path: '/Pedido',
          name: 'Pedido',
          component: Pedido,
          meta: {
              requiresAuth: true,
          }
      },
      {
          path: '/Courrier',
          name: 'Courrier',
          component: Courrier,
          meta: {
              requiresAuth: true,
          }
      },

      {
          path: '/Pelicula',
          name: 'Pelicula',
          component: Pelicula,
          meta: {
              requiresAuth: true,
          }
      },

      {
          path: '/Delivered',
          name: 'Delivered',
          component: Delivered,
          meta: {
              requiresAuth: true,
          }
      },
      {
          path: '/Usuarios',
          name: 'Usuarios',
          component: Usuarios,
          meta: {
              requiresAuth: true,
          }
      }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
