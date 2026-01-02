"use client";
import React from "react";
import { ChakraProvider, Theme } from "@chakra-ui/react";
import { system } from "./theme";
interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
