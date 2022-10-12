import Vue from "vue";
import VueRouter from "vue-router";
import Webp from "@/views/Webp.vue";
import Debounce from "@/views/Debounce.vue";
import Throttle from "@/views/Throttle.vue";
import Copy from "@/views/Copy.vue";
import ExpandClick from "@/views/ExpandClick.vue";
import Ellipsis from "@/views/Ellipsis.vue";
import Empty from "@/views/Empty.vue";
import Format from "@/views/Format.vue";
import LazyLoad from "@/views/LazyLoad.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Webp",
    component: Webp,
  },
  {
    path: "/debounce",
    name: "Debounce",
    component: Debounce,
  },
  {
    path: "/throttle",
    name: "Throttle",
    component: Throttle,
  },
  {
    path: "/copy",
    name: "Copy",
    component: Copy,
  },
  {
    path: "/expandClick",
    name: "ExpandClick",
    component: ExpandClick,
  },
  {
    path: "/ellipsis",
    name: "Ellipsis",
    component: Ellipsis,
  },
  {
    path: "/empty",
    name: "Empty",
    component: Empty,
  },
  {
    path: "/format",
    name: "Format",
    component: Format,
  },
  {
    path: "/lazyLoad",
    name: "LazyLoad",
    component: LazyLoad,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
