const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: { type: String, required: true },
  productID: [{ type: Schema.Types.ObjectId, ref: "product", required: true }]
})
const createCategory = async (name, id) => {
  try {
    var category = new Category();
    category.name = name;
    category.productID = id
    console.log(category.name, category.productID)
    return await category.save();
  } catch (err) {
    throw ("create category fail MODEL", err)
  }
}

const getCategory = async (categoryID) => {
  try {
    const result = await Category.findOne({ '_id': categoryID }).populate('productID')
    if(!result)
    {
      return {err: "Category ID wrong"}
    }return result
  } catch (err) {
    throw ("get category fail MODEL", err)
  }
}

const getAllCategory = async () => {
  try {
    return await Category.find().populate('productID')
  } catch (err) {
    throw ("get all category fail MODEL", err)
  }
}

const Category = mongoose.model('category', categorySchema)

module.exports = {
  Category,
  createCategory,
  getAllCategory,
  getCategory
}