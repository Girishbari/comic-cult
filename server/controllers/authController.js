const User = {}; // Change after the model decided for the user
const jwt = require("jsonwebtoken");

const createSendToken = (user, statusCode, res) => {
  const token = signToken("replace with user id on db"); // Change after the model decided for the user
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};


exports.signup = catchAsync(async (req, res, next) => {
  const newUser = {_id: "new user id"}; // Replace with new user object
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  createSendToken(newUser, 201, res);
});
