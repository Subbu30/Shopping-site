const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);


const token = req.body.stripeToken;

router.post("/payments",async(req,res)=>{
    const charge = await stripe.charges.create({
        amount:500,
        currency:"usd",
        source:token,
        descriprion:"thanks for shopping"
    })
})


module.exports = router;