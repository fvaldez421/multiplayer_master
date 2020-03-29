import mongoose from 'mongoose';
import bluebird from 'bluebird'


const localMongoUri = 'mongodb://localhost:27017/end_of_time';
const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_URI } = process.env

class Connection {
  constructor() {
    const url = MONGODB_URI || localMongoUri;
    mongoose.Promise = bluebird;
    mongoose.connect(url, {
      user: MONGODB_USERNAME,
      pass: MONGODB_PASSWORD,
      useNewUrlParser: true
    });
    console.log('Established new connection with mongodb:', url)
  }
}


export default new Connection();