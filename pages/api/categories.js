import { mongooseConnect } from "@/lib/mongoose";
import {Category} from "@/models/category";
import { getAuth } from "@clerk/nextjs/server";

// import authHandler from "./auth";



export default async function handle(req,res){
    const {method} = req;
    await mongooseConnect();
    // await authHandler(req, res);
    if(method === "GET"){
        const allcategories = await Category.find().populate('parent');
        res.json(allcategories);
    }

    if(method === "POST") {
        const {name,parentCategory,properties} = req.body;

        const category = await Category.create({name, parent : parentCategory || undefined,properties});
        res.json({
            category
        })
    }
    if(method === "PUT") {
        const {name,parentCategory,_id,properties} = req.body;
        const category = await Category.updateOne({_id},{name, parent : parentCategory,properties});
        res.json({
            category
        })
    }
    if(method === "DELETE") {
        const {_id} = req.query;
        await Category.deleteOne({_id});
    }
} 