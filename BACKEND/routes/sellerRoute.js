import express from "express"

import authSeller from "../middlewares/authSeller.js";
import { isSellerAuth, sellerLogin, sellerLogout } from "../controllers/sellerController.js";

const sellerRoute = express.Router()



sellerRoute.post('/login',sellerLogin);
sellerRoute.post('/is-auth',authSeller,isSellerAuth);
sellerRoute.get('/logout',authSeller,sellerLogout);


export default sellerRoute ; 


