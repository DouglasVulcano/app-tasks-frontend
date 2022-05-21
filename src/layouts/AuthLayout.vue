<template>
  <q-layout class="bg-blue-grey-3 q-pt-lg">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthLayout",
});
</script>
