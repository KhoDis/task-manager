import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  taskId: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

export default model('Task', taskSchema);