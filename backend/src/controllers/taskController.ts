import { Request, Response } from 'express';
import Task from '../models/Task';
import {AuthenticatedRequest} from "../types";

export const createTask = async (req: AuthenticatedRequest, res: Response) => {
  const { title, description } = req.body;
  try {
    const task = new Task({ title, description, userId: req.userId });
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

export const getTasks = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

export const updateTask = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (!task.userId) return res.status(403).json({ msg: 'Task has no user' });
    if (task.userId.toString() !== req.userId) return res.status(403).json({ msg: 'Not authorized' });

    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

export const deleteTask =   async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (!task.userId) return res.status(403).json({ msg: 'Task has no user' });
    if (task.userId.toString() !== req.userId) return res.status(403).json({ msg: 'Not authorized' });

    await task.deleteOne();
    res.json({ msg: 'Task deleted' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};
