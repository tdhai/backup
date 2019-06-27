const model = require('../models/toppingModel')

const getAllTopping = async () => {
  try {
    return await model.getAllTopping();
  } catch (error) {
    throw ("get all topping fail SERVICE", error)
  }

}

const createTopping = async (name, price, picture) => {
  try {
    console.log("da service")
    console.log(name, price)
    return await model.createTopping(name, price, picture)
  } catch (error) {
    throw ("create topping fail SERVICE", error)
  }
}

module.exports = {
  getAllTopping,
  createTopping
}