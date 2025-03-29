const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db');
const chatRoutes = require('./routes/chatroutes');

dotenv.config();
connectDb();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/chats', chatRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});