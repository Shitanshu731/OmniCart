import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/models/category";

export default async function handle(req,res){
    const {method} = req;
    await mongooseConnect();

    if(method === "POST") {
        const {name} = req.body;

        const category = await Category.create({name});
        res.json({
            category
        })
    }
} 