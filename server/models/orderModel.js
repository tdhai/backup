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
  orderDetail: [{
    productID: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, require: true },
    topping: [{ type: Schema.Types.ObjectId, ref: 'topping', require: true }]
  }]
})

const totalPriceProduct = async (productID, quantity) => {
  const product = await productModel.getProduct(productID)
  // console.log(quantity)
  for (let i = 0; i < product.length; i++) {
    var totalPriceProduct = await product[i].price * quantity
  }
  // console.log(totalPriceProduct)
  return totalPriceProduct
}

const totalPriceTopping = async (toppingIDs) => {
  // console.log("id topping", toppingIDs)
  const toppings = await toppingModel.getToppingByID(toppingIDs)
  const priceTopping = await toppings.reduce((sum, topping) => {
    return sum + topping.price
  }, 0)
  // console.log(priceTopping)
  return priceTopping

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

const getOrder = async (customerID) => {
  try {
    // return await Order.find({'customerID': customerID}).populate('customerID').populate('orderDetail.productID').populate('orderDetail.topping')
    return await Order.find()
  } catch (error) {
    throw { error: "get order model fail" }
  }
}

const Order = mongoose.model('order', orderSchema)

module.exports = {
  Order,
  createOrder,
  totalPriceProduct,
  getOrder,
  totalPriceTopping
}