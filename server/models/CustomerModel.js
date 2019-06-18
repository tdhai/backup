const mongoose = require('mongoose');
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')
const privateKey = "abcd"

const CustomerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // phone: { type: String, required: true },
  // address: { type: String, required: true },
  name: { type: String, required: true }
})

const Customer = mongoose.model('customer', CustomerSchema)

const createAccount = async (cusEmail, cusName, cusPassword)=>{ //, cusAddress, cusPhone) => {
  var customer = new Customer();
    customer.email = cusEmail,
    customer.password = cusPassword,
    // customer.phone = cusPhone,
    // customer.address = cusAddress,
    customer.name = cusName
  return await customer.save()
}

const getAllCustomers = async () => {
  return await Customer.find((err, res) => {
    if (err) {
      return err;
    }
    return res;
  })
}

const checkEmailValid = (cusEmail)=>{
  return Customer.findOne({
    "email": cusEmail
  })
}

const getCustomer = async (cusEmail, cusPasswordHashed) =>{
  return Customer.findOne({
    "email": cusEmail
  }).then(userFound => {
    var passwordFound = userFound.password;
    return bcrypt.compare(password, cusPasswordHashed)
    .then(success => {
      var token = jwt.sign({
        data: loginName
      }, privateKey, { expiresIn: '1h' });
      return { token: token };
    })
  })
}

module.exports = {
  Customer,
  createAccount,
  getAllCustomers,
  checkEmailValid,
  getCustomer
}