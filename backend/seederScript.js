require("dotenv").config();

const productData = require("./data/products");
const customerData = require("./data/customers");
const orderData = require("./data/orders");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const Customer = require("./models/Customer");
const Order= require("./models/Order");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

const importData1 = async () => {
  try {
    await Customer.deleteMany({});

    await Customer.insertMany(customerData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};
const importData2 = async () => {
  try {
    await Order.deleteMany({});

    await Order.insertMany(orderData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};
importData();
importData1();
importData2();