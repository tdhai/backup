const service = require('../../service/CustomerService')
const models = require('../../models/CustomerModel')


const createAccount = async (req, h) => {
  try {
    const cusName = req.payload.name
    const cusEmail = req.payload.email
    const cusPassword = req.payload.password
    const cusRePassword = req.payload.rePassword
    // const cusPhone = req.payload.phone
    // const cusAddress = req.payload.address
    return await service.createAccount(cusEmail, cusName, cusPassword, cusRePassword); //, cusAddress, cusPhone);
  } catch (error) {
    throw (error)
  };
}

const getAllCustomers = async (req, h) => {
  return service.getAllCustomers();
};

const getCustomer = async (req, h) => {
  try {
    const cusEmail = req.payload.email
    const cusPassword = req.payload.password
    return await service.getCustomer(cusEmail, cusPassword)
  } catch (error) {
    throw (error)
  }
}

module.exports = {
  createAccount,
  getAllCustomers,
  getCustomer
}