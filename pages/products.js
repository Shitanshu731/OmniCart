import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

export default function Products(){
    useEffect(() => {
        axios.get('/api/products').then(res => {
            console.log(res.data);
        })
    },[])
    return (
        <Layout>
            <Link href={'/products/new'} className="bg-blue-900 rounded-md py-1 px-3 text-white">Add new product</Link>
        </Layout>
    )
}