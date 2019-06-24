const model = require('../models/ProductModel')

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

const createProduct = async(name, star, picture, detail, pricing) =>{
  return await model.createProduct(name, star, picture, detail, pricing);
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct
}