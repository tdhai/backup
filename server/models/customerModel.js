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
    
  } catch (err) {
    throw ("create account fail MODEL", err)
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
  } catch (err) {
    throw ("get all customer fail MODEL", err)
  }
}

const findEmail = async (cusEmail) => {
  try {
    return await Customer.findOne({
      "email": cusEmail
    })
  } catch (err) {
    throw ("find email fail MODEL", err)
    // throw new err ("Email do not find!!!");
  }
}

const login = async (cusEmail, cusPassword) => {
  try {
    const cusDB = await Customer.findOne({
      "email": cusEmail
    })
    if(!cusDB){
      return {err: "Email is wrong"}
    }
    const status = await bcrypt.compare(cusPassword, cusDB.password)
    if (status === false) {
      return { err: 'Password wrong' }
    } return await helper.tokenString(cusDB._id)
  } catch (err) {
    throw ("get customer fail MODEL", err)
  }
}

const findCustomerByID = async (id) => {
  try {
    const result = await Customer.findOne({
      "_id": id
    })
    if(!result){
      return {err: "Not Found customer MODEL"};
    }return result
  } catch (err) {
    throw ("find email by id fail MODEL", err)
  }
}

const findEmailAndUpdateName = async (id, cusName) => {
  try {
    let user = await Customer.findById({ "_id": id });
    user.name = cusName;
    return await user.save();
  } catch (err) {
    throw ("find email and update name fail MODEL", err)
  }
}

const findEmailAndUpdatePassword = async (id, cusPasswordHashed) => {
  try {
    let user = await Customer.findById({ "_id": id });
    user.password = cusPasswordHashed
    return await user.save();
  } catch (err) {
    throw ("find email and update password fail MODEL", err)
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