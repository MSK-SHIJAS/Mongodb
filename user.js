
import mongoose from "mongoose";
// lkjlkj
const userSchema=new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})


const User=mongoose.model('user',userSchema)
export default User