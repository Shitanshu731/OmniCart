import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

export default function EditProductPage(){
    const router = useRouter();
    console.log({router});
    
    return (
        <Layout>
            Edit products here
        </Layout>
    )
}