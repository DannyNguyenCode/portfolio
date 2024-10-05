import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { CredentialsSignin } from "next-auth";
import { DatabaseConnection } from "@utils/database"
import bcrypt from 'bcryptjs'
import { findUser } from "@utils/findUser";
class CustomError extends CredentialsSignin {
    code = "Invalid Credentials"
   }
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({

        credentials: {
          email: {},
          password: {},
        },
        authorize: async (credentials) => {
            console.log("inside credentials authorize")
            try{
            
                await DatabaseConnection();      
                const user = await findUser(credentials.email as string)     
                const passwordAuth = await bcrypt.compare(credentials.password, user.password);
                if(passwordAuth){
                    return user
                }else{
                   
                    throw new CustomError();
                }
              
            }catch(error){
               
               console.log(error)
            }
         

        },
      }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
        console.log("inside authorized callback")
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
})