import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: 'string',
        required: true
    },
    userName:{
        type: 'string',
        required: true,
        unique: true
    },
    password:{
        type: 'string',
        required: true,
        minlength:8
    },
    gender:{
        type: 'string',
        required: true,
        enum:["male","female"]
    },
    profilePicture:{
        type: 'string',
        default: ''
    }
});

const User = mongoose.model('User',userSchema); 

export default User;