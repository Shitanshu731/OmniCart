import Nav from "@/components/Nav"
import { ClerkLoaded, ClerkLoading, SignInButton, SignOutButton,  SignedIn, SignedOut, useAuth, useUser  } from "@clerk/nextjs"
import toast from "react-hot-toast";

export default function Layout({children}) {
  const adminEmail = ['shitanshu.731@gmail.com']
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();
  if (!adminEmail.includes(user?.primaryEmailAddress?.emailAddress)) {
    toast.error("Only admins can access");
    return null; // or any appropriate fallback UI
  }
  return (
    <div>
    <ClerkLoading>
      Loading ...
    </ClerkLoading>
    <ClerkLoaded>
    <SignedOut>
    <div className="bg-blue-900 w-screen h-screen flex items-center">
    <div className="text-center w-full">
     <SignInButton afterSignInUrl="/" afterSignUpUrl="/">Sign In </SignInButton>
    </div>
    
   </div>
   </SignedOut>
   <SignedIn>
    <div className="bg-blue-900 min-h-screen flex">
    <Nav />
        <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-0">{children}</div>
    </div>
    </SignedIn>
    </ClerkLoaded>
    </div>
    )
}
