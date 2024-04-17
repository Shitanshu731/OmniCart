import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState("");
  useEffect(() => {
    getCategories();
  }, []);
  function getCategories() {
    axios.get("/api/categories").then((res) => setCategories(res.data));
  }
  async function saveCategory(e) {
    e.preventDefault();
    await axios.post("/api/categories", { name,parentCategory });
    setName("");
    getCategories();
  }
  return (
    <Layout>
      <h1>Categories</h1>
      <label>New Category Name</label>
      <form onSubmit={saveCategory}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
        value={parentCategory}
        onChange={(e) => setParentCategory(e.target.value)}
        placeholder="ASdasd"
      >
        <option value="">Parent Categories</option>
        {categories?.length > 0 &&
          categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
      </select>
        <button type="submit" className="btn-primary py-1">
          Save
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <td>Category Name</td>
          </tr>
        </thead>
        <tbody>
          {categories?.length > 0 &&
            categories.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
