const model = require('../models/categoryModel')

const getAllCategory = async () => {
  try {
    return await model.getAllCategory()
  } catch (error) {
    return { error: "Get all category controller failed" }
  }
}

const getCategory = async (categoryID) => {
  try {
    return await model.getCategory(categoryID)
  } catch (error) {
    return { error: "Get category controller failed" }
  }
}

const createCategory = async (name, id) => {
  return await model.createCategoy(name, id)
}


module.exports = {
  createCategory,
  getAllCategory,
  getCategory
}