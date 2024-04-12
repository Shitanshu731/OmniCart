import Nav from "@/components/Nav"
import {useSession, signIn, signOut} from "next-auth/react"
export default function Home() {
  const {data : session} = useSession();
  if(!session){
  return (
   <div className="bg-blue-900 w-screen h-screen flex items-center">
    <div className="text-center w-full">
      <button onClick={()=> signIn('google')}>Login</button>
    </div>
   </div>
  )
}
  return (
    <div className="text-blue-900  flex justify-between">
      <h2>
        Hello User {session.user.email}
      </h2>
      <Nav />
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
        <span className="px-2">
        </span>
      </div>
    </div>
    )
}
