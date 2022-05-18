import services from "../../../shared/index";
import * as types from "./mutation-types";

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
export const fetchUsers = ({ dispatch }) => {
  return services.home.users().then(async (res) => {
    dispatch("setUsers", response);
  });
};
