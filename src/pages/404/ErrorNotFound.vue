<template>
  <div
    class="fullscreen bg-red text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 20vh">{{ $t("_404.alert_message") }}</div>

      <div class="text-h2" style="opacity: 0.4">
        {{ $t("_404.help_message") }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="red"
        unelevated
        to="/"
        label="Voltar"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
