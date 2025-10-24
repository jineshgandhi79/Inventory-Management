import jwt from "jsonwebtoken";

export const sendcookie = (user, res, message, statuscode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
  res
    .status(statuscode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 60 * 10000,
    })
    .json({
      success: true,
      message,
    });
};
