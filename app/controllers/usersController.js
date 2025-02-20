
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
