import Layout from "@/components/Layout";

export default function Categories(){
    return(
        <Layout>
            <h1>
                Categories
            </h1>
            <label>
               New Category Name
            </label>
            <form>
                <input type="text"  placeholder = "Category Name" />
                <button type="submit" className="btn-primary py-1">Save</button>
            </form>
        </Layout>
    )
}