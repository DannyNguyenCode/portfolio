// credit to cache connection and use instrumentation to connec to mongodb
// https://dev.to/thatanjan/2-ways-to-set-up-nextjs-with-mongodb-and-mongoose-4afo
'use server'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local',
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}


const DatabaseConnection = async ()=>{
    try{
        if (cached.conn) {
            return cached.conn
        }
        if (!cached.promise) {
            const opts = {
                bufferCommands: false,
            }
            cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose:any) => {
                console.log('Database connected')
                return mongoose
            })
        }
    }catch(err){
        console.log("catch: ", err)
    }

    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default DatabaseConnection