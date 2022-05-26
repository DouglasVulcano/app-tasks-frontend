<template>
  <q-page>
    <page-title-component
      :title="$t('main_layout.tasks_page_title')"
      class="q-ma-sm"
    />
    <tasks-list-component :tasks="user_tasks" />
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import PageTitleComponent from "../components/PageTitleComponent.vue";
import TasksListComponent from "./components/TasksListComponent.vue";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const { useActions, useGetters } = createNamespacedHelpers("tasks");

export default defineComponent({
  name: "TasksPage",
  components: {
    PageTitleComponent,
    TasksListComponent,
  },

  setup() {
    const { fetchUserTasks } = useActions(["fetchUserTasks"]),
      { user_tasks } = useGetters({
        user_tasks: "getUserTasks",
      });

    onMounted(() => {
      fetchUserTasks();
    });

    return { user_tasks };
  },
});
</script>
