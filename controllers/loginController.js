const User=require("../model/user.model");
const CryptoJs=require("crypto-js");
const jwt=require("jsonwebtoken");

const loginHandler=async(req,res)=>{
    try{
        const user=await User.findOne({number:req.body.number});
        !user && res.status(401).json({message:"Incorrect Mobile number"})
        const decodedPassword=CryptoJs.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).toString(
            CryptoJs.enc.Utf8
        );
        decodedPassword !== req.body.password && res.status(401).json({message:"Incorrect Password"});

        const {password,...rest}=user._doc;
        const accessToken=jwt.sign({username:user.username},process.env.ACCESS_TOKEN)
        res.json({...rest,accessToken});
    }catch(err){
        res.status(500).json({message:"Error logging in user"})
    }
}


module.exports=loginHandler;