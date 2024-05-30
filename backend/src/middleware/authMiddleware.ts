import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../types";

const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  // Get token from header
  const auth = req.header("Authorization");

  // Check if token doesn't exist
  if (!auth) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  const token = auth.replace("Bearer ", "");

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // Add user from payload
    req.userId = (decoded as any).userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authMiddleware;
