const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER

router.post("/register", async(req, res) => {
    const newUser = new User({
        username: req.body.username, 
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_KEY).toString()
    });

    try{
        const NewUser = await newUser.save();
        res.status(201).json(NewUser);
    }catch(err){
      res.status(500).json(err);
    }
   
});


//LOGIN 

router.post("/login",async(req,res)=>{
  
const username = req.body.username;
const loginPassword = req.body.password;

try{
    const user = await User.findOne({username:username})
    !user && res.status(401).json("invalid credientials")

    hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_KEY).toString(CryptoJS.enc.Utf8)
    loginPassword !== hashedPassword && res.status(401).json("invalid credientials")

    const accessToken = jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin
    },process.env.JWT_SEC,
    {expiresIn:"2d"}
    )


    const {password, ...others}=user._doc;    //To Hide Password(spread operator) 
    
    res.status(200).json({...others, accessToken})
}catch(err){
    res.status(500).json(err)
}

})




module.exports = router;