import { NextRequest } from "next/server";
import User from "@models/Users";
import * as  UserInterface  from "@interfaces/User";

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
        return new Response(`Failed to fetch all user from database: ${err}`, {status:500})
    }
}


export const PUT=async(req:NextRequest)=>{
    try{
        const user:UserInterface.User = await req.json();
        const updatedUser = await User.findOneAndUpdate({email:user.email},{password:user.password},{
            new:true
        })
        return new Response(JSON.stringify(updatedUser), {status:200})

    }catch(err){
        return new Response(`Failed to update user: ${err}`, {status:500})
    }
}

export const POST = async(req:NextRequest)=>{
    try{
        const user:UserInterface.User = await req.json()
        let userExists = null


        userExists = await User.findOne({email:user.email})
        if(userExists){
            return new Response("User already exists in database",{status:409});
        }
        const newUser = new User({
            email:user.email,
            password:user.password,
            isAdmin:user.isAdmin
        });   
        await newUser.save();
        return new Response(JSON.stringify(user), {status:200})
    }catch(err){
        return new Response(`Failed to add user to database: ${err}`, {status:500})
    }
}

export const DELETE = async(req:NextRequest)=>{
    try{
        const deletedUser = await User.findOneAndDelete({email:req.nextUrl.searchParams.get("email")})
        return new Response(JSON.stringify(deletedUser), {status:200})
    }catch(err){
        return new Response(`Failed to delete user from database: ${err}`, {status:500})
    }
}