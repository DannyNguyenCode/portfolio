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
        const isPasswordvalid =  await bcrypt.compare(data.get('password'),foundUser.password)

        if(!isPasswordvalid){
            return new Response(`User ${foundUser.email} entered wrong password`,{status:401});
        }

        return new Response(`Successfully logged in as ${foundUser.email}`, {status:200})
    }catch(err){
        return new Response(`Failed authenticate user: ${err}`, {status:500})
    }
}
