import User from "@models/Users"

export const findUser=async(credentialsEmail:string)=>{
    const user = await User.findOne({
        $and: [
            {email:credentialsEmail},
            {loginType:'credentials'}
          ]
          
    })  
    return user;
}