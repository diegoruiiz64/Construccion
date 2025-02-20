//const { User } = require('../models');
//const { User } = require('../models');

console.log(__dirname); // Añade esto para verificar la ruta absoluta
const { User } = require('../../models'); // Ajusta la ruta si es necesario


class UsersServices {

  // Get all users from the database
  static async getUsers() {
    return await User.findAll();
  }

  // Create a new user (login method is misleading; it should handle authentication)
  static async login(correo, password) {
    // Assuming a method User.authenticate exists for verifying credentials
    return await User.authenticate(correo, password);
  }

  // Create a new user
  static async crearUsuarios(userData) {
    return await User.create(userData);
  }

  // Delete a user by ID
  static async deleteUser(id) {
    return await User.destroy({ where: { id } });
  }

  // Update a user's information by ID
  static async updateUser(id, updatedData) {
    return await User.update(updatedData, { where: { id } });
  }
}

module.exports = UsersServices;














/*

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

*/