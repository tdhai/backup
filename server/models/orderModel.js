const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  customerID: { type: Schema.Types.ObjectId, ref: "customer", required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  orderDetail: [{
    productID: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, require: true },
    topping: [{ type: Schema.Types.ObjectId, ref: 'topping', require: true }]
  }]
})

const totalPrice = async () => {
// Order.orderDetail.productID.price * Order.orderDetail.quantity + Order.orderDetail.topping.pricea
  return await Order.orderDetail.reduce(async (total, orderDetail) =>{
      return await total + orderDetail.productId.price * orderDetail.quantity + orderDetail.topping.reduce(async (total, listTopping) =>{
            return await total + listTopping 
      },0)
  },0)
}

const createOrder = async (customerID, address, phone, date, totalPrice, orderDetail) => {
  try {
    var order = new Order();
    order.customerID = customerID;
    order.address = address;
    order.phone = phone;
    order.date = date;
    order.totalPrice = totalPrice;
    // orderDetail = productID;
    // orderDetail = quantity;
    // orderDetail = topping;
    order.orderDetail = orderDetail

    // console.log(customerID, address, phone, date, totalPrice, orderDetail)
    return await order.save()
  } catch (error) {
    throw ("Create order model", error)
  }
}

const getOrder = async () => {
  try {
    return await Order.find().populate('customerID').populate('orderDetail.productID').populate('orderDetail.topping')
  } catch (error) {
    throw { error: "get order model fail" }
  }
}

const Order = mongoose.model('order', orderSchema)

module.exports = {
  Order,
  createOrder,
  totalPrice,
  getOrder,

}


// const orderSchema = new Schema({

//   //em ví dụ đây là cliet gửi lên cho mình
//   customerID: 123,
//   address: 123,
//   phone: 123,
//   date: 12/12/2016,
//   totalPrice: 100,
//   orderDetail: [{
//     productID:  1 , // nó referent tới collection "product" 
//     quantity: 3,
//     topping: "abc123", "abc555"
//   },
//   {
//     productID:  5 ,// referent tới collection "topping"
//     quantity: 1,
//     topping: ttt
//   }
// ]
// })

// //đay là e se tính được total price để so sanh
// //nếu so sánh bằng tất là đúng se cho nó tạo order
// const totalPrice = ()=>{
//   Order.orderDetail.productID.price * Order.orderDetail.quantity + Order.orderDetail.topping.price  
// }
