// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.username} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button className="bg-orange-400" onClick={() => signIn()}>
//         Sign in
//       </button>
//     </>
//   );
// }
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        {session ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              Welcome, {session.user.username}!
            </h2>
            <p className="mt-2 text-gray-600">You are signed in.</p>
            <button
              onClick={() => signOut()}
              className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Sign In</h2>
            <p className="mt-2 text-gray-600">Access your account</p>
            <button
              onClick={() => signIn()}
              className="mt-4 w-full rounded-lg bg-orange-400 px-4 py-2 text-white hover:bg-orange-500"
            >
              Sign In with NextAuth
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
