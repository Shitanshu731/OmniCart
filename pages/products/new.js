import Layout from "@/components/Layout";

export default function NewProduct() {
    return (
        <Layout>
        <h1 className="text-blue-900 mb-2 text-xl">New Product</h1>
        <label>Product Name</label>
           <input type="text" placeholder="product name"/>
           <label>Description</label>
           <textarea placeholder="description"></textarea>
           <label>Price in(USD)</label>
           <input placeholder="price" type="number" />
           <button className="btn-primary">Save</button>
        </Layout>
    )
}