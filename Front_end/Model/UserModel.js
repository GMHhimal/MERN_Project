const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String, //data type
        required: true //validation
    },
    gmail: {
        type: String, //data type
        required: true //validation
    },
    age: {
        type: Number, //data type
        required: true //validation
    },
    address: {
        type: String, //data type
        required: true //validation
    }

}); 

module.exports = mongoose.model(
    "UserModel",//file name
    userSchema //Function name
)