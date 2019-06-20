const model = require('../../models/ProductModel')

const getAllProducts = async () => {
  try{
    return await model.getAllProducts();
  }catch(error){
    console.log(error)
    return error
  }
}

const getProduct = async(productID) => {
  try{
    return await model.getProduct(productID)
  }catch(error){
    console.log(error)
    return error;
  }
}

const getAllCategory = async() =>{
  try{
    return await model.getAllCategory()
  }catch(error){
    return {error: "Get all category controller failed"}
  }
}

const getCategory = async(categoryID) =>{
  try{
    return await model.getCategory(categoryID)
  }catch(error){
    return {error: "Get category controller failed"}
  }
}

const createPizza = async(name, start, picture, detail) =>{
  console.log("vao service")
  return await model.createPizza(name, start, picture, detail);
}

// const createCategoy = async(name, [id]) =>{
//   return await model.createCategoy(name, [id])
// }


module.exports = {
  getAllProducts,
  getProduct,
  getAllCategory,
  getCategory,
  // createCategoy,
  createPizza
}