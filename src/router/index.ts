import Vue from "vue";
import VueRouter from "vue-router";
import VueHead from "vue-head";

// Primary
import Home from "../components/primary/Home.vue";
import AboutPli from "../components/primary/AboutPli.vue";
import AboutMe from "../components/primary/AboutMe.vue";
import AlbumoftheNow from "../components/primary/AlbumoftheNow.vue";

// Secondary

// ----- Design -----

// Product

// Visual

// Solution

// Cetero

// ----- Stories -----

// People

// Animals
import Springer from "../components/secondary/stories/animals/Springer.vue";
// Sport

// Cetero

Vue.use(VueHead);
Vue.use(VueRouter);

const routes = [
  // Primary
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/aboutpli",
    name: "aboutpli",
    component: AboutPli
  },
  {
    path: "/aboutme",
    name: "aboutme",
    component: AboutMe
  },
  {
    path: "/albumofthenow",
    name: "albumofthenow",
    component: AlbumoftheNow
  },

  // Secondary

  // ----- Design -----

  // Product

  // Visual

  // Solution

  // Cetero

  // ----- Stories -----

  // People

  // Animals
  {
    path: "/stories/springer",
    name: "springer",
    component: Springer
  }
  // Sport

  // Cetero
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
