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

const getAllProducts = async () => {
  try {
    return await Product.find()
  } catch (error) {
    throw ("get all products fail MODEL", error)
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
    throw ("get product fail MODEL", error)
  }
}

const createProduct = async (name, star, picture, detail, size, type, price) => {
  try {
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
    throw ("create product fail MODEL", error)
  }
}

const Product = mongoose.model('product', productSchema)

module.exports = {
  Product,
  getAllProducts,
  getProduct,
  createProduct,
}