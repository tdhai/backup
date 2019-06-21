const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: { type: String, required: true },
  productID: [{ type: String, required: true }]
})

const createCategoy = async (name, id) => {
  var category = new Category();
  category.name = name;
  category.productID = id
  return await category.save();
}

const getCategory = async (categoryID) => {
  try {
    return await Category.findOne({ '_id': categoryID })
  } catch (error) {
    return { error: "Get category fail" }
  }
  // console.log("moddel")
  // Category.findOne({ '_id': categoryID })
  //   .populate({
  //     path: 'product',
  //     match: { productID: { $eq: _id } }
  //   }
  //   )
  // exec(function (err, category) {
  //   if (err) return handleError(err);
  //   console.log(category);
  // })
}

const getAllCategory = async () => {
  return await Category.find()
}

const Category = mongoose.model('category', categorySchema)

module.exports = {
  Category,
  createCategoy,
  getAllCategory,
  getCategory
}