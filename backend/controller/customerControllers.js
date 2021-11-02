const customer = require('../models/Customer');
const jwt = require('jsonwebtoken');

exports.signup = (req,res) => {



    customer.findOne({email: req.body.email})
    .exec((_error, Customer) => {
        if (Customer) return res.status(400).json({
            message: 'User already Registered'
        });

        

        const {
            name,
            email,
            password
        } = req.body;
        const _Customer = new customer({
            name,
            email, 
            password,
        });

        _Customer.save((error, data) => {
            if (error){
                console.log(error);
                return res.status(400).json({
                    message: 'Something Went wrong'
                });
            }

            if (data){
                return res.status(201).json({
                    message: 'User created successfully'
                });
            }
        });

    });
}

exports.signin = (req,res)=>{
    customer.findOne({email: req.body.email})
    .exec((error, Customer) =>{
        if (error) return res.status(400).json({error});
        if (Customer){
            if(Customer.authenticate(req.body.password)){
                const token = jwt.sign({_id:Customer._id, address:Customer.address}, process.env.JWT_SECRET, {expiresIn: '1h'});
                const {_id, name, email, address } = Customer;
                res.status(200).json({
                    token, 
                    Customer:{
                        _id, name, email, address
                    }
                });
            } else {
                return res.status(400).json({
                    message:'Invalid Password'
                })
            }

        }else{
            return res.status(400).json({message: "Something went wrong"});
        }

    });
}
