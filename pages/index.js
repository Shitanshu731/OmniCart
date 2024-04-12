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
    <div className="bg-blue-900 min-h-screen flex">
    <Nav />
        <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-0">Hello User {session.user.email}</div>
    </div>
    )
}
