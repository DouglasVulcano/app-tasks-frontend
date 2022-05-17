<template>
  <q-page class="flex flex-center">
    <q-table title="Users" :rows="users" :columns="columns" row-key="id" />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "IndexPage",

  setup() {
    let users = ref([]);

    const columns = [
      {
        name: "id",
        label: "ID",
        field: "id",
      },
      {
        name: "name",
        label: "Nome",
        field: "name",
      },
      {
        name: "email",
        label: "Email",
        field: "email",
      },
    ];

    const getUsers = async () => {
      await api.get("user").then((response) => {
        console.log(response.data);
        users.value = response.data;
      });
    };

    onMounted(getUsers());

    return {
      users,
      columns,
    };
  },
});
</script>
