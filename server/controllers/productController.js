const service = require('../services/productService')
const mongoose = require('mongoose')

const getAllProducts = async () => {
  try{
    return await service.getAllProducts();
  }catch(error){
    console.log(error)
    return error
  }
}

const getProduct = async (req, h) =>{
  try{
    const productID = mongoose.Types.ObjectId(req.params.id) 
    return await service.getProduct(productID)
  }catch(error){
    console.log(error)
    return error
  }
}

const createPizza = async(req, h) =>{
  const name = req.payload.name
  const start = req.payload.start
  const picture = req.payload.picture
  const detail = req.payload.detail
  // console.log(name, start, picture, detail)
  return await service.createPizza(name, start, picture, detail);
}

module.exports = {
  getAllProducts,
  getProduct,
  createPizza
}