
const UsersService = require('../services/usersServices');
//const bcrypt = require('bcrypt');
class userController {
  // Fetches all users from the service
  static async getUser(req, res) {
    try {
      const users = await UsersService.getUsers();
      res.json({ users: users });
    } catch (e) {
      res.json({ message: e.message });
    }
  }

  // Handles user login
  static async login(req, res) {
    try {
      const { correo, password } = req.body;
      const user = await UsersService.login(correo, password);
      if (user) {
        res.json({ user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  // Registers a new user
  static async register(req, res) {
    try {
      let { nombre, correo, password } = req.body;
      let user = await UsersService.crearUsuarios(req.body);
      res.json(user);
    } catch (e) {
      res.json({ message: e.message });
    }
  }

  // Deletes a user by ID
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await UsersService.deleteUser(id);
      res.json({ message: 'User deleted successfully' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  // Updates user information by ID
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await UsersService.updateUser(id, req.body);
      res.json(updatedUser);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

module.exports = userController;



















    /*
    
    
const UsersService = require('../services/usersServices');

  class userController{
    static async getUser(req, res){
        try{
          const users = await UsersService.getUsers();
          res.json({users: users});//(users)
        }catch(e){
          res.json({message: e.message});//"Error: An error occurred while trying to fetch users" -> e.message
        }
        }


    static async login(req, res){
        try{
      }catch(e){
      } 
      }


    static async register(req, res){
        try{
          let {nombre, correo, password} = req.body;
          let user = await UsersService.crearUsuarios(req.body);  
          res.json(user);  //.login(req.body.nombre, req.body.correo, req.body.password);
        }catch(e){
          res.json({message: e.message});
     }    
     }


      static async deleteUser(req, res){
        try{
        }catch(e){
    }
    }


     static async updateUser(req, res){
        try{
        }catch(e){
     }
     }
    }

    module.exports = userController; 

    
    */