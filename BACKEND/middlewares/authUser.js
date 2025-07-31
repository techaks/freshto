import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
    
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        
        if(!decoded.id){
            return res.status(401).json({ message: "Unauthorized" });
        }
        
      req.user = { userId: decoded.id };


        next();
        

    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "error" });
        
    }



}

export default authUser;