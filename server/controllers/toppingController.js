const service = require('../services/toppingService')
const mongoose = require('mongoose')

const getAllTopping = async () => {
  try {
    return await service.getAllTopping();
  } catch (err) {
    throw ("get all topping fail CONTROLLER", err)
  }
}

const createTopping = async (req, h) => {
  try {
    const name = req.payload.name
    const price = req.payload.price
    const picture = req.payload.picture
    return await service.createTopping(name, price, picture)
  } catch (err) {
    throw ("Create topping fail CONTROLLER", err)
  }
}

module.exports = {
  createTopping,
  getAllTopping
}