const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regiSchema = new Schema({
    name: {
        type: String, //data type
        required: true //validation
    },
    gmail: {
        type: String, //data type
        required: true //validation
    },
    password: {
        type: Number, //data type
        required: true //validation
    }

}); 

module.exports = mongoose.model(
    "Register",//file name
    regiSchema //Function name
)