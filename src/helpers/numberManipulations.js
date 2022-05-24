import moment from "moment";

/** format date */
export const formatDate = (value) => {
  return moment(value).format("DD/MM/YYYY");
};
