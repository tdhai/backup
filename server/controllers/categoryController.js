const service = require('../services/categoryService')
const mongoose = require('mongoose')

const getAllCategory = async () => {
  try {
    return await service.getAllCategory()
  } catch (err) {
    return ("get all categories fail CONTROLLER", err)
  }
}

const getCategory = async (req, h) => {
  try {
    const id =req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
      return "This ID do not object ID!!!"
    }
    return await service.getCategory(id)
  } catch (err) {
    return ("get category fail CONTROLLER", err)
  }
}

const createCategory = async (req, h) => {
  try {
    const name = req.payload.name
    const id = req.payload.productID
    console.log(name, id)
    return await service.createCategory(name, id)
  } catch (err) {
    return (" create category fail CONTROLLER", err)
  }
}

module.exports = {
  getAllCategory,
  getCategory,
  createCategory
}