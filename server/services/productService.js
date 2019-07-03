const model = require('../models/productModel')

const getAllProducts = async () => {
  try {
    return await model.getAllProducts();
  } catch (err) {
    throw ("get all product fail SERVICE", err)
  }
}

const getProduct = async (productID) => {
  let result;
  try {
    const result = await model.getProduct(productID);
    if(!result){
      return "abc"
    }
    return result;
  } catch (err) {
    throw err
  }
}

// const createProduct = async (name, star, picture, detail, size, type, price) => {
  const createProduct = async (name, star, picture, detail, pricing) => {
  try {
    // return await model.createProduct(name, star, picture, detail, size, type, price);
    return await model.createProduct(name, star, picture, detail, pricing);
  } catch (err) {
    throw ("create product fail SERVICE", err)
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct
}