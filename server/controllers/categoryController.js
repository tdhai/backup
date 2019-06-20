const service = require('../service/categoryService')
const mongoose = require('mongoose')

const getAllCategory = async () => {
  try {
    return await service.getAllCategory()
  } catch (error) {
    return { error: "Get all category controller failed" }
  }
}

const getCategory = async (req, h) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id)
    return await service.getCategory(id)
  } catch (error) {
    return error 
    // { error: "Get category controller failed" }
  }
}

const createCategory = async (req, h) => {
  const name = req.payload.name
  const id = req.payload.productID
  return await service.createCategory(name, id)
}

module.exports = {
  getAllCategory,
  getCategory,
  createCategory
}