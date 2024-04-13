import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage(){
    const router = useRouter();
    const [productDetails,setProductDetails] = useState(null);
    console.log({router});
    const {id} = router.query;
    useEffect(() => {
        if(!id) return
        axios.get('/api/products?id='+id).then(res => setProductDetails(res.data));
    },[])
    return (
        <Layout>
        <h1 className="text-blue-900 mb-2 text-xl">Edit Product</h1>
        {productDetails && (
            <ProductForm {...productDetails}/>
        )}
        </Layout>
    )
}