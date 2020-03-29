import mongoose from 'mongoose';
import bluebird from 'bluebird'

const localMongoUri = 'mongodb://localhost:27017/end_of_time';

class Connection {
  constructor() {
    const url = process.env.MONGODB_URI || localMongoUri;
    mongoose.Promise = bluebird;
    mongoose.connect(url, { useNewUrlParser: true });
    console.log('Established new connection with mongodb:', url)
  }
}


export default new Connection();