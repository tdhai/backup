const mongoose = require('mongoose');
const Schema = mongoose.Schema


const productSchema = new Schema({
  name: { type: String, required: true },
  detail: { type: String, required: true },
  picture: { type: String, required: true },
  star: { type: Number, required: true },
  pricing: [{
    _id: false,
    size: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true }
  }]
})

const getAllProducts = async () => {
  try {
    const allProduct = await Product.find();
    if(!allProduct){
      return {error: "Nothing"};
    } return allProduct;
  } catch (error) {
    throw ("get all products fail MODEL", error)
  }
}

const getProduct = async (productID) => {
  try {
    const result = await Product.findById({
      '_id': productID
    })
    if(!result){
      // throw new Error ("Product ID wrong!!!");
      throw new Error ("Product ID wrong!!!");
    }
    return result
  } catch (error) {
    // throw new Error ("Product ID wrong !!!");
    return {error:"Product ID wrong"} ;
  }
}

const getListProduct = async (productID) => {
  try {
    if(!mongoose.Types.ObjectId.isValid(productID)){
      return {error: "Product ID not objectID"}
    }
    const result = await Product.find({
      '_id': { $in: productID }
    })
    if(!result){
      throw new Error ("Product ID wrong 123 !!!");
    }
    return result
  } catch (error) {
    throw new Error ("Product ID wrong !!!");
  }
}

// const createProduct = async (name, star, picture, detail, size, type, price) => {
  const createProduct = async (name, star, picture, detail, pricing) => {
  try {
    var product = new Product();
    product.name = name;
    product.detail = detail;
    product.star = star;
    product.picture = picture;
    product.pricing = pricing;
    // product.size = size;
    // product.type = type;
    // product.price = price;
    return await product.save()
  } catch (error) {
    throw ("create product fail MODEL", error)
  }
}

const getPriceProduct = async(productID, size, type)=>{
  try{
    const result = await Product.findById({
      "_id": productID
    })
    if(!result){
      throw new Error ("Product ID wrong!!!");
    }
    for(pricing of result.pricing){
      if(pricing.size !== size || pricing.type !== type){
        return {error: "Size or type is not find"}
      }return pricing.price
    }
  }catch(error){
    return {error:"Product ID wrong"} ;
  }
}

const Product = mongoose.model('product', productSchema)

module.exports = {
  Product,
  getAllProducts,
  getProduct,
  createProduct,
  getListProduct,
  getPriceProduct
}