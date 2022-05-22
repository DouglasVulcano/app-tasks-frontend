export default [
  {
    path: "/login",
    component: () => import("../../layouts/AuthLayout"),
    children: [
      {
        path: "/login",
        component: () => import("pages/auth/LoginPage.vue"),
        name: "login",
      },
    ],
  },
  {
    path: "/register",
    component: () => import("../../layouts/AuthLayout.vue"),
    children: [
      {
        path: "/register",
        component: () => import("pages/auth/RegisterPage.vue"),
        name: "register",
      },
    ],
  },
];
