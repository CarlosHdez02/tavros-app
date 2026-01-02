"use client";

import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Hello {session?.user?.name}</h1>
    </>
  );
};
export default DashboardPage;
