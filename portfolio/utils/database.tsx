import { set, connect } from "mongoose";

let isConnected = false;

export const DatabaseConnection = async ()=>{
    set('strictQuery', true);

    if(isConnected){
        console.log('Connected to Database already...');
        return;
    }
    try{
        await connect(process.env.MONGODB_URI as string,{
            dbName:"Portfolio",
        })
        isConnected = true;
        console.log('Connection to MongoDB successful...');
    }catch(error){
        console.log(error)
    }
}