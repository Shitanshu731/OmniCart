import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function Categories(){
    const [name,setName] = useState();
    async function saveCategory(e){
        e.preventDefault();
        await axios.post('/api/categories' , {name});
        setName('');
    }
    return(
        <Layout>
            <h1>
                Categories
            </h1>
            <label>
               New Category Name
            </label>
            <form onSubmit={saveCategory}>
                <input type="text"  placeholder = "Category Name" value={name} onChange={e => setName(e.target.value)} />
                <button type="submit" className="btn-primary py-1">Save</button>
            </form>
        </Layout>
    )
}