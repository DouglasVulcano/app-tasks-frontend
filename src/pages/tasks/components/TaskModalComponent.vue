<template>
  <q-dialog>
    <q-card style="width: 700px; max-width: 80vw">
      <q-bar class="bg-black">
        <div class="text-uppercase text-white">Visualizar Task</div>
        <q-space />
        <q-btn dense flat icon="close" class="text-white" v-close-popup>
          <q-tooltip class="bg-grey text-white">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section class="q-pt-none q-pa-md">
        <div class="text-h5 text-uppercase">{{ task.title }}</div>
        <div class="text-h6 text-grey-8 q-mt-sm">Comentário:</div>
        <div>
          <p>{{ task.comment }}</p>
        </div>
        <div
          class="text-align bg-grey-4"
          style="border-radius: 10px; padding: 10px"
        >
          <p class="q-pa-none">
            <q-icon name="schedule" />
            {{
              $t("homepage.start_date", {
                date: formatDate(task.created_at),
              })
            }}
          </p>
          <p class="q-pa-none">
            <q-icon name="pending_actions" />
            {{
              $t("homepage.end_date", {
                date: formatDate(task.created_at),
              })
            }}
          </p>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn
          color="black"
          v-if="task.done == false"
          label="Finalizar"
          v-close-popup
        />
        <q-btn color="black" v-else label="Reabrir" v-close-popup />
        <q-btn color="red" label="Deletar" v-close-popup />
        <q-btn label="Fechar" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { formatDate } from "../../../helpers/numberManipulations";

export default defineComponent({
  name: "TaskItemComponent",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      formatDate,
    };
  },
});
</script>

<style scoped></style>
