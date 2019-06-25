const mongoose = require('mongoose');
const Schema = mongoose.Schema


const toppingSchema = new Schema({
  // _id: { type: Schema.Types.ObjectId},a
  name: { type: String, required: true },
  price: { type: Number, required: true }
})

const createTopping = async (name, price) => {
  var topping = new Topping();
  topping.name = name;
  topping.price = price;
  return await topping.save()
}

const getAllTopping = async() =>{
  return await Topping.find();
}

const getToppingByID = async(ids)=>{
  const topping = await Topping.find({
    "_id": {$in: ids}
  })
  return topping
}

const Topping = mongoose.model('topping', toppingSchema)

module.exports = {
  Topping,
  getAllTopping,
  getToppingByID,
  createTopping
}
module.exports.theToppingModel = Topping;