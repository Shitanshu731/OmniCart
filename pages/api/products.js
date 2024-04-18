import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handle(req,res){
    const {method} = req;
    await mongooseConnect();
    if(method === 'POST'){
        const {title, description, price,images,category} = req.body;
        const productDoc = await Product.create({
            title,
            description,
            price,
            images,
            category
        })
        res.json(productDoc);
    }
    if(method === 'PUT'){
        const {title, description, price,images, _id,category} = req.body;
        const productDoc = await Product.updateOne({_id},{
            title,
            description,
            price,
            images,
            category
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