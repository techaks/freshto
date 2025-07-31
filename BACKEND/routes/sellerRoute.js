import express from "express"
import { isSellerAuth, sellerLogin } from "../controllers/sellerCOntroller.js"
import authSeller from "../middlewares/authSeller.js";

const sellerRoute = express.Router()



sellerRoute.post('/login',sellerLogin);
sellerRoute.post('/is-auth',authSeller,isSellerAuth);
sellerRoute.post('/logout',authSeller,sellerLogin);


export default sellerRoute ; 


