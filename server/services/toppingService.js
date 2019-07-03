const model = require('../models/toppingModel')

const getAllTopping = async () => {
  try {
    return await model.getAllTopping();
  } catch (err) {
    throw ("get all topping fail SERVICE", err)
  }

}

const createTopping = async (name, price, picture) => {
  try {
    console.log("da service")
    console.log(name, price)
    return await model.createTopping(name, price, picture)
  } catch (err) {
    throw ("create topping fail SERVICE", err)
  }
}

module.exports = {
  getAllTopping,
  createTopping
}