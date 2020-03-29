import { Schema, model } from 'mongoose';


const { Types } = Schema;

const LOBBY_TIER_TYPES = [
  'free',
  'plus'
];

const GAME_TYPES = [
  // cards against humanity
  'c-a-h'
];

const STATUS_TYPES = [
  'default',
  'up',
  'in-game',
  'error',
  'n/a'
];


const LobbySchema = new Schema({
  // optional lobby moderator
  mod: Types.ObjectId,
  // name of lobby (can be changed)
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  // external ip to be targeted by FE
  external_ip: {
    type: String,
    unique: true,
    required: true
  },
  // lobby tier
  tier: {
    type: String,
    enum: LOBBY_TIER_TYPES,
    default: 'free'
  },
  // if lobby is private (plus tier option)
  private: {
    type: Boolean,
    default: true
  },
  // 6 char hash for joining lobbies
  join_key: {
    type: String,
    unique: true,
    minlength: 4,
    maxlength: 6
  },
  // lobby game options
  game_types: {
    type: [String],
    enum: GAME_TYPES,
    default: ['c-a-h'],
    required: true
  },
  // lobby status
  status: {
    type: String,
    enum: STATUS_TYPES,
    default: 'default'
  },
  status_text: {
    type: String,
    default: 'Booting up...'
  }
}, {
  timestamps: true
});


const Lobby = model('Lobby', LobbySchema);

export default Lobby;