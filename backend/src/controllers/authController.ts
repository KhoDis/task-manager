import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import {AuthenticatedRequest} from "../types";

export const signUp = async (req: AuthenticatedRequest, res: Response) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const logIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const me = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};