const servive = require('../services/pricingService')
const mongoose = require('mongoose')

const createPricing = async (req, h) => {
  try {
    const productID = req.payload.productID
    const type = req.payload.type
    const size = req.payload.size
    const price = req.payload.price
    return await servive.creatPricing(productID, type, size, price)
  } catch (error) {
    console.log( error)
  }
}


const getPricinges = async () => {
  return await servive.getPricinges()
}

const getPricing = async (req, h) => {
  try {
    const productID = req.payload.productID
    const type = req.payload.type
    const size = req.payload.size
    return await servive.getPricing(productID, type, size)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createPricing,
  getPricinges,
  getPricing,

}