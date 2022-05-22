<template>
  <q-page class="container">
    <div class="row">
      <div class="col-12 col-md-3 q-mx-auto absolute-center">
        <div class="bg-white shadow-4 rounded-borders q-pa-lg">
          <h5 class="text-center">
            {{ $t("auth.login_title") }}
          </h5>

          <q-form @submit.prevent="onSubmit()">
            <q-input
              outlined
              v-model="email"
              class="q-mb-sm"
              label="Email"
              :rules="[(value) => emailValidation(value, 'email')]"
            />
            <q-input
              v-model="password"
              outlined
              label="Senha"
              :type="isPwd ? 'password' : 'text'"
              :rules="[(value) => passwordValidation(value, 'senha')]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <div class="q-mt-md text-right">
              <q-btn
                label="Cadastrar-se"
                color="red"
                class="q-ma-sm"
                :to="{ name: 'register' }"
              />
              <q-btn
                label="Login"
                class="q-ma-sm"
                color="blue-grey-8"
                type="submit"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  emailValidation,
  passwordValidation,
} from "../../helpers/validationHelper";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const { useActions } = createNamespacedHelpers("auth");
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const isPwd = ref(true);

    const { fetchUserData } = useActions(["fetchUserData"]);

    const onSubmit = () => {
      fetchUserData({ email: email.value, password: password.value });
    };

    return {
      email,
      password,
      isPwd,
      onSubmit,
      emailValidation,
      passwordValidation,
    };
  },
});
</script>
