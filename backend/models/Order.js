const mongoose= require('mongoose');


const orderSchema=new mongoose.Schema({
    customerId:{
        type: Number

    },
    productId:{
        type:Number

    },
    orderdetails :[{
        quantity:{
         type:Number,
        
        },
        cost:{
            type:Number,
            required:true
           },
           shippingId:{
            type:Number,
            required:true
           }
    }],


});

const Order = mongoose.model("order" , orderSchema);
module.exports=Order;