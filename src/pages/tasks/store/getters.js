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

/**
 * data to generate widget
 * @param {*} state
 * @returns
 */
export const getDataToWidget = (state) => [
  {
    title: "homepage.total",
    icon: "expand_less",
    value: state.user_tasks.length,
  },
  {
    title: "homepage.opened",
    icon: "lock_open",
    value: state.user_tasks.filter((element) => element.done == 0).length,
  },
  {
    title: "homepage.done",
    icon: "lock",
    value: state.user_tasks.filter((element) => element.done == 1).length,
  },
];
