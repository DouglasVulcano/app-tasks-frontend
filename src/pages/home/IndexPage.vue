<template>
  <q-page class="q-pb-lg">
    <page-title-component2 :title="$t('main_layout.home_page_title')" />
    <widget-component />
    <last-task-component :last_task="last_task" />
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import PageTitleComponent2 from "../components/PageTitleComponent2.vue";
import WidgetComponent from "./components/WidgetComponent.vue";
import LastTaskComponent from "./components/LastTaskComponent.vue";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const { useActions, useGetters } = createNamespacedHelpers("home");

export default defineComponent({
  name: "IndexPage",
  components: {
    PageTitleComponent2,
    WidgetComponent,
    LastTaskComponent,
  },
  setup() {
    const { fetchLastTask } = useActions(["fetchLastTask"]),
      { last_task } = useGetters({ last_task: "getLastTask" });

    onMounted(() => {
      fetchLastTask();
    });

    return {
      last_task,
    };
  },
});
</script>
