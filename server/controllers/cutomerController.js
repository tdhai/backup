const service = require('../services/customerService')

const createAccount = async (req, h) => {
  try {
    const cusName = req.payload.name
    const cusEmail = req.payload.email
    const cusPassword = req.payload.password
    const cusRePassword = req.payload.rePassword
    return await service.createAccount(cusEmail, cusName, cusPassword, cusRePassword);
  } catch (error) {
    throw ("create account fail CONTROLLER", error)
  };
}

const getAllCustomers = async (req, h) => {
  try {
    return service.getAllCustomers();
  } catch (error) {
    throw ("get all customer fail CONTROLLER", error)
  };
};

const getCustomer = async (req, h) => {
  try {
    const cusEmail = req.payload.email
    const cusPassword = req.payload.password
    return await service.getCustomer(cusEmail, cusPassword)
  } catch (error) {
    throw ("get customer fail CONTROLLER", error)
  };
}
const updateAccount = async (req, h) => {
  try {
    const cusName = req.payload.name
    const cusPassword = req.payload.password
    const id = req.auth.credentials.data
    return await service.updateAccount(id, cusName, cusPassword);
  } catch (error) {
    throw ("update account fail CONTROLLER", error)
  }
}

module.exports = {
  createAccount,
  getAllCustomers,
  getCustomer,
  updateAccount
}