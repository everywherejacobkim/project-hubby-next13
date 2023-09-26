"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider} from "next-themes"
import {useState, useEffect} from "react"

export default function NextAuthSessionProvider({
  children,
  session,
}: {
  children?: React.ReactNode;
  session?: any;
} = {}) {

  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
},[])

if (!mounted){
    return <>{children}</>
}
  return <SessionProvider session={session}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </SessionProvider>;

}
