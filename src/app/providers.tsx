"use client";
import React from "react";
import { ChakraProvider, Theme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { system } from "./theme";
import { Session } from "next-auth";
interface ProvidersProps {
  children: React.ReactNode;
  session?: Session;
}
export function Providers({ children, session }: ProvidersProps) {
  return (
    <ChakraProvider value={system}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </ChakraProvider>
  );
}
