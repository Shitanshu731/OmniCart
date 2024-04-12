import { Schema } from "mongoose";

const ProductSchema = new Schema({
    title : {
        type : string,
        required : true
    },  
    description : string,
    price : {
        type :string,
        required : true
    }
})

export const Product = model('Product', ProductSchema)