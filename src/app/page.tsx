import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>Hello</h1>
      <Button className="bg-red-500">Im a chakra button</Button>
    </div>
  );
}
