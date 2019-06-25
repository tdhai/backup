const model = require('../models/orderModel')
const productModel = require('../models/productModel')

const createOrder = async (customerID, address, phone, date, totalPrice, orderDetails) => {
  try {
    for(var i = 0; i < orderDetails.length ; i++){
    // console.log(orderDetails[i].topping, orderDetails[i].productID, orderDetails[i].quantity)
    const totalPriceProduct = model.totalPriceProduct(orderDetails[i].productID, orderDetails[i].quantity)
    const totalPriceTopping =await model.totalPriceTopping(orderDetails[i].topping)
    // console.log(totalPriceTopping)

    // const reducer = async(sum, topping) =>{
    //   const totalPriceTopping =await model.totalPriceTopping(orderDetails[i].topping)
    //   return sum + totalPriceTopping 
    // }

    // const sum = await orderDetails.reduce(reducer, 0)
    // console.log("abc", sum)
    }

    // const reducer =async (sum, orderDetail) => {
    //   const orderTotalPrice = await model.totalPrice(orderDetails.topping, orderDetails.productID, orderDetails.quantity);
    //   return sum + orderTotalPrice;
    // }

    // const totalPriceServer = await orderDetails.reduce(reducer, 0)

    // console.log("service order", totalPriceServer)

    // const a = await model.totalPrice(num)
    // console.log(a)

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