import { NextRequest } from "next/server";
import User from "@models/Users";
import bcrypt from 'bcryptjs'
const saltRounds = 10;

export const POST = async(req:NextRequest)=>{
    
    try{
        const data = await req.formData();

        const hashAndSaltedPassword =  await bcrypt.hash(data.get('password'),saltRounds)
        data.set('password',hashAndSaltedPassword)
        const user = Object.fromEntries(data.entries());
    
        const userExists = await User.findOne({email:user.email})

        if(userExists){
            return new Response("User already exists in database",{status:409});
        }
        const newUser = new User({
            email:user.email,
            password:user.password,
            isAdmin:false
        });
        await newUser.save();
        return new Response(`User with email ${user.email} has been registered.`, {status:200})
    }catch(err){
        return new Response(`Failed to add user to database: ${err}`, {status:500})
    }
}