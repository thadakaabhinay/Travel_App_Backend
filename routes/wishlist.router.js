const express=require("express");
const verifyUser=require("../middleware/verifyuser");
const wishlistController=require("../controllers/wishlistController");

const { createwishlistHandler,deletewishlistHandler,getwishlistHandler }=wishlistController

const router=express.Router();

router.route("/")
    .post(verifyUser,createwishlistHandler)

router.route("/:id")
    .delete(verifyUser,deletewishlistHandler)

router.route("/")
    .get(verifyUser,getwishlistHandler)

module.exports=router;