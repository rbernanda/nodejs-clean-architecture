import jwt from "jsonwebtoken";

export const signToken = (data: { username: string }) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY as string);
};
