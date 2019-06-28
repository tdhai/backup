const service = require('../services/categoryService')
const mongoose = require('mongoose')

const getAllCategory = async () => {
  try {
    return await service.getAllCategory()
  } catch (error) {
    return ("get all categories fail CONTROLLER", error)
  }
}

const getCategory = async (req, h) => {
  try {
    const id =req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
      return "This ID do not object ID!!!"
    }
    return await service.getCategory(id)
  } catch (error) {
    return ("get category fail CONTROLLER", error)
  }
}

const createCategory = async (req, h) => {
  try {
    const name = req.payload.name
    const id = req.payload.productID
    return await service.createCategory(name, id)
  } catch (error) {
    return (" create category fail CONTROLLER", error)
  }
}

module.exports = {
  getAllCategory,
  getCategory,
  createCategory
}