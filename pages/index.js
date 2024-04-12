import Nav from "@/components/Nav"
import {useSession, signIn, signOut} from "next-auth/react"
export default function Home() {
  const {data : session} = useSession();
  if(!session){
  return (
   <div className="bg-blue-900 w-screen h-screen flex items-center">
    <div className="text-center w-full">
      <button className="bg-white p-4 px-6 rounded-lg" onClick={()=> signIn('google')}>Login</button>
    </div>
   </div>
  )
}
  return (
    <div className="text-black bg-blue-900  flex justify-between">
    <Nav />
        Hello User {session.user.email}
    </div>
    )
}
