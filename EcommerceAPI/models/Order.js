const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userID:{type:String, required:true},
        product:[
            {
                productID:{type:String},          
            
                quantity:{type:Number, default:1}
            }
        ],
        amount:{type: Number, required:true},
        address:{type: Object, required:true},
        status:{type: String, default:"pending"},
    },
    {timestamps:true}
);

module.exports = mongoose.model("Order", OrderSchema);