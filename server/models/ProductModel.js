const mongoose = require('mongoose');
const Schema = mongoose.Schema


const ProductSchema = new Schema({
  name: { type: String, required: true },
  Detail: { type: String, required: true },
  start: { type: Number, required: true },
  picture: { type: String }
})

const CategorySchema = new Schema({
  name: {type: String, required: true},
  productID: [{type: String, required: true}]
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

const createPizza = async(name, start, picture, detail) =>{
  var product = new Product();
  product.name = name;
  product.start = start;
  product.picture = picture;
  product.detail = detail
  return await product.save()
}

const createCategoy = async(name, [id]) =>{
  var category = new Category();
  category.name = name;
  category.productID = [id]
  return await category.save();
}

const getCategory = async(categoryID) =>{
  try{
    return await Category.findOne({
      '_id': categoryID
    })
  }catch(error){
    return {error: "Get category fail"}
  }
}

const getAllCategory= async() =>{
  return await Category.find()
}

// const getProductByCategory = async() => {
//   return Category.
// }

const Product = mongoose.model('product', ProductSchema)
const Category = mongoose.model('category', CategorySchema)

module.exports = {
  Product,
  getAllProducts,
  getProduct,
  Category,
  getCategory,
  createCategoy,
  createPizza,
  getAllCategory,
  
}