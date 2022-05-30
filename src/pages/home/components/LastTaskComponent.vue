<template>
  <div class="q-ma-sm">
    <q-card>
      <q-card-section class="bg-grey-4 text-white">
        <div class="text-h6 text-uppercase text-grey-7">
          <q-icon name="list_alt" style="font-size: 1.5em" />
          {{ $t("homepage.last_task") }}
        </div>
      </q-card-section>
      <div class="row">
        <div class="col-12 col-md-6">
          <q-card-section class="text-dark">
            <div class="text-h5 text-weight-bold text-uppercase">
              {{ last_task.title }}
            </div>
            <div class="text-h6 text-grey-8 q-mt-md text-capitalize">
              {{ $t("homepage.comment") }}
            </div>
            <div class="text-h6 text-justify">{{ last_task.comment }}</div>
          </q-card-section>
        </div>
        <div class="col-12 col-md-6">
          <q-card-section class="text-dark">
            <div class="text-align text-h6">
              <p>
                <q-icon name="schedule" />
                {{
                  $t("homepage.start_date", {
                    date: formatDate(last_task.created_at),
                  })
                }}
              </p>
              <p>
                <q-icon name="pending_actions" />
                {{
                  $t("homepage.end_date", {
                    date: formatDate(last_task.created_at),
                  })
                }}
              </p>
            </div>
          </q-card-section>
        </div>
      </div>
      <div align="right">
        <q-btn flat class="text-blue" :to="{ name: 'tasks' }"
          >Visualizar tasks</q-btn
        >
      </div>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { formatDate } from "../../../helpers/numberManipulations";

export default defineComponent({
  name: "LastTaskComponent",
  props: {
    last_task: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { formatDate };
  },
});
</script>

<style scoped>
p {
  font-size: 13pt;
}
.text-align {
  text-align: right;
}

@media (max-width: 700px) {
  .text-align {
    text-align: left;
  }
}
</style>
