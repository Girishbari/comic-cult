const User = {}; // Change after the model decided for the user
import jwt from "jsonwebtoken";

interface CookieOptions{
  expires: Date
  httpOnly: boolean
  secure: boolean
}

//don't know what ResponseType is so we are assuming as ResponseType
interface ResponseType{
  cookie: (type: "jwt" | "others", token: string, cookieOptions: CookieOptions) => void
}


interface User{
  password?: string | undefined
  _id: string
}

const createSendToken: (
  user: User,
  statusCode: number,
  res: ResponseType
) => void = (user, statusCode, res) => {


  const token = signToken("replace with user id on db"); // Change after the model decided for the user

  if(process.env && process.env.JWT_COOKIE_EXPIRES_IN){

    const cookieOptions: CookieOptions = {
      expires: new Date(
        Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: false
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
        user
      },
    });

  }
};

export default signup = function catchAsync(async (req: undefined, res: ResponseType, next: undefined) => {
  const newUser: User = { _id: "new user id" }; // Replace with new user 

  if(process.env && process.env.JWT_SECRET){
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }
    
  createSendToken(newUser, 201, res);
});