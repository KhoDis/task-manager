import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {AuthenticatedRequest} from "../types";

const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // Add user from payload
    req.userId = (decoded as any).userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;
