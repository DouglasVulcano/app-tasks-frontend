export default [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/home/IndexPage.vue"),
        name: "home",
      },
    ],
  },
];
