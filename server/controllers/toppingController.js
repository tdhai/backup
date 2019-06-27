const service = require('../services/toppingService')
const mongoose = require('mongoose')

const getAllTopping = async () => {
  try {
    return await service.getAllTopping();
  } catch (error) {
    throw ("get all topping fail CONTROLLER", error)
  }
}

const createTopping = async (req, h) => {
  try {
    const name = req.payload.name
    const price = req.payload.price
    const picture = req.payload.picture
    return await service.createTopping(name, price, picture)
  } catch (error) {
    throw ("Create topping fail CONTROLLER", error)
  }
}

module.exports = {
  createTopping,
  getAllTopping
}