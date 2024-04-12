import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="flex justify-between text-blue-900">
        <h2>Hello, <b>{session?.user?.email}</b></h2>
        <div className="bg-gray-300 flex text-black gap-3 p-1 items-center">
          <img
            src={session?.user?.image}
            alt={session?.user?.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="px-2">
          {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  );
}
