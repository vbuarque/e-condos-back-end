import mongoose, { Schema, Document } from 'mongoose';

export interface IFriend extends Document {
  name: string;
  email: string;
}

const FriendSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.model<IFriend>('Friend', FriendSchema);