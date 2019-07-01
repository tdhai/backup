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
      await customer.save();
      return await helper.tokenString(customer._id)
    
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
    // throw new Error ("Email do not find!!!");
  }
}

const login = async (cusEmail, cusPassword) => {
  try {
    const cusDB = await Customer.findOne({
      "email": cusEmail
    })
    if(!cusDB){
      return "Email is wrong"
    }
    const status = await bcrypt.compare(cusPassword, cusDB.password)
    if (status === false) {
      return { err: 'Password wrong' }
    } return await helper.tokenString(cusDB._id)
  } catch (error) {
    throw ("get customer fail MODEL", error)
  }
}

const findCustomerByID = async (id) => {
  try {
    const result = await Customer.findOne({
      "_id": id
    })
    if(!result){
      return "Not Found customer MODEL";
    }return result
  } catch (error) {
    throw ("find email by id fail MODEL", error)
  }
}

const findEmailAndUpdateName = async (id, cusName) => {
  try {
    let user = await Customer.findById({ "_id": id });
    user.name = cusName;
    return await user.save();
  } catch (error) {
    throw ("find email and update name fail MODEL", error)
  }
}

const findEmailAndUpdatePassword = async (id, cusPasswordHashed) => {
  try {
    let user = await Customer.findById({ "_id": id });
    user.password = cusPasswordHashed
    return await user.save();
  } catch (error) {
    throw ("find email and update password fail MODEL", error)
  }
}

module.exports = {
  Customer,
  createAccount,
  getAllCustomers,
  findEmail,
  login,
  findEmailAndUpdateName,
  findCustomerByID,
  findEmailAndUpdatePassword
}