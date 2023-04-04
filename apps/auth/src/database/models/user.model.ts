import {Schema,Types,model} from "mongoose";

const UserSchema = new Schema({
    username : {type:String,required:true,unique:false},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    salt : {type:String,required:true},
    notes:{type:[Types.ObjectId] , default:[],ref:"notes"},
    subscription:{type:Types.ObjectId ,ref:"subscriptions"},
})
const UserModel = model("user" ,UserSchema)
export default UserModel