import moment from "moment";

/**
 * format date
 * @param {*} value
 * @returns
 */
export const formatDate = (value) => {
  return moment(value).locale("pt-br").format("DD/MM/YYYY");
};

/**
 * get current date
 * @returns
 */
export const getDate = () => moment(new Date()).locale("pt-br").format("LLLL");

/**
 * format greenting
 * @returns
 */
export const greetingMessage = () => {
  let h = new Date().getHours();
  if (h <= 5) return "Boa madrugada";
  if (h < 12) return "Bom dia";
  if (h < 18) return "Boa tarde";
  return "Boa noite";
};
