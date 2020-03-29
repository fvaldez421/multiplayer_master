import { Schema, model } from 'mongoose';


const USER_TYPES = [
  'player',
  'admin'
]

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  user_type: {
    type: String,
    enum: USER_TYPES,
    required: true,
    default: 'player'
  },
  temp_uuid: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String
  }
}, {
  timestamps: true
});


const User = model('User', UserSchema);

export default User;