import mongoose from 'mongoose';
import bluebird from 'bluebird'


const localMongoUri = 'mongodb://localhost:27017/end_of_time';
const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_URI } = process.env

class Connection {
  constructor() {
    const url = MONGODB_URI || localMongoUri;
    try {
      mongoose.Promise = bluebird;
      mongoose.connect(url, {
        user: MONGODB_USERNAME,
        pass: MONGODB_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Established new connection with mongodb:', url)
    } catch (e) {
      console.error(e)
    }
  }
}


export default new Connection();