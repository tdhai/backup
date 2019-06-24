const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: { type: String, required: true },
  productID: [{ type: Schema.Types.ObjectId, ref: "product", required: true }]
  // productID: [{ type: String, ref: "product", required: true }]a
})
const createCategoy = async (name, id) => {
  try {
    var category = new Category();
    category.name = name;
    category.productID = id
    return await category.save();
  }catch(error){
    console.log(error)
    throw(error)
  }
}

const getCategory = async (categoryID) => {
  try {
    return await Category.findOne({ '_id': categoryID }).populate('productID')
  } catch (error) {
    return { error: "Get category fail" }
  }
}

const getAllCategory = async () => {
  return await Category.find().populate('productID')
}

const Category = mongoose.model('category', categorySchema)

module.exports = {
  Category,
  createCategoy,
  getAllCategory,
  getCategory
}