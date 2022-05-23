<template>
  <div class="bg-white padding-title q-mb-lg rounded-borders shadow-4">
    <h5 class="text-wigth-light text-uppercase text-grey-8 q-ma-sm q-pa-md">
      {{ title }}
    </h5>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTitleComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lag="scss" scoped>
.padding-title {
  border-left: 0.5em solid grey;
}
</style>
