const service = require('../services/customerService')

const createAccount = async (req, h) => {
  try {
    const cusName = req.payload.name
    const cusEmail = req.payload.email
    const cusPassword = req.payload.password
    const cusRePassword = req.payload.rePassword
    return await service.createAccount(cusEmail, cusName, cusPassword, cusRePassword);
  } catch (error) {
    return ("create account fail CONTROLLER", error)
  };
}

const getAllCustomers = async (req, h) => {
  try {
    return service.getAllCustomers();
  } catch (error) {
    return ("get all customer fail CONTROLLER", error)
  };
};

const login = async (req, h) => {
  try {
    const cusEmail = req.payload.email
    const cusPassword = req.payload.password
    return await service.login(cusEmail, cusPassword)
  } catch (error) {
    return ("Login fail CONTROLLER", error)
  };
}

const getCustomer = async (req, h) => {
  try {
    const customerID = req.params.id
    return await service.getCustomer(customerID)
  } catch (error) {
    return ("get customer fail CONTROLLER", error)
  }
}

const updateName = async (req, h) => {
  try {
    const cusName = req.payload.name
    const id = req.auth.credentials.data
    console.log(id, cusName)
    return await service.updateName(id, cusName);
  } catch (error) {
    return ("update account fail CONTROLLER", error)
  }
}

const updatePassword = async (req, h) => {
  try {
    const cusPassword = req.payload.password
    const id = req.auth.credentials.data
    return await service.updatePassword(id, cusPassword);
  } catch (error) {
    return ("update account fail CONTROLLER", error)
  }
}

module.exports = {
  createAccount,
  getAllCustomers,
  login,
  updateName,
  updatePassword,
  getCustomer
}