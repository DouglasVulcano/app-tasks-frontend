import * as types from "./mutation-types";
import { api } from "../../../boot/axios";

/**
 * @param commit
 * @param payload
 */
export const setUsers = ({ commit }, payload) => {
  commit(types.SET_USERS, payload);
};

/**
 * @param dispatch
 * @return {*}
 */
export const fetchUsers = async ({ dispatch }) => {
  await api
    .get("/user")
    .then((res) => {
      dispatch("setUsers", res.data);
    })
    .catch((err) => console.log(err));
};
