const service = require('../services/orderService')

const createOrder = async (req, h) => {
  try {
    customerID = req.payload.customerID
    address = req.payload.address
    phone = req.payload.phone
    date = Date.now
    totalPrice = req.payload.totalPrice
    
    productID = req.payload.productID
    quantity = req.payload.quantity
    topping = req.payload.topping
    // Em không biết là dùng nhưu thế nào nó mới lấy được đúng cái giá trị khi client gửi lên nữa 
    // productID = req.payload.orderDetail.productID
    // quantity = req.payload.orderDetail.quantity
    // topping = req.payload.orderDetail.topping

    //đây là dữ liệu e test trên postman mà nó ra lỗi 
    // {
    //   "customerID": "5d09b410eb6f2229c06c8050",
    //   "address": "dia chi",
    //   "phone": "123123123",
    //   "totalPrice": 1000,
    //   "orderDetail": [
    //     {"productID": "5d0cc108874a7c153ce5ebff", 
    //      "quantity": 1,
    //      "topping": ["5d0ca4ae68c5113810549122"]},
         
    //      {"productID": "5d0cc118874a7c153ce5ec00", 
    //      "quantity": 1,
    //      "topping": ["5d0ca4ae68c5113810549122", "5d0f46e6dc133a143c6afc23"]},
    //     ]
    // }

    //lỗi
  //   {
  //     "statusCode": 400,
  //     "error": "Bad Request",
  //     "message": "Invalid request payload JSON format"
  // }

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