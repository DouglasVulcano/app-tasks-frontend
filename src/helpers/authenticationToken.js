/**
 * get authentication token
 */
export const getAuthenticationToken = () => {
  let header = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`,
    },
  };
  return header;
};
