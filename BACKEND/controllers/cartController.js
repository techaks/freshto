import User from "../models/User.js";




export const updateCart =async(req,res)=>{
    try {

        const{userId,cartItems} = req.body;
        console.log(userId);


// const user = await User.findById(userId);
// user.cartItems.set(productId, (user.cartItems.get(productId) || 0) + 1);
// await user.save();

        await User.findByIdAndUpdate(userId,{cartItems:cartItems},{new:true})
        console.log(cartItems);
        
        console.log("cart")
        return res.status(200).json({
            success:true,
            message:"cart Updated"
        })
        
    } catch (error) {
        console.log(error.message)
        return res.status(200).json({
            success:false,
            message:error.message
        })

        
    }
}