<template>
  <div class="q-pa-md q-mt-sm bg-white item-style">
    <div class="q-pa-sm text-uppercase">{{ task.title }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskItemComponent",
  props: {
    task: {
      type: Object,
      required: true,
    },
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
