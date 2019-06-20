const mongoose = require('mongoose');
const Schema = mongoose.Schema


const productSchema = new Schema({
  name: { type: String, required: true },
  detail: { type: String, required: true },
  start: { type: Number, required: true },
  picture: { type: String, required: true }
})

const getAllProducts = async () => {
  try {
    return await Product.find()
  } catch (error) {
    console.log(error)
    return error
  }
}

const getProduct = async (productID) => {
  try {
    return await Product.findOne({
      '_id': productID
    })
  } catch (error) {
    console.log(error)
    return error;
  }
}

const createPizza = async (name, start, picture, detail) => {
  try {
    console.log("vao model")
    var product = new Product();
    product.name = name;
    product.detail = detail;
    product.start = start;
    product.picture = picture;

    console.log(name, start, picture, detail)
    console.log(product.detail)
    console.log(product)
    return await product.save()
  } catch (error) {
    return error
  }
}

const Product = mongoose.model('product', productSchema)

module.exports = {
  Product,
  getAllProducts,
  getProduct,
  createPizza,
}