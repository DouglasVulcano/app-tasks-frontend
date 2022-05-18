import * as types from "./mutation-types";

export default {
  /**
   * @param state
   * @param payload
   */
  [types.SET_USERS](state, payload) {
    state.users = payload;
  },
};
