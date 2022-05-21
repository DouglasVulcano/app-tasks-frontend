export default [
  {
    path: "/tasks",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/tasks/TasksPage.vue"),
        name: "tasks",
      },
    ],
  },
];
