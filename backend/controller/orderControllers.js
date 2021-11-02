const Order = require('../models/Order');



exports.addItem = (req, res) => {

    Order.findOne({ Customer: req.Customer._id })
        .exec((error, order) => {
            if (error) return res.status(400).json({ error });
            if (order) {

              
                const product = req.body.orderItems.product;
                const item = order.orderItems.find(c => product)

                if (item) {
                    Order.findOneAndUpdate({ "Customer": req.Customer._id, "orderItems.product": product }, {
                        "$set": {
                            "orderItems.$": {
                                ...req.body.orderItems,
                                quantity: item.quantity + req.body.orderItems.quantity
                            }
                        }

                    })
                        .exec((error, _Order) => {
                            if (error) return res.status(400).json({ error });
                            if (_Order) {
                                return res.status(201).json({ Order:  _Order })
                            }
                        })

                } else {
                    Order.findOneAndUpdate({ user: req.Customer._id }, {
                        "$push": {
                            "orderItems": req.body.orderItems
                        }

                    })
                        .exec((error, _Order) => {
                            if (error) return res.status(400).json({ error });
                            if (_Order) {
                                return res.status(201).json({ Order: _Order })
                            }
                        })
                }

               

            } else {
              
                const order = new Order({
                    Customer: req.Customer._id,
                    orderItems: [req.body.orderItems]
                });


               order.save((error, order) => {
                    if (error) return res.status(400).json({ error });

                    if (order) {
                        return res.status(201).json({ order });

                    }
                });

            }
        });

};
