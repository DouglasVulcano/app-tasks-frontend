const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/home/IndexPage.vue") },
    ],
  },

  {
    path: "/tasks",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/tasks/TasksPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/404/ErrorNotFound.vue"),
  },
];

export default routes;
