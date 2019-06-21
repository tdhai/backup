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

const createPizza = async(name, start, picture, detail) =>{
  return await model.createPizza(name, start, picture, detail);
}

module.exports = {
  getAllProducts,
  getProduct,
  createPizza
}