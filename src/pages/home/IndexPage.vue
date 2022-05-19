<template>
  <q-page class="flex flex-center">
    <h1>Home Page</h1>
    <p>{{ all_users }}</p>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const { useGetters, useActions } = createNamespacedHelpers("home");

export default defineComponent({
  name: "IndexPage",

  setup() {
    const { fetchUsers } = useActions(["fetchUsers"]);

    const { all_users } = useGetters({
      all_users: "getUsers",
    });

    fetchUsers();

    return {
      all_users,
    };
  },
});
</script>
