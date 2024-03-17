export const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

export const isEmailValid = email => {
  return emailRegEx.test(email);
};

export const isCodeValid = code => {
  return code.trim().length === 6;
};
