const models = require('../models/CustomerModel')
const helper = require('../helper/helper')


const createAccount = async (cusEmail, cusName, cusPassword, cusRePassword) =>{ //, cusAddress, cusPhone) => {
  if(!helper.checkPassword(cusPassword)){
    return {error: "Password does not have 8 symbols"}
  }
  
  if (!cusPassword || cusPassword !== cusRePassword){
    return {error: "Password does not match rePassword"}
  }

  if(!helper.checkEmail(cusEmail)){
    return {error: "Email is not valid"}
  }

  // if(models.checkEmailValid(cusEmail) !== null){
  //   return {err: "Email was registed"}
  // }

  const cusPasswordHashed = await helper.hashPassword(cusPassword);
  
  return models.createAccount(cusEmail, cusName, cusPasswordHashed) //, cusAddress, cusPhone)
};

const getAllCustomers = async() =>{
  return await models.getAllCustomers()
}

const getCustomer = async(cusEmail, cusPassword) =>{
  if(!helper.checkPassword(cusPassword)){
    return {error: "Password does not have 8 symbols"}
  }

  if(!helper.checkEmail(cusEmail)){
    return {error: "Email is not valid"}
  }

  const cusPasswordHashed = await helper.hashPassword(cusPassword);

  return await getCustomer(cusEmail, cusPasswordHashed)
}

module.exports ={ 
  createAccount,
  getAllCustomers
}
