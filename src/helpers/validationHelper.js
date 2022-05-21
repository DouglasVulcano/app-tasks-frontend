/** verify email value */
export const emailValidation = (value, field) => {
  if (value == "")
    return (value && value.length > 0) || `O campo ${field} é obrigatório`;
  else {
    let validateEmail = /\S+@\S+\.\S+/;
    return validateEmail.test(value) || `O campo ${field} é inválido`;
  }
};

/** verify password field value */
export const passwordValidation = (value, field) => {
  if (value == "")
    return (value && value.length > 0) || `O campo ${field} é obrigatório`;
  else
    return (
      value.length >= 8 || `O campo ${field} deve conter mais que 8 caracteres`
    );
};
