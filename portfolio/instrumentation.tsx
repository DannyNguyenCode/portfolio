'use server'
import DatabaseConnection from "@utils/database"
// allows execution of startup script once nextjs server starts
export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        await DatabaseConnection()
      }
   
}