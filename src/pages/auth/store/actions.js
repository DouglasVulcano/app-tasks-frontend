import * as types from "./mutation-types";
import { api } from "../../../boot/axios";
import route from "../../../router/index";
import { showNotifyLoginFail } from "../../../helpers/notificationsHelper";

/**
 * @param commit
 * @param payload
 */
export const setUserData = ({ commit }, payload) => {
  commit(types.SET_USER_DATA, payload);
};

/**
 * log out action
 */
export const logOut = () => {
  localStorage.removeItem("user_token");
  route.push("/login");
};

/**
 * @param dispatch
 * @param payload
 */
export const fetchUserData = async ({ dispatch }, payload) => {
  await api
    .post("/login", payload)
    .then((res) => {
      localStorage.setItem("user_token", res.data.token);
      dispatch("setUserData", res.data);
      route.push("/");
    })
    .catch(() => showNotifyLoginFail());
};
