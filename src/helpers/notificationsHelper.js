// outside of a Vue file
import { Notify } from "quasar";

/**
 * success notification
 * @param {*} message
 */
export const showNotifySuccess = (message) => {
  Notify.create({
    message: message,
    color: "blue",
    position: "top-right",
  });
};

/**
 * fail notification
 * @param {*} message
 */
export const showNotifyFail = (message) => {
  Notify.create({
    message: message,
    color: "blue",
    position: "top-right",
  });
};

/**
 * notification to login
 */
export const showNotifyLoginFail = () => {
  let message = "Usuário ou senha inválidos";
  Notify.create({
    message: message,
    color: "red",
    position: "top-right",
    icon: "announcement",
  });
};
