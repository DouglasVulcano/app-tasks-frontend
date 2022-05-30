import * as types from "./mutation-types";

export default {
  /**
   * @param state
   * @param payload
   */
  [types.SET_USER_TASKS](state, payload) {
    state.user_tasks = payload;
  },

  /**
   * @param state
   * @param payload
   */
  [types.SET_LAST_TASK](state, payload) {
    state.last_task = payload;
  },
};
