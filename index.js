const express = require('express');
// import mongoose from 'mongoose';
const cors = require('cors');
const app = express();

const UserRoute = require('./routes/UserRoute');

// const app = express();
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error));
// db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

module.exports = app;

// const PORT = process.env.PORT;

// app.listen(PORT, () => console.log(`Server is running successfully on Port ${PORT}`));
