const model = require('../models/pricingModel')

const creatPricing = async (productID, type, size, price) => {
  try {
    return await model.createPricing(productID, type, size, price)
  } catch (error) {
    console.log(error)
    return error
  }
}

const getPricinges = async () => {
  try {
    return await model.getPricinges()
  } catch (error) {
    console.log(error)
    return error
  }
}

const getPricing = async (productID, type, size) => {
  try{
    console.log(productID, type, size)
    return await model.getPricing(productID, type, size)
  }catch (error) {
    console.log(error)
    return error
  }
}

module.exports = {
  creatPricing,
  getPricinges,
  getPricing
}