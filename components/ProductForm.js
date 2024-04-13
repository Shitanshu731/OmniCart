import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductForm({
    _id,
    title : existingTitle,
    description : existingDescription,
    price : existingPrice
}) {
    const router = useRouter();
    const [title,setTitle]  = useState(existingTitle || '');
    const [price,setPrice]  = useState(existingPrice || '');
    const [description,setDescription]  = useState(existingDescription || '');
    const [goBack,setGoBack]  = useState(false);
    async function createProduct(e){
        e.preventDefault();
        if(_id) {
            //Update Product
            const data = {price,description,title};
            await axios.put('/api/products',{...data,_id})
        }
        else{
            //Create Product
        const data = {price,description,title};
        await axios.post('/api/products',data);
        }
        setGoBack(true);
        
    }
    if(goBack) router.push('/products');
    return (
        <form onSubmit={createProduct}>
        <label>Product Name</label>
           <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="product name"/>
           <label >Photos</label>
           <div>
            <label className="w-24 h-24 text-center curso flex items-center justify-center text-sm gap-1 rounded-lg bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
          </svg>
          <div>
            Upload
          </div>
          <input type="file" className="hidden" />
            </label>
            {true && (
                <div>No photos uploaded</div>
            )}
           </div>
           <label>Description</label>
           <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="description"></textarea>
           <label>Price in(USD)</label>
           <input value={price} onChange={e => setPrice(e.target.value)} placeholder="price" type="number" />
           <button type="submit" className="btn-primary">Save</button>
           </form>
        
    )
}