const model = require('../models/productModel')

const getAllProducts = async () => {
  try {
    return await model.getAllProducts();
  } catch (error) {
    throw ("get all product fail SERVICE", error)
  }
}

const getProduct = async (productID) => {
  try {
    return await model.getProduct(productID)
  } catch (error) {
    throw ("get product fail SERVICE", error)
  }
}

const createProduct = async (name, star, picture, detail, size, type, price) => {
  try {
    return await model.createProduct(name, star, picture, detail, size, type, price);
  } catch (error) {
    throw ("create product fail SERVICE", error)
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct
}