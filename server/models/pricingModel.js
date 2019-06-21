const mongoose = require('mongoose');
const Schema = mongoose.Schema


const pricingSchema = new Schema({
  // productID: { type: String, required: true },
  productID: { type: Schema.Types.ObjectId, ref: "product", required: true },
  size: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true }
})

const Pricing = mongoose.model('pricing', pricingSchema)

const createPricing = async(productID, type, size, price) =>{
  var pricing = Pricing()
  pricing.productID = productID
  pricing.size = size
  pricing.type = type
  pricing.price = price
  return await pricing.save();
}

const getPricinges = async() =>{
  return await Pricing.find()
}

const getPricing = async(productID, type, size) =>{
  try{
    return await Pricing.findOne({
      "productID": productID,
      "type": type,
      "size": size
    })
  }catch(error){
    console.log(error)
    return error
  }
}

module.exports = {
  Pricing,
  createPricing,
  getPricinges, 
  getPricing
}