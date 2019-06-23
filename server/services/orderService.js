const model = require('../models/orderModel')

const createOrder = async (customerID, address, phone, date, totalPrice, productID, quantity, topping) => {
  try {
    return await model.createOrder(customerID, address, phone, date, totalPrice, productID, quantity, topping)
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