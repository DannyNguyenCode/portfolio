import { NextRequest } from "next/server";
import User from "@models/Users";

import bcrypt from 'bcryptjs'
const saltRounds = 10;

export const GET = async (req:NextRequest)=>{
    try{
        if(req.nextUrl.searchParams.get("email")){
            const user = await User.find({
                email:decodeURIComponent(req.nextUrl.searchParams.get("email") as string)
            });
            return new Response(JSON.stringify(user), {status:200})
        }else{
            const users = await User.find({});
            return new Response(JSON.stringify(users), {status:200})
        }     
    }catch(err){
        return new Response(`Failed to fetch user(s) from database: ${err}`, {status:500})
    }
}


export const PUT=async(req:NextRequest)=>{
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

        const hashAndSaltedPassword =  await bcrypt.hash(user.newPassword,saltRounds)

        const updatedUser = await User.findOneAndUpdate({email:foundUser.email},{password:hashAndSaltedPassword},{
            new:true
        })
        
        return new Response(`User with the email ${updatedUser.email} has updated password.`, {status:200})

    }catch(err){
        return new Response(`Failed to update user: ${err}`, {status:500})
    }
}


