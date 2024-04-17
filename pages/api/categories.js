import { mongooseConnect } from "@/lib/mongoose";
import {Category} from "@/models/category";

export default async function handle(req,res){
    const {method} = req;
    await mongooseConnect();
    if(method === "GET"){
        const allcategories = await Category.find().populate('parent');
        res.json(allcategories);
    }

    if(method === "POST") {
        const {name,parentCategory} = req.body;

        const category = await Category.create({name, parent : parentCategory});
        res.json({
            category
        })
    }
} 