const service = require('../services/orderService')

const createOrder = async (req, h) => {
  try {
    customerID = req.payload.customerID
    address = req.payload.address
    phone = req.payload.phone
    date = Date.now()
    totalPrice = req.payload.totalPrice
    
    orderDetail = req.payload.orderDetail

    // console.log("order detail controller" ,orderDetail)
    return await service.createOrder(customerID, address, phone, date, totalPrice, orderDetail)
  } catch (error) {
    throw ("create order service", error)
  }
}

const getOrder = async (req, h) => {
  try {
    const customerID = req.auth.credentials.data
    return await service.getOrder(customerID)
  } catch (error) {
    throw ("get order controller", error)
  }
}

module.exports = {
  createOrder,
  getOrder
}