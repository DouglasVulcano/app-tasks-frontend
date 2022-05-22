import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// This method runs before all requisition.
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  // attribute on localStorage
  const loggedIn = localStorage.getItem("user_token");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
