import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import usersRoutes from './routes/user.route.js'
import connectToMongoDB from './db/connectToDb.js';
import cookieParser from 'cookie-parser';
dotenv.config();


const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser())

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',usersRoutes);

app.listen(process.env.PORT,()=>{
  console.log(`server running on port ${PORT}`);
  connectToMongoDB();
})


