import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProduct(){
  const [productDetails, setProductDetails] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) 
    {
        return
    }
    axios
      .get('/api/products?id='+id)
      .then((res) => setProductDetails(res.data));
  }, [id]);
  
  return (
    <Layout>
        <h1>Do you really want to Delete {productDetails?.title}</h1>
        <button>
            Yes
        </button>
        <button>
            No
        </button>
    </Layout>
  )
}
