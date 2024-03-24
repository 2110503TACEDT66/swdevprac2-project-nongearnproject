import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name']
    },
    tel: {
        type: String,
        required: [true, 'Please add a telephone number'],
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ,'Please add a valid email'
        ]
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    password:{
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createAt: {
        type: Date,
        default: Date.now
    },
    countBooking:{
        type : Number,
        default: 0,
        required : false
    }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema)
export default User