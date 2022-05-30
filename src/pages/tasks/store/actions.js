import * as types from "./mutation-types";
import { api } from "../../../boot/axios";
import { getAuthenticationToken } from "../../../helpers/authenticationToken";

/**
 * @param commit
 * @param payload
 */
export const setUserTasks = ({ commit }, payload) => {
  commit(types.SET_USER_TASKS, payload);
};

/**
 * @param commit
 * @param payload
 */
export const setLastTask = ({ commit }, payload) => {
  commit(types.SET_LAST_TASK, payload);
};

/**
 * @param dispatch
 * @return {*}
 */
export const fetchUserTasks = async ({ dispatch }) => {
  await api
    .get("/tasks/list-user-tasks", getAuthenticationToken())
    .then((res) => {
      dispatch("setUserTasks", res.data);
    })
    .catch((err) => console.log(err));
};

/**
 * @param dispatch
 * @return {*}
 */
export const fetchLastTask = async ({ dispatch }) => {
  await api
    .get("/tasks/last-task", getAuthenticationToken())
    .then((res) => {
      dispatch("setLastTask", res.data);
    })
    .catch((err) => console.log(err));
};
