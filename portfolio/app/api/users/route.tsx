import { NextRequest } from "next/server";
// import DatabaseConnection from "@utils/database";
import User from "@models/Users";

export const GET = async (req:NextRequest)=>{

    try{
        // await DatabaseConnection();
        const user = await User.find({
                email:req.nextUrl.searchParams.get('email')  
        });
        return new Response(JSON.stringify(user), {status:200})
    }catch(err){
        return new Response(`Failed to fetch user from database: ${err}`, {status:500})
    }
}