import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type: String,
        unique:true
    },
    password:{
        type:String,
    },
    isAdmin:{
        type:Boolean
    }
})

const User = models.User || model("User", UserSchema);

export default User;