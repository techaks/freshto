import { useState } from "react";
import { assets, categories } from "../../assets/assets";


const AddProducts = () => {
    

  const [files,setFiles] = useState([])
  const [name,setName] = useState("");
  const [description,setDescription] = useState(""); 
  const [category,setCategory] = useState("");
  const [price,setPrice] = useState("");
  const [offerPrice,setOfferPrice] = useState("");

console.log(categories);

  const fileSubmit = (e) => {
    e.preventDefault();
    console.log(files, name, description, category, price, offerPrice);
    
  }

 return (
        <div className="flex flex-col justify-between bg-white">
            <form onSubmit={fileSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
                <div>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image${index}`}>
                                <input onChange={(e)=>{
                                    const updatedFiles = [...files];
                                    updatedFiles[index] = e.target.files[0];
                                    setFiles(updatedFiles);
                                }}
                                 accept="image/*" type="file" id={`image${index}`} hidden />
                                <img className="max-w-24 cursor-pointer" src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area} alt="uploadArea" width={100} height={100} />
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
                    <input
                       onChange={(e) => setName(e.target.value)}
                     id="product-name" type="text" placeholder="product-name" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required value={name}  />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Description "></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select onChange={(e)=>setCategory(e.target.value)} value={category} id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                        {
                            categories?.map((item,index)=> (
                                <option key={index} value={item.path}>{item.path}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input 
                        value={price > 0 ? price : ""}
                        onChange={(e) => setPrice(e.target.value)}
                        id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input 
                        value={ offerPrice > 0 ? offerPrice : ""}
                        onChange={(e) => setOfferPrice(e.target.value)}
                         id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <button onClick={fileSubmit} className="px-8 py-2.5 bg-green-500 hover:bg-green-600 cursor-pointer text-white font-medium rounded">ADD</button>
            </form>
        </div>
    );





};

export default AddProducts;