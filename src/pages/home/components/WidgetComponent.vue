<template>
  <div class="row">
    <div
      class="col-12 col-md q-pr-sm q-pl-sm q-mb-sm"
      v-for="(item, i) in data"
      :key="i"
    >
      <q-card>
        <q-card-section class="bg-grey-4 text-white">
          <div class="text-h6 text-uppercase text-grey-7">
            <q-icon :name="item.icon" style="font-size: 1.2em" />
            {{ $t(item.title) }}
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <div class="text-h6">{{ item.value }}</div>
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
    data: {
      type: Array,
      required: true,
    },
  },
});
</script>
