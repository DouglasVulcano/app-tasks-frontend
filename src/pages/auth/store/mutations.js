import * as types from "./mutation-types";

export default {
  /**
   * @param state
   * @param payload
   */
  [types.SET_USER_DATA](state, payload) {
    state.user_data = payload;
  },
};
