const User = require("../Model/UserModel");

//Function to display all users
const getAllUsers = async (req,res,next) => {//Display all users
    let users;

    try{
        users = await User.find();
    }catch(err){ 
        console.log(err);
    }
    //not found
    if(!users){
        return res.status(404).json({message:"No users found"});
    }
    //Display all users
    return res.status(200).json({users});
};
//data Insert
const addUsers = async (req,res,next) => {

    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = new User ({name,gmail,age,address});
        await users.save();
    }catch(err){
        console.log(err);
    }

//not insert
if(!users){
    return res.status(404).json({message:"unable to add users"});
}
return res.status(200).json({users});
}

//get by id
const getById = async (req,res,next) => {

    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }
    catch(err){
        console.log(err);
    }
//not available user
if(!user){
    return res.status(404).json({message:"user not found"});
}
    return res.status(200).json({user});
}

//export the function
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
