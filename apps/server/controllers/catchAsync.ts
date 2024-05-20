import { NextFunction } from "express";

export default function catchAsync(asyncFunction: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    asyncFunction(req, res, next).catch(next);
  };
}