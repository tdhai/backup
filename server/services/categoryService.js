const model = require('../models/CategoryModel')

const getAllCategory = async () => {
  try {
    return await model.getAllCategory()
  } catch (error) {
    return { message: "Get category controller failed",error }
  }
}

const getCategory = async (categoryID) => {
  try {
    return await model.getCategory(categoryID)
  } catch (error) {
    return { message: "Get category controller failed",error }
  }
}

const createCategory = async (name, id) => {
  try{
    
    console.log(name, id)
    return await model.createCategoy(name, id)
  }catch(error){
    console.log(error)
    throw(error)
  }
  
}


module.exports = {
  createCategory,
  getAllCategory,
  getCategory
}