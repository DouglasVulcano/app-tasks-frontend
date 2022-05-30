<template>
  <div class="row">
    <div class="col-12 col-md q-pr-sm q-pl-sm q-mb-sm">
      <q-card>
        <q-card-actions align="left">
          <p>{{ total_tasks }}</p>
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-12 col-md q-pr-sm q-pl-sm q-mb-sm">
      <q-card>
        <q-card-actions align="left">
          <p>{{ total_opened }}</p>
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-12 col-md q-pr-sm q-pl-sm q-mb-sm">
      <q-card>
        <q-card-actions align="left">
          <p>{{ total_done }}</p>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WidgetComponent",
  props: {
    total_tasks: {
      required: true,
    },
    total_opened: {
      required: true,
    },
    total_done: {
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
