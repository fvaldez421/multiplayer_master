import mongoose from 'mongoose';


const localMongoUri = 'mongodb://localhost:27017/test-collection';

class Connection {
  constructor() {
    const url = process.env.MONGODB_URI || localMongoUri;
    mongoose.Promise = global.Promise;
    mongoose.connect(url);
    console.log('Established new connection with mongodb:', url)
  }
}


export default new Connection();