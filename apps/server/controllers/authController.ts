const User = {}; // Change after the model decided for the user
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { UserInit } from "../types/authController";
import { CookieOptions } from "../types/authController";

const createSendToken: (
  user: UserInit,
  statusCode: number,
  res: Response
) => void = (user, statusCode, res) => {

  // no definition of signToken present
  const token = signToken("replace with user id on db"); // Change after the model decided for the user

  if (process.env && process.env.JWT_COOKIE_EXPIRES_IN) {
    const cookieOptions: CookieOptions = {
      expires: new Date(
        Date.now() +
          parseInt(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: false,
    };

    if (process.env.NODE_ENV === "production") {
      cookieOptions.secure = true;
    }

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
  }
};

//no definition of catchAsync present
const signup = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const newUser = { _id: "new user id" }; // Replace with new user object

  if(process.env && process.env.JWT_SECRET){
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }
    
  createSendToken(newUser, 201, res);
});

export default signup;
