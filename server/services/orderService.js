const model = require('../models/orderModel')
const productModel = require('../models/productModel')

const createOrder = async (customerID, address, phone, date, totalPrice, orderDetails) => {
  try {
    var totalPriceAllTopping = 0
    var totalPriceAllProduct = 0
    for(var i = 0; i < orderDetails.length ; i++){
    let totalPriceProduct = await model.totalPriceProduct(orderDetails[i].productID, orderDetails[i].quantity)
    let totalPriceTopping = await model.totalPriceTopping(orderDetails[i].topping)
    totalPriceAllTopping += totalPriceTopping
    totalPriceAllProduct += totalPriceProduct
    }
    let totalPriceServer = totalPriceAllTopping + totalPriceAllProduct
    if(totalPrice !== totalPriceServer){
      return {error: "Total clien wrong!!!"}
    }
    return await model.createOrder(customerID, address, phone, date, totalPrice, orderDetails)
  } catch (error) {
    throw ("create order service", error)
  }
}

const getOrder = async (customerID) => {
  try {
    return await model.getOrder(customerID)
  } catch (error) {
    throw ("get order service", error)
  }
}

module.exports = {
  createOrder,
  getOrder
}