//important business logic
const{User}  = require('../models');

class UsersServices {
 
  static async getUsers() {
    return await User.findAll();
    }
    static async login(nombre,correo, password) {
      return await User.create({nombre,correo, password});
    } 
   }
  

export default UsersServices;
//module.exports = UsersServices;