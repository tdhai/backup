const service = require('../../service/Product/ProductService')

const getAllProducts = async () => {
  try{
    return await service.getAllProducts();
  }catch(error){
    console.log(error)
    return error
  }
}

const getProduct = async (req, h) =>{
  try{
    const productID = req.payload._id
    return await service.getProduct(productID)
  }catch(error){
    console.log(error)
    return error
  }
}

const getAllCategory = async() =>{
  try{
    return await service.getAllCategory()
  }catch(error){
    return {error: "Get all category controller failed"}
  }
}

const getCategory = async(categoryID) =>{
  try{
    return await service.getCategory(categoryID)
  }catch(error){
    return {error: "Get category controller failed"}
  }
}

// const createPizza = async(req, h) =>{
//   console.log("abc")
//   const name = req.payload.name
//   const start = req.payload.start
//   const picture = req.payload.picture
//   const detail = req.payload.detail
//   console.log(name, start, picture, detail)
//   return await service.createPizza(name, start, picture, detail);
// }

// const createCategoy = async(name, [id]) =>{
//   return await service.createCategoy(name, [id])
// }



module.exports = {
  getAllProducts,
  getProduct,
  getAllCategory,
  getCategory,
  // createPizza,
  // createCategoy,
}