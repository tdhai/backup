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

const createProduct = async(req, h) =>{
  const name = await req.payload.name
  const star = await req.payload.star
  const picture = await req.payload.picture
  const detail = await req.payload.detail
  // const pricing = req.payload.pricing
  const size = await req.payload.size
  const type = await req.payload.type
  const price = await req.payload.price
  console.log(name, star, picture, detail, size, type, price)
  return await service.createProduct(name, star, picture, detail, size, type, price);
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct
}