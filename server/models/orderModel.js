const mongoose = require('mongoose')
const Schema = mongoose.Schema
const toppingModel = require('./toppingModel')
const productModel = require('./productModel')
const { theToppingModel } = require('./toppingModel')
const orderSchema = new Schema({
  customerID: { type: Schema.Types.ObjectId, ref: "customer", required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  notice: { type: String, required: false },
  orderDetail: [{
    productID: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    size: { type: String, ref: 'product', required: true },
    type: { type: String, ref: 'product', required: true },
    quantity: { type: Number, require: true },
    topping: [{ type: Schema.Types.ObjectId, ref: 'topping', require: false }]
  }]
})

const totalPriceProduct = async (productID, size, type, quantity) => {
  const product = await productModel.getPriceProduct(productID, size, type)
  return product * quantity
}

const totalPriceTopping = async (toppingIDs) => {
  const toppings = await toppingModel.getToppingByID(toppingIDs)
  const priceTopping = await toppings.reduce((sum, topping) => {
    return sum + topping.price
  }, 0)
  return priceTopping
}

const createOrder = async (customerID, address, phone, date, totalPrice, notice, orderDetail) => {
  try {
    var order = new Order();
    order.customerID = customerID;
    order.address = address;
    order.phone = phone;
    order.date = date;
    order.totalPrice = totalPrice;
    order.notice = notice;
    // orderDetail = productID;
    // orderDetail = quantity;
    // orderDetail = topping;
    order.orderDetail = orderDetail

    return await order.save()
  } catch (err) {
    throw ("Create order fail MODEL", err)
  }
}

const getOrder = async (customerID) => {
  try {
    return await Order.find({ 'customerID': customerID })
    // return await Order.find()
  } catch (err) {
    throw (err, "get order MODEL fail")
  }
}

const bestseller = async () => {
  try {
    const result = Order.aggregate([
      { $unwind: "$orderDetail" },
      {
        $group: {
          _id: "$orderDetail.productID",
          count: { $sum: "$orderDetail.quantity" }
        },
      },
      { $sort: { count: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "Best seller"
        }
      }
    ])
    if(!result){
      return {err: "Do not have best seller,, because I do not order"}
    }
    return await result
  } catch (err) {
    throw err
  }
}

const Order = mongoose.model('order', orderSchema)

module.exports = {
  Order,
  createOrder,
  totalPriceProduct,
  getOrder,
  totalPriceTopping,
  bestseller
}