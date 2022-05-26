<template>
  <div class="row q-ml-sm q-mr-sm">
    <div class="col-12 col-md-6 q-pa-sm">
      <q-card>
        <q-card-section class="bg-grey-6 text-white">
          <div class="text-h6">Em aberto</div>
        </q-card-section>
        <q-card-section class="text-black bg-grey-4">
          <div v-for="(task, i) in tasks" :key="i">
            <task-item-component v-if="task.done == 0" :task="task" />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-6 q-pa-sm">
      <q-card>
        <q-card-section class="bg-grey-6 text-white">
          <div class="text-h6">Concluidas</div>
        </q-card-section>
        <q-card-section class="text-black bg-grey-4">
          <div v-for="(task, i) in tasks" :key="i">
            <task-item-component v-if="task.done == 1" :task="task" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskItemComponent from "./TaskItemComponent.vue";

//import { createNamespacedHelpers } from "vuex-composition-helpers";
//const { useActions, useGetters } = createNamespacedHelpers("tasks");

export default defineComponent({
  name: "TasksListComponent",
  components: { TaskItemComponent },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  setup() {
    return {};
  },
});
</script>
