const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const privateKey = "abcd"
const models = require('../models/customerModel')
const Boom = require('@hapi/boom')

const hashPassword = (password) => {
  return bcrypt.hash(password, saltRounds)
};

const checkPassword = (password) => {
  return password.length >= 8
}

const checkPhone = (phoneNumber) => {
  return /^\d+$/.test(phoneNumber) &&
    phoneNumber.length <= 11 &&
    phoneNumber.length > 9
}

const checkEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const comparePassword = (password, passwordDB) => {
  return bcrypt.compare(password, passwordDB)
}

const tokenString = (emailID) => {
  const token = jwt.sign({
    data: emailID
  }, privateKey, { expiresIn: '24h' });
  return { token: token };
}

// const Authentication = async (token) => {
  
//   try{
//     return await jwt.verify(token, privateKey)
//     // return await decoded
//   }catch(error){
//     console.log(error)
//     return { error: 'Fail token'}
//   };
// }
  
    // let loginName = decoded.data;
    // return Account.findOne({
    //   loginName: loginName
    // }).then(LogedIn => {
    //   return Account.find((err, res) => {
    //     if (err) {
    //       return err;
    //     }
    //     return h.continue;
    //   })
    // }).catch(err => { return { err }
//   });
// }

module.exports = {
  hashPassword,
  checkPhone,
  checkEmail,
  checkPassword,
  comparePassword,
  tokenString,
  // Authentication
}