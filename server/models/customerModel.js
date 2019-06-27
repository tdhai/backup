const mongoose = require('mongoose');
const Schema = mongoose.Schema
const helper = require('../helper/helper')
const bcrypt = require('bcrypt')

const CustomerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true }
})

const Customer = mongoose.model('customer', CustomerSchema)

const createAccount = async (cusEmail, cusName, cusPassword) => { //, cusAddress, cusPhone) => {
  try {
    var customer = new Customer();
    customer.email = cusEmail,
      customer.password = cusPassword,
      customer.name = cusName
    return await customer.save()
  } catch (error) {
    throw ("create account fail MODEL", error)
  }
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
    throw ("get all customer fail MODEL", error)
  }
}

const findEmail = async (cusEmail) => {
  try {
    return await Customer.findOne({
      "email": cusEmail
    })
  } catch (error) {
    throw ("find email fail MODEL", error)
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
    } return await helper.tokenString(cusDB._id)
  } catch (error) {
    throw ("get customer fail MODEL", error)
  }
}

const findEmailByID = async (id) => {
  try {
    return await Customer.findOne({
      "_id": id
    })
  } catch (error) {
    throw ("find email by id fail MODEL", error)
  }
}

const findEmailAndUpdate = async (id, cusName, cusPasswordHashed) => {
  try {
    let user = await Customer.find({ "_id": id });
    user[0].name = cusName;
    user[0].password = cusPasswordHashed
    return await user[0].save();
  } catch (error) {
    throw ("find email and update fail MODEL", error)
  }
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