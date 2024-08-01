const wishlist=require('../model/wishlist.model');

const createwishlistHandler=async (req,res)=>{
    const newWishlist=new wishlist(req.body)
    try{
        const savedWishlist=await newWishlist.save();
        res.status(201).json(savedWishlist);
    }catch(err){
        res.status(500).json({message:"failed to create wishlist"});

    }
}
const deletewishlistHandler =async (req,res)=>{
    try{
        await wishlist.findByIdAndDelete(req.params.id);
        res.json({meassage:"Hotel Deleted From wishlist"})
    }catch(err){
        res.status(500).json({meassage:
           "couldn't delete hotel from wishlist" })
    }
}

const getwishlistHandler=async (req,res)=>{
    try{
       const Wishlist =await wishlist.find({});
       Wishlist ? res.json( Wishlist) : res.json({message:"no wishlist found"})

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports={ createwishlistHandler,deletewishlistHandler,getwishlistHandler };