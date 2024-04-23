import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

function Categories({ swal }) {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState("");
  const [editedCategory, setEditedCategory] = useState(null);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  function getCategories() {
    axios.get("/api/categories").then((res) => setCategories(res.data));
  }
  function editCategory(category) {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
    setProperties(category.properties.map(({name, values}) => ({name,
    values : values.join(',')})));
  }
  function deleteCategory(category) {
    swal
      .fire({
        title: "Are you sure",
        text: `Do you want to delete ${category.name}`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
      })
      .then(async result => {
        if(result.isConfirmed){
            const {_id} = category;
            await axios.delete('/api/categories?_id='+_id);
            getCategories();
        }
        
      });
  }
  async function saveCategory(e) {
    e.preventDefault();
    const data = { name, parentCategory, 
      properties : properties.map(p => ({
        name : p.name,
        values : p.values.split(','),
      })) };
    if (editedCategory) {
      await axios.put("/api/categories", { ...data, _id: editedCategory._id });
      setEditedCategory(null);
    } else {
      await axios.post("/api/categories", data);
    }
    setName("");
    setProperties([]);
    setParentCategory('');
    getCategories();
  }
  function addProperty(){
      setProperties(prev => {
        return [...prev, {name : '',values : ''}];
      });
  }
  function handlePropertyNameChange(index, property, newName){
    setProperties(prev => {
      const properties = [...prev];
      properties[index].name = newName;
      return properties;
    })
  }
  function handlePropertyValuesChange(index, property, newValues){
    setProperties(prev => {
      const properties = [...prev];
      properties[index].values = newValues;
      return properties;
    })
  }
  function removeProperty(indexToRemove){
      setProperties(prev => {
        return [...prev].filter((p,pIndex) => {
          return pIndex !== indexToRemove;
        })
      })
  }
  return (
    <Layout>
      <h1>Categories</h1>
      <label>
        {editedCategory
          ? `Edit Category ${editedCategory.name}`
          : `New Category`}
      </label>
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
          <option value="asdasd">Parent Categories</option>
          {categories?.length > 0 &&
            categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>
        <div>
        <label>Properties</label>
           <button className="btn-default" type="button" onClick={addProperty}>Add new property</button>
           {properties?.length > 0 && properties.map((property, index) => (
            <div className="flex gap-1" key={property.values}>
              <input type="text" onChange={(e) => handlePropertyNameChange(index,property,e.target.value)} value={property.name} placeholder="property name (example : color) "/>
              <input type="text" onChange={(e) => handlePropertyValuesChange(index,property,e.target.value)} value={property.values} placeholder="values, comma seperated"/>
              <button type="button" onClick={() => removeProperty(index)} className="btn-default">Remove</button>
            </div>
           ))}
           </div>
           {editedCategory &&  ( <button type="button" className="btn-primary py-1" onClick={() => setEditedCategory(null)}>Cancel</button> )}
        <button type="submit" className="btn-primary py-1">
          Save
        </button>
        
      </form>
      {!editedCategory && (
      <table className="basic">
        <thead>
          <tr>
            <td>Category Name</td>
            <td>Parent Category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories?.length > 0 &&
            categories.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>{category.parent?.name}</td>
                <td>
                  <button
                    className="btn-primary"
                    onClick={() => editCategory(category)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn-primary"
                    onClick={() => deleteCategory(category)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    )}
    </Layout>
  );
}
export default withSwal(({ swal }, ref) => <Categories swal={swal} />);
