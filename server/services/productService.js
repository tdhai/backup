const model = require('../models/productModel')

const getAllProducts = async () => {
  try {
    return await model.getAllProducts();
  } catch (error) {
    throw ("get all product fail SERVICE", error)
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
  } catch (error) {
    throw error
  }
}

// const createProduct = async (name, star, picture, detail, size, type, price) => {
  const createProduct = async (name, star, picture, detail, pricing) => {
  try {
    // return await model.createProduct(name, star, picture, detail, size, type, price);
    return await model.createProduct(name, star, picture, detail, pricing);
  } catch (error) {
    throw ("create product fail SERVICE", error)
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct
}