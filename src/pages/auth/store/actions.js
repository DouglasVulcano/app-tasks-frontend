import * as types from "./mutation-types";
import { api } from "../../../boot/axios";

/**
 * @param commit
 * @param payload
 */
export const setUserData = ({ commit }, payload) => {
  commit(types.SET_USER_DATA, payload);
};

/**
 * @param dispatch
 * @param payload
 * @return {*}
 */
export const fetchUserData = async ({ dispatch }, payload) => {
  await api
    .post("/login", payload)
    .then((res) => {
      console.log(res.data);
      dispatch("setUserData", res.data);
    })
    .catch((err) => console.log(err));
};
