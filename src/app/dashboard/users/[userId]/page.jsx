import UserDetails from "@/components/users/UserDetails";
import React from "react";

async function UserDetailsPage({ params }) {
  const { userId } = await params; // Await params here
  return <UserDetails userId={userId} />;
}

export default UserDetailsPage;
