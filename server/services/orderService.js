const model = require('../models/orderModel')
const helper = require('../helper/helper')
const productModel = require('../models/productModel')
const toppingModel = require('../models/toppingModel')

const createOrder = async (customerID, address, phone, date, totalPrice, notice, orderDetails, h) => {
  try {
    if (!helper.checkPhone(phone)) {
      return "Phone number wrong"
    }

    var totalPriceAllTopping = 0
    var totalPriceAllProduct = 0

    for (var i = 0; i < orderDetails.length; i++) {
      if (!productModel.getProduct(orderDetails[i].productID)){
        return await error
      }


      let totalPriceProduct = await model.totalPriceProduct(orderDetails[i].productID, orderDetails[i].quantity)
      let totalPriceTopping = await model.totalPriceTopping(orderDetails[i].topping)
      totalPriceAllTopping += totalPriceTopping
      totalPriceAllProduct += totalPriceProduct
    }
    let totalPriceServer = totalPriceAllTopping + totalPriceAllProduct
    if (totalPrice !== totalPriceServer) {
      return { error: "Total price server: " + totalPriceServer + ". \n Total price clien wrong(ProductID or ToppingID is not valid)!!!" }
    }
    return await model.createOrder(customerID, address, phone, date, totalPrice, notice, orderDetails)
  } catch (error) {
    throw ("create order fail SERVICE", error)
  }
}

const getOrder = async (customerID) => {
  try {
    // console.log(await model.getBestSeller())
    return await model.getOrder(customerID)
  } catch (error) {
    throw ("get order fail SERVICE", error)
  }
}

module.exports = {
  createOrder,
  getOrder
}