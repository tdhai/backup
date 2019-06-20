const service = require('../../service/Customer/CustomerService')

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
    console.log(error)
    return error;
  };
}

const getAllCustomers = async (req, h) => {
  try{
    return service.getAllCustomers();
  }catch (error) {
    console.log(error)
    return error;
  };
};

const getCustomer = async (req, h) => {
  try {
    const cusEmail = req.payload.email
    const cusPassword = req.payload.password
    return await service.getCustomer(cusEmail, cusPassword)
  } catch (error) {
    console.log(error)
    return error;
  };
}
const updateAccount = async(req, h) =>{
  try{
    console.log('da vao update')
    // const token = req.headers['authorization'];
    const cusName = req.payload.name
    const cusPassword = req.payload.password
    // console.log(token, cusName, cusPassword)
    // console.log(Response)
    // const id = Response
    // console.log(id)
    const id =req.auth.credentials
    console.log(req.auth.credentials)
    console.log(req.auth)


    return await service.updateAccount(id, cusName, cusPassword);
  }catch(error){
    console.log(error)
    return error;
  }
}

module.exports = {
  createAccount,
  getAllCustomers,
  getCustomer,
  updateAccount
}