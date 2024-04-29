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
  function goBack(){
    router.push("/products");
  }
  async function deleteProduct(){
    await axios.delete('/api/products?id='+id);

    goBack();
  }
  return (
    <Layout>
        <h1>Do you really want to Delete {productDetails?.title}</h1>
        <button onClick={() => deleteProduct()}>
            Yes
        </button>
        <button onClick={() => goBack()}>
            No
        </button>
    </Layout>
  )
}
