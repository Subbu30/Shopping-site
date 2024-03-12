const User = require("../models/User");
const {veriftToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");
const router = require("express").Router();


//UPDATE USER
router.put("/:id",verifyTokenAndAuthorization, async (req,res)=>{
  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_KEY).toString()
  }

  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
      $set : req.body,
    },{new: true}
    )
    res.status(200).json(updatedUser)
  }catch(err){
    return res.status(500).json(err)
  }
})

//DELETE
router.delete("/:id",verifyTokenAndAuthorization, async (req,res)=>{
    try{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted")
  }catch(err){
    return res.status(500).json(err)
  }
})

//GET USER
router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
  try{
    const user = await User.findById(req.params.id)
    const {password, ...others}=user._doc;    //To Hide Password
    res.status(200).json(others)
  }catch(err){
    return res.status(500).json(err)
  }
})

//GET ALL USERS
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
  const query = req.query.new       //new is the name of query (url localhost:3000/api/users/?new=true)
  try{
    const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find() //sort(id:-1) will display last 5 users
    res.status(200).json(users)
  }catch(err){
    return res.status(500).json(err)
  }
})

//GET USER STATS (to return number of user per month)
router.get("/stats", verifyTokenAndAdmin, async(req,res)=>{      
  const currentYear = new Date().getFullYear();      //current year
  const lastYear = new Date(currentYear-1);
  try{

    const data = await User.aggregate([
      {$match: {createdAt : {$gte: lastYear}} },
      {$project: {month: { $month:"$createdAt"}}},
      {$group:{_id: "$month", total: {$sum:1}}}
    ])
    res.status(200).json(data)
  }catch(err){
    return res.status(500).json(err)

  }
})


module.exports = router;