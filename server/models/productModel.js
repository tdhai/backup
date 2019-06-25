const mongoose = require('mongoose');
const Schema = mongoose.Schema


const productSchema = new Schema({
  name: { type: String, required: true },
  detail: { type: String, required: true },
  picture: { type: String, required: true },
  star: { type: Number, required: true },
  size: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true }
})
//a
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
    console.log(productID)
    return await Product.find({
      '_id': productID
    }
    )
  } catch (error) {
    console.log(error)
    return error;
  }
}

const createProduct = async (name, star, picture, detail, size, type, price) => {
  try {
    console.log("vao model")
    var product = new Product();
    product.name = name;
    product.detail = detail;
    product.star = star;
    product.picture = picture;
    // product.pricing = pricing;
    product.size = size;
    product.type = type;
    product.price = price;
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
  createProduct,
}