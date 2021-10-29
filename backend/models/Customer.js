const mongoose= require('mongoose');


const customerSchema=new mongoose.Schema({
    name:{
        type: String,

    },
    email:{
        type: String,
        required: true

    },
    address:{
        type: String,
       

    },
    paymentdetails:{
        type: String,
     

    },
    shippingInfo :[{
       
        cost:{
            type:Number,
           
           },
           region:{
            type:String,
          
           }
    }],


});

const Customer = mongoose.model("customer" , customerSchema);
module.exports=Customer;