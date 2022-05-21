<template>
  <q-page>
    <page-title-component :title="$t('main_layout.home_page_title')" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
//import { createNamespacedHelpers } from "vuex-composition-helpers";
//const { useGetters, useActions } = createNamespacedHelpers("home");
import PageTitleComponent from "../components/PageTitleComponent.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PageTitleComponent,
  },
  setup() {
    return {};
  },
});
</script>
