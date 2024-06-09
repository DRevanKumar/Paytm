const mongoose = require('mongoose');
import { mongourl } from './config';

mongoose.connect(mongourl)

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minLenght:3,
        maxLength:30,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLenght:6,
    },
    firstname:{
        type:String,
        required:true,
        maxLenght:6,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        maxLenght:6,
        trim:true
    }

})
const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const User = mongoose.model('User',userSchema);
const Account = mongoose.model('Account',accountSchema)
module.exports ={
    User,
    Account
}
