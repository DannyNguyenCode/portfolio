import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { CredentialsSignin } from "next-auth";
import bcrypt from 'bcryptjs'

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

            try{
          
                const res = await fetch(`/api/users?email=${credentials.email}`,
                  {
                    method:'GET',
                  }
                )
                if(res.ok){
                  const user = await res.json()
                  const passwordAuth = await bcrypt.compare(credentials.password, user.password);

                    if(passwordAuth){
                      return user
                    }else{
                    
                      throw new CustomError();
                    }
                }else{
                  console.log("Invalid Credentials")
                }     
             
            }catch(error){
               
               console.log(error)
            }
         

        },
      }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
})