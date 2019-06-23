const service = require('../services/orderService')

const createOrder = async (req, h) => {
  try {
    customerID = req.payload.customerID
    address = req.payload.address
    phone = req.payload.phone
    date = Date.now
    totalPrice = req.payload.totalPrice

    productID = req.payload.orderDetail.productID
    quantity = req.payload.orderDetail.quantity
    topping = req.payload.orderDetail.topping
    return await service.createOrder(customerID, address, phone, date, totalPrice, productID, quantity, topping)
  } catch (error) {
    throw ("create order service", error)
  }
}

const getOrder = async () => {
  try {
    return await service.getOrder()
  } catch (error) {
    throw ("get order controller", error)
  }
}

module.exports = {
  createOrder,
  getOrder
}