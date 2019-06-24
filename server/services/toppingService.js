const model = require('../models/ToppingModel')

const getAllTopping = async () => {
  return await model.getAllTopping();
}

const getTopping = async (name) => {
  console.log("service")
  return await model.getTopping(name)
}

const createTopping = async (name, price) => {
  return await model.createTopping(name, price)
}

module.exports = {
  getAllTopping,
  getTopping,
  createTopping
}