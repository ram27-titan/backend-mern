import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

const app = express();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fullstack_crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server is running successfully on Port ${PORT}`));
