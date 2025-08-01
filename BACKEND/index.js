import express from 'express'
import 'dotenv/config'
import DBConnect from './utility/Db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import sellerRoute from './routes/sellerRoute.js';
import cloudinaryConnect from './utility/Cloudinary.js';
import productRouter from './routes/productRoute.js';



const app = express();

app.use(cors({
    origin: '*',
    credentials: true,

}))
app.use(express.json());    
app.use(cookieParser())

const PORT = process.env.PORT ||4000
app.listen(PORT,()=>{
    DBConnect();
    console.log(`http://localhost:${PORT}`)
})
await cloudinaryConnect();



app.get('/',(req,res)=>{
    res.send("Welcome to FreshTo")
})

app.use('/api/user',userRoutes);
app.use('/api/seller',sellerRoute);
app.use('/api/product',productRouter);


