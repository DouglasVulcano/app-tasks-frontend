<template>
  <q-page class="q-ma-lg">
    <page-title-component2 :title="$t('main_layout.home_page_title')" />
    <div class="">
      <widget-component />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import PageTitleComponent2 from "../components/PageTitleComponent2.vue";
import WidgetComponent from "./components/WidgetComponent.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageTitleComponent2,
    WidgetComponent,
  },
  setup() {
    return {};
  },
});
</script>
