import express from "express"
import { isSellerAuth, sellerLogin, sellerLogout } from "../controllers/sellerCOntroller.js"
import authSeller from "../middlewares/authSeller.js";

const sellerRoute = express.Router()



sellerRoute.post('/login',sellerLogin);
sellerRoute.post('/is-auth',authSeller,isSellerAuth);
sellerRoute.get('/logout',authSeller,sellerLogout);


export default sellerRoute ; 


