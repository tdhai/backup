const model = require('../models/categoryModel')

const getAllCategory = async () => {
  try {
    return await model.getAllCategory()
  } catch (err) {
    throw ("get all categories fail SERVICE", err)
  }
}

const getCategory = async (categoryID) => {
  try {
    return await model.getCategory(categoryID)
  } catch (err) {
    throw ("get category fail SERVICE", err)
  }
}

const createCategory = async (name, id) => {
  try{
    console.log(name, id)
    return await model.createCategory(name, id)
  }catch(err){
    throw ("create category fail SERVICE", err)
  }
  
}


module.exports = {
  createCategory,
  getAllCategory,
  getCategory
}