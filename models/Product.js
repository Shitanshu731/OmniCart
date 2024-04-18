import mongoose, {model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
    title : {
        type : String,
        required : true,
    },  
    description : String,
    images : [{type : String}],
    price : {
        type :Number,
        required : true
    },
    category: {type : mongoose.Types.ObjectId, ref: "Category"},
    properties : [{type:Object}]
})

export const Product = models.Product || model('Product', ProductSchema);