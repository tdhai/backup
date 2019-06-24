const model = require('../models/orderModel')

const createOrder = async (customerID, address, phone, date, totalPrice, orderDetail) => {
  try {
    // const a = await model.totalPrice()
    // console.log(a)
    // console.log(customerID, address, phone, date, totalPrice, orderDetail)
    return await model.createOrder(customerID, address, phone, date, totalPrice, orderDetail)
  } catch (error) {
    throw ("create order service", error)
  }
}

const getOrder = async () => {
  try {
    return await model.getOrder()
  } catch (error) {
    throw ("get order service", error)
  }
}

module.exports = {
  createOrder,
  getOrder
}