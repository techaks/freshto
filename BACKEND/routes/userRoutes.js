import express from 'express';
import { isAuth, Login, logout, Register } from '../controllers/userControllers.js';
import authUser from '../middlewares/authUser.js';


const userRoutes = express.Router();

userRoutes.post('/register',Register);
userRoutes.post('/login',Login);
userRoutes.get('/is-auth',authUser,isAuth);
userRoutes.get('/logout',authUser,logout);


export default userRoutes;