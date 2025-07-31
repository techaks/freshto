import mongoose, { mongo } from "mongoose";




const DBConnect = async()=>{

    try {

        mongoose.connect(process.env.MONGO_URL );
        console.log("Database connected successfully");

        
    } catch (error) {
        console.log(error);
        
        
    }
}

export default DBConnect;