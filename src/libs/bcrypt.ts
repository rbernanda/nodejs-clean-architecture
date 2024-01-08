import bcrypt from "bcrypt";

export const hashPassword = (plainPassword: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(plainPassword, salt);
  return hash;
};

export const unhashPassword = (plainPassword: string, hash: string) => {
  return bcrypt.compareSync(plainPassword, hash);
};
