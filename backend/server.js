import express from 'express';
import cors from 'cors';
import { db } from './config/db.js';
import 'dotenv/config'
import adminRouter from './routes/adminRoutes.js';
import teacherRouter from './routes/teacherRoute.js';
import studentRouter from './routes/student.js'
const app = express();
const port = 8080;


db()
app.use(cors({
    origin:['http://localhost:5173','http://localhost:5174','http://localhost:5175'],
    credentials:true
}));
app.use(express.json());
app.use('/admin',adminRouter)
app.use('/teacher',teacherRouter)
app.use('/alumini',studentRouter)
app.get('/',(reqq,res)=>{res.send("hello")})



app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})