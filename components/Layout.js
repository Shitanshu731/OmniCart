import Nav from "@/components/Nav"
import { ClerkLoaded, ClerkLoading, SignInButton, SignOutButton,  SignedIn, SignedOut  } from "@clerk/nextjs"

export default function Layout({children}) {
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
