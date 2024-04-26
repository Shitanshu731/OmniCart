import { mongooseConnect } from "@/lib/mongoose";
// import authHandler from "./auth";
import { Product } from "@/models/Product";

export default async function handle(req,res){
    const {method} = req;
    await mongooseConnect();
    // await authHandler(req, res);
    if(method === 'POST'){
        const {title, description, price,images,category,properties} = req.body;
        const productDoc = await Product.create({
            title,
            description,
            price,
            images,
            category,properties
        })
        res.json(productDoc);
    }
    if(method === 'PUT'){
        const {title, description, price,images, _id,category,properties} = req.body;
        const productDoc = await Product.updateOne({_id},{
            title,
            description,
            price,
            images,
            category,properties
        })
        res.json({success : true,message : "Product Updated"})
    }
    if(method === 'DELETE'){
       if(req.query.id){
        await Product.deleteOne({_id:req.query.id})
        res.json({success : true,message : "Product Deleted"})
       }
    }
    if(method === 'GET'){
        if(req?.query?.id){
            res.json(await Product.findOne({_id:req.query.id}))
        }else{
        res.json(await Product.find());
        }
    }
    
}