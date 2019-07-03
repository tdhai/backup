const mongoose = require('mongoose');
const Schema = mongoose.Schema


const toppingSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String, required: true}
})

const createTopping = async (name, price, picture) => {
  try {
    var topping = new Topping();
    topping.name = name;
    topping.price = price;
    topping.picture = picture;
    return await topping.save()
  } catch (err) {
    throw ("create topping fail MODEL", err)
  }
}

const getAllTopping = async () => {
  try {
    return await Topping.find();
  } catch (err) {
    throw ("get all topping fail MODEL", err)
  }

}

const getToppingByID = async (ids) => {
  try {
    const topping = await Topping.find({
      "_id": { $in: ids }
    })
    if(!topping){
      // return "ID is not valid"
      throw new err ("Product ID wrong 123 !!!");
    }
    return topping
  } catch (err) {
    // throw ("get topping by ID fail MODEL", err)
    throw new err ("Product ID wrong 123 !!!");
  }
}

const Topping = mongoose.model('topping', toppingSchema)

module.exports = {
  Topping,
  getAllTopping,
  getToppingByID,
  createTopping
}
module.exports.theToppingModel = Topping;