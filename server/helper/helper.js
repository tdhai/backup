const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const privateKey = "abcd"

const hashPassword = (password) => {
  return bcrypt.hash(password, saltRounds)
};

const checkPassword = (password) => {
  return password.length >= 8
}

const checkPhone = (phoneNumber) =>{
    return /^\d+$/.test(phoneNumber) &&
    phoneNumber.length <= 11 &&
    phoneNumber.length > 9  
}

const checkEmail = (email) =>{
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const comparePassword = (password, passwordDB) =>{
  return bcrypt.compare(password, passwordDB)
}

const tokenString = (email)=>{
  const token = jwt.sign({
    data: email
  }, privateKey, { expiresIn: '1h' });
  return { token: token };
}

module.exports = {
  hashPassword,
  checkPhone, 
  checkEmail,
  checkPassword, 
  comparePassword,
  tokenString
}