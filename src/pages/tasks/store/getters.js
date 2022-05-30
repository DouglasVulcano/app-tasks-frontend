/**
 * getter to last task
 * @param {*} state
 * @returns
 */
export const getUserTasks = (state) => state.user_tasks;

/**
 * getter to last task
 * @param {*} state
 * @returns
 */
export const getLastTask = (state) => state.last_task;

/**
 * total tasks
 * @param {*} state
 * @returns
 */
export const getTotalTasks = (state) => state.user_tasks.length;

/**
 * total done tasks
 * @param {*} state
 * @returns
 */
export const getTotalDoneTasks = (state) =>
  state.user_tasks.filter((element) => element.done == 1).length;

/**
 * total opened tasks
 * @param {*} state
 * @returns
 */
export const getTotalOpenedTasks = (state) =>
  state.user_tasks.filter((element) => element.done == 0).length;
