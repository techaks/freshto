import Product from "../models/Product.js";
import {v2 as cloudinary}  from "cloudinary"



export const addProduct = async (req,res)=>{
    try {
       let productData = JSON.parse(req.body.productData);
         const images = req.files;

         let imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await  cloudinary.uploader.upload(item.path, {
                    resource_type: "image",
                });
                 console.log(result.secure_url)
                return result.secure_url;
            
            })
         )

         await Product.create({
            ...productData,
            images: imagesUrl,
         });

         return res.status(201).json({
            success: true,
            message: "Product added successfully",
         });
        
    } catch (error) {
        console.error("Error adding product:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to add product",
            error: error.message,
        });
        
    }

}

export const productList = async (req,res)=>{
    try {
        const products = await Product.find().sort({createdAt:-1});
        return res.status(200).json({
            success: true,
            products,
        });
        
    } catch (error) {
         console.error("Error adding product:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to add product",
            error: error.message,
        });
        
        
    }


}

export const productById = async (req,res)=>{
    try {
        const {id} = req.body;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        return res.status(200).json({
            success: true,
            product,
        });

        
    } catch (error) {
         console.error("Error adding product:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to add product",
            error: error.message,
        });
        
        
    }


}

export const changeStock = async (req,res)=>{
    try {
        const {id, inStock} = req.body;

         await Product.findByIdAndUpdate(id, { inStock }, { new: true });

       
        return res.status(200).json({
            success: true,
            message: "Stock status updated ",
        
        });
        
    } catch (error) {
         console.error("Error adding product:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to add product",
            error: error.message,
        });
        
        
    }


}