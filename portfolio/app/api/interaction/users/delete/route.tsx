import { NextRequest } from "next/server";
import User from "@models/Users";

import bcrypt from 'bcryptjs'

export const POST = async(req:NextRequest)=>{
    try{
        const data = await req.formData();
        const user = Object.fromEntries(data.entries());

        const foundUser = await User.findOne({email:user.email})
        if(!foundUser){
            return new Response(`User ${user.email} could not be found in the database`,{status:401});
        }

        const isPasswordvalid =  await bcrypt.compare(user.password,foundUser.password)
        if(!isPasswordvalid){
            return new Response(`User ${foundUser.email} entered wrong password`,{status:401});
        }


        const deletedUser = await User.findOneAndDelete({email:foundUser.email})
        return new Response(`User with the email ${deletedUser.email} has been deleted.`, {status:200})
    }catch(err){
        return new Response(`Failed to delete user from database: ${err}`, {status:500})
    }
}