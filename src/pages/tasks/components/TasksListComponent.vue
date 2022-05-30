<template>
  <div class="row q-ml-sm q-mr-sm">
    <div class="col-12 col-md-6 q-pa-sm">
      <q-card>
        <q-card-section class="bg-grey-4">
          <div class="text-h6 text-uppercase text-grey-7">
            {{ $t("main_layout.tasks_page.opened") }}
          </div>
        </q-card-section>
        <q-card-section class="text-black bg-grey-4">
          <q-scroll-area style="height: 70vh">
            <div v-for="(task, i) in tasks" :key="i">
              <task-item-component v-if="task.done == 0" :task="task" />
            </div>
          </q-scroll-area>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-6 q-pa-sm">
      <q-card>
        <q-card-section class="bg-grey-4">
          <div class="text-h6 text-uppercase text-grey-7">
            {{ $t("main_layout.tasks_page.done") }}
          </div>
        </q-card-section>
        <q-card-section class="text-black bg-grey-4">
          <q-scroll-area style="height: 70vh">
            <div v-for="(task, i) in tasks" :key="i">
              <task-item-component v-if="task.done == 1" :task="task" />
            </div>
          </q-scroll-area>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskItemComponent from "./TaskItemComponent.vue";

export default defineComponent({
  name: "TasksListComponent",
  components: { TaskItemComponent },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  setup() {},
});
</script>
