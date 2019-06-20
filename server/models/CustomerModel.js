const mongoose = require('mongoose');
const Schema = mongoose.Schema
const helper = require('../helper/helper')
const bcrypt = require('bcrypt')

const CustomerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // phone: { type: String, required: true },
  // address: { type: String, required: true },
  name: { type: String, required: true }
})

const Customer = mongoose.model('customer', CustomerSchema)

const createAccount = async (cusEmail, cusName, cusPassword) => { //, cusAddress, cusPhone) => {
  var customer = new Customer();
  customer.email = cusEmail,
    customer.password = cusPassword,
    // customer.phone = cusPhone,
    // customer.address = cusAddress,
    customer.name = cusName
  return await customer.save()
}

const getAllCustomers = async () => {
  try {
    return await Customer.find((err, res) => {
      if (err) {
        return err;
      }
      return res;
    })
  } catch (error) {
    console.log(error)
    return error;
  }
}

const findEmail = async (cusEmail) => {
  try {
    return await Customer.findOne({
      "email": cusEmail
    })
  } catch (error) {
    console.log(error)
    return error;
  }
}

const getCustomer = async (cusEmail, cusPassword) => {
  try {
    const cusDB = await Customer.findOne({
      "email": cusEmail
    })
    const status = await bcrypt.compare(cusPassword, cusDB.password)
    if (status === false) {
      return { err: 'Password wrong' }
    }return await helper.tokenString(cusDB._id)
  } catch (error) {
    console.log(error)
    return error;
  }
}

const findEmailByID = async (id) => {
  try {
    return await Customer.findOne({
      "_id": id
    })
  } catch (error) {
    console.log(error)
    return error;
  }
}

const findEmailAndUpdate = async (token, cusName, cusPassword) => {
  console.log('da  vao model')
  return await Customer.findOneAndUpdate(
    { '_id': token },
    { $set: [{ 'name': cusName }, {'password': cusPassword}] }
  )
}

module.exports = {
  Customer,
  createAccount,
  getAllCustomers,
  findEmail,
  getCustomer,
  findEmailAndUpdate,
  findEmailByID
}