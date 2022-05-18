/**
 * Config services
 */
export default {
  /**
   * get users
   *
   * @returns {{method: string, url: string}}
   */
  users: () => ({ method: "GET", url: "api/user" }),
};
