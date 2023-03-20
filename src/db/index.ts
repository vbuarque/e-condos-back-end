import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://viniciusbuarque:NaJmpJ1Tkge2prXW@secretcristimas.shry3pp.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

export default db;