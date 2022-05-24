<template>
  <div class="row">
    <div class="col-12 col-md q-pr-sm q-pl-sm q-mb-sm">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Widget1</div>
        </q-card-section>
        <q-card-actions align="center">
          <p>Value</p>
        </q-card-actions>
        <q-card-actions align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-12 col-md q-pr-sm q-pl-sm q-mb-sm">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Widget2</div>
        </q-card-section>
        <q-card-actions align="center">
          <p>Value</p>
        </q-card-actions>
        <q-card-actions align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-12 col-md q-pr-sm q-pl-sm q-mb-sm">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Widget3</div>
        </q-card-section>
        <q-card-actions align="center">
          <p>Value</p>
        </q-card-actions>
        <q-card-actions align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WidgetComponent",
  components: {},
  setup() {
    return {};
  },
});
</script>
