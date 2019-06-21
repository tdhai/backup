const service = require('../services/toppingService')
const mongoose = require('mongoose')

const getAllTopping = async () => {
  return await service.getAllTopping();
}

const getTopping = async (req, h) =>{
    console.log("controller")
  const name =  mongoose.Types.ObjectId(req.params.id)
  console.log(name)
  return await service.getTopping(name)
}

const createTopping = async (req, h) =>{
  const name = req.payload.name
  const price = req.payload.price
  return await service.createTopping(name, price)
}

module.exports = {
  createTopping,
  getAllTopping,
  getTopping
}