const service = require('../services/orderService')
const helper = require('../helper/helper')

const createOrder = async (req, h) => {
  try {
    customerID = req.auth.credentials.data
    address = req.payload.address
    phone = req.payload.phone
    date = Date.now()
    totalPrice = req.payload.totalPrice
    orderDetail = req.payload.orderDetail
    notice = req.payload.notice
    console.log(orderDetail)
    return await service.createOrder(customerID, address, phone, date, totalPrice, notice, orderDetail, h)
  } catch (error) {
    throw ("create order fail CONTROLLER", error)
  }
}

const getOrder = async (req, h) => {
  try {
    const customerID = req.auth.credentials.data
    return await service.getOrder(customerID)
  } catch (error) {
    throw ("get order fail CONTROLLER", error)
  }
}

const bestSeller = async (req, h) => {
  try {
    const bestSeller = await service.bestSeller();
    if (!bestSeller) {
      return error
    } return bestSeller
  } catch (error) {
    throw error
  }
}

module.exports = {
  createOrder,
  getOrder,
  bestSeller
}