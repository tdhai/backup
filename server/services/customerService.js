const models = require('../models/customerModel')
const helper = require('../helper/helper')


const createAccount = async (cusEmail, cusName, cusPassword, cusRePassword) => { //, cusAddress, cusPhone) => {
  try {
    if (!helper.checkPassword(cusPassword)) {
      return { err: "Password does not have 8 symbols" }
    }

    if (!cusPassword || cusPassword !== cusRePassword) {
      return { err: "Password does not match rePassword" }
    }

    if (!helper.checkEmail(cusEmail)) {
      return { err: "Email is wrong" }
    }

    if (await models.findEmail(cusEmail) !== null) {
      return { err: "Email was registed" }
    }

    const cusPasswordHashed = await helper.hashPassword(cusPassword);

    return await models.createAccount(cusEmail, cusName, cusPasswordHashed) //, cusAddress, cusPhone)

  } catch (err) {
    throw ("create account fail SERVICE", err)
  }
};

const getAllCustomers = async () => {
  return await models.getAllCustomers()
}

const login = async (cusEmail, cusPassword) => {
  try {
    if (!helper.checkPassword(cusPassword)) {
      return { err: "Password does not have 8 symbols" }
    }

    if (!helper.checkEmail(cusEmail) ) {
      return { err: "Email is wrong format" }
    }

    return await models.login(cusEmail, cusPassword)
  } catch (err) {
    throw ("login fail SERVICE", err)
  }
}

const getCustomer = async(customerID) =>{
  try{
    return await models.findCustomerByID(customerID)
  }catch(err){
    throw ("get customer fail SERVICE", err)
  }
}

const updateName = async (id, cusName) => {
  try {
    return await models.findEmailAndUpdateName(id, cusName)
  } catch (err) {
    throw ("update account fail SERVICE", err)
  }
}

const updatePassword = async (id, cusPassword) => {
  try {
    if (!helper.checkPassword(cusPassword)) {
      return { err: "Password does not have 8 symbols" }
    }
    const cusPasswordHashed = await helper.hashPassword(cusPassword);
    return await models.findEmailAndUpdatePassword(id, cusPasswordHashed)
  } catch (err) {
    throw ("update account fail SERVICE", err)
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
