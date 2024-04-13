import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductForm({
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
        const data = {price,description,title};
        await axios.post('/api/products',data);
        setGoBack(true);
    }
    if(goBack) router.push('/products');
    return (
        <form onSubmit={createProduct}>
        <label>Product Name</label>
           <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="product name"/>
           <label>Description</label>
           <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="description"></textarea>
           <label>Price in(USD)</label>
           <input value={price} onChange={e => setPrice(e.target.value)} placeholder="price" type="number" />
           <button type="submit" className="btn-primary">Save</button>
           </form>
        
    )
}