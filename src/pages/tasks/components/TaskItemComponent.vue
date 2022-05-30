<template>
  <div
    class="q-pa-md q-mt-sm bg-white item-style"
    @click="showTaskModal = true"
  >
    <div class="q-pa-sm text-uppercase">{{ task.title }}</div>
  </div>
  <task-modal-component v-model="showTaskModal" :task="task" />
</template>

<script>
import { defineComponent, ref } from "vue";
import TaskModalComponent from "./TaskModalComponent.vue";

export default defineComponent({
  name: "TaskItemComponent",
  components: {
    TaskModalComponent,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const showTaskModal = ref(false);

    return {
      showTaskModal,
    };
  },
});
</script>

<style scoped>
.item-style {
  cursor: pointer;
}
.item-style:hover {
  background-color: rgb(236, 255, 244) !important;
  transition: 0.4s;
}
</style>
