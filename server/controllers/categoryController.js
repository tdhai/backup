const service = require('../services/categoryService')
const mongoose = require('mongoose')

const getAllCategory = async () => {
  try {
    return await service.getAllCategory()
  } catch (error) {
    throw ("get all categories fail CONTROLLER", error)
  }
}

const getCategory = async (req, h) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id)
    return await service.getCategory(id)
  } catch (error) {
    throw ("get category fail CONTROLLER", error)
  }
}

const createCategory = async (req, h) => {
  try {
    const name = req.payload.name
    const id = req.payload.productID
    return await service.createCategory(name, id)
  } catch (error) {
    throw (" create category fail CONTROLLER", error)
  }
}

module.exports = {
  getAllCategory,
  getCategory,
  createCategory
}