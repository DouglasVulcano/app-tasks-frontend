<template>
  <q-page class="q-pb-lg">
    <page-title-component2 :title="$t('main_layout.home_page_title')" />
    <widget-component :data="widget_data" />
    <last-task-component :last_task="last_task" />
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import PageTitleComponent2 from "../components/PageTitleComponent2.vue";
import WidgetComponent from "./components/WidgetComponent.vue";
import LastTaskComponent from "./components/LastTaskComponent.vue";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const { useActions, useGetters } = createNamespacedHelpers("tasks");

export default defineComponent({
  name: "IndexPage",
  components: {
    PageTitleComponent2,
    WidgetComponent,
    LastTaskComponent,
  },
  setup() {
    const { fetchUserTasks, fetchLastTask } = useActions([
        "fetchUserTasks",
        "fetchLastTask",
      ]),
      { last_task, widget_data } = useGetters({
        last_task: "getLastTask",

        widget_data: "getDataToWidget",
      });

    onMounted(() => {
      fetchUserTasks();
      fetchLastTask();
    });

    return {
      last_task,
      widget_data,
    };
  },
});
</script>
