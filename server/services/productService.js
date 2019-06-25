const model = require('../models/productModel')

const getAllProducts = async () => {
  try{
    return await model.getAllProducts();
  }catch(error){
    console.log(error)
    return error
  }
}

const getProduct = async(productID) => {
  try{
    return await model.getProduct(productID)
  }catch(error){
    console.log(error)
    return error;
  }
}

const createProduct = async(name, star, picture, detail, size, type, price) =>{
  return await model.createProduct(name, star, picture, detail, size, type, price);
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct
}