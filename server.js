const app = require('./index');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

dotenv.config({ path: 'config/.env' });

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
