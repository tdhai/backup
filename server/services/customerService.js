const models = require('../models/customerModel')
const helper = require('../helper/helper')


const createAccount = async (cusEmail, cusName, cusPassword, cusRePassword) => { //, cusAddress, cusPhone) => {
  try {
    if (!helper.checkPassword(cusPassword)) {
      return { error: "Password does not have 8 symbols" }
    }

    if (!cusPassword || cusPassword !== cusRePassword) {
      return { error: "Password does not match rePassword" }
    }

    if (!helper.checkEmail(cusEmail)) {
      return { error: "Email is wrong" }
    }

    if (await models.findEmail(cusEmail) !== null) {
      return { err: "Email was registed" }
    }

    const cusPasswordHashed = await helper.hashPassword(cusPassword);

    return await models.createAccount(cusEmail, cusName, cusPasswordHashed) //, cusAddress, cusPhone)

  } catch (error) {
    throw ("create account fail SERVICE", error)
  }
};

const getAllCustomers = async () => {
  return await models.getAllCustomers()
}

const login = async (cusEmail, cusPassword) => {
  try {
    if (!helper.checkPassword(cusPassword)) {
      return { error: "Password does not have 8 symbols" }
    }

    if (!helper.checkEmail(cusEmail) ) {
      return { error: "Email is wrong format" }
    }

    return await models.login(cusEmail, cusPassword)
  } catch (error) {
    throw ("login fail SERVICE", error)
  }
}

const getCustomer = async(customerID) =>{
  try{
    return await models.findCustomerByID(customerID)
  }catch(error){
    throw ("get customer fail SERVICE", error)
  }
}

const updateName = async (id, cusName) => {
  try {
    return await models.findEmailAndUpdateName(id, cusName)
  } catch (error) {
    throw ("update account fail SERVICE", error)
  }
}

const updatePassword = async (id, cusPassword) => {
  try {
    if (!helper.checkPassword(cusPassword)) {
      return { error: "Password does not have 8 symbols" }
    }
    const cusPasswordHashed = await helper.hashPassword(cusPassword);
    return await models.findEmailAndUpdatePassword(id, cusPasswordHashed)
  } catch (error) {
    throw ("update account fail SERVICE", error)
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
