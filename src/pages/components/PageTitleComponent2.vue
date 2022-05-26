<template>
  <div class="q-mb-lg q-mt-lg">
    <h5 class="text-wigth-light text-uppercase text-grey-8 q-ma-sm q-pa-sm">
      {{ $t("homepage.welcome", { name: user_data.name }) }}
    </h5>
    <span class="text-wigth-light text-uppercase text-grey-8 q-ma-sm q-pa-sm">{{
      getDate()
    }}</span>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const { useGetters, useActions } = createNamespacedHelpers("auth");
import moment from "moment";

export default defineComponent({
  name: "PageTitleComponent2",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { user_data } = useGetters({
        user_data: "getUserData",
      }),
      { fetchUserMe } = useActions(["fetchUserMe"]);

    const getDate = () => moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
    onMounted(() => {
      fetchUserMe();
    });

    return {
      user_data,
      getDate,
    };
  },
});
</script>
