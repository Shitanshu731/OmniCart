// import { getAuth, clerkClient } from "@clerk/nextjs/server";

// export default async function handler(req, res) {
//   const adminEmail = ['shitanshu.731@gmail.com'];
//   const { emailAddress } = getAuth(req);
//   console.log(emailAddress)

//   if (!adminEmail.includes(emailAddress)) {
//     return res.status(401).json({ error: "Unauthorized: Only admins can access this endpoint." });
//   }
  
// }
import { getAuth, clerkClient } from "@clerk/nextjs/server";

 
export default async function authHandler(
  req,
  res){
   const adminUserId = ['user_2f2oyBI75mJ1GeyBXjDeE03CbS5'];
  const { userId } = getAuth(req);
  console.log(userId)
 
  if (!adminUserId.includes(userId)) {
    return res.status(401).json({ error: "Only admins can access!!" });
  }
}
