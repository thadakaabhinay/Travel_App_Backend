const express=require("express");


const category=require('../model/category.model');
const categories=require("../data/categories")
const router=express.Router();
router.route("/")
    .post(async (req,res)=>{
        try{
            // await Hotel.remove();
            await category.deleteMany(); 
            const categoriesInDB= await category.insertMany(categories.data);
            res.json(categoriesInDB)
        }catch(err){
            console.log(err);
           res.json({message:"could not add categories to DB"})
        }

       
    })

module.exports=router;