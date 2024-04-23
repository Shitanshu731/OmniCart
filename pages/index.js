import Layout from "@/components/Layout";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { useSession } from "next-auth/react";




export default function Home() {

  return (
    <Layout>
      <div className="flex justify-between text-blue-900">
        <h2 className="flex items-center gap-3">Hello,<UserButton afterSignOutUrl="/" />  </h2> 
        <div className=" flex text-black gap-3 p-1 items-center">
        
        <SignOutButton className="bg-red-600 text-white p-4 rounded-md">SignOut</SignOutButton>
          <span className="px-2">
          
          </span>
        </div>
      </div>
    </Layout>
  );
}
