import Login from "@/components/common/login/Login.component";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-[500px] w-[500px]">
        <Login />
      </div>
    </div>
  );
}
