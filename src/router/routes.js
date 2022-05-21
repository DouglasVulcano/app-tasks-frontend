import { routes as auth } from "../pages/auth/index";
import { routes as home } from "../pages/home/index";
import { routes as tasks } from "../pages/tasks/index";

export default [
  ...auth,
  ...home,
  ...tasks,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/404/ErrorNotFound.vue"),
  },
];
