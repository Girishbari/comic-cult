export interface CookieOptions {
  expires: Date;
  httpOnly: boolean;
  secure: boolean;
}

export interface UserInit {
  password?: string | undefined;
  _id: string;
}