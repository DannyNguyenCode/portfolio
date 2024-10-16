import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    ObjectId: {
        type: Schema.ObjectId,
        unique:true
    },
    email:{
        type: String,
        unique:true
    },
    password:{
        type:String,
    }
})

const User = models.User || model("User", UserSchema);

export default User;