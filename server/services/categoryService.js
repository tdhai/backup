const model = require('../models/categoryModel')

const getAllCategory = async () => {
  try {
    return await model.getAllCategory()
  } catch (error) {
    throw ("get all categories fail SERVICE", error)
  }
}

const getCategory = async (categoryID) => {
  try {
    return await model.getCategory(categoryID)
  } catch (error) {
    throw ("get category fail SERVICE", error)
  }
}

const createCategory = async (name, id) => {
  try{
    console.log(name, id)
    return await model.createCategory(name, id)
  }catch(error){
    throw ("create category fail SERVICE", error)
  }
  
}


module.exports = {
  createCategory,
  getAllCategory,
  getCategory
}