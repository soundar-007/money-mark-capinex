import React from "react";
import Login from "@/components/Login/Login";
import { ProtectedRoute } from "@/components/Auth";

export default function page() {
  return (
    <ProtectedRoute requireAuth={false}>
      <Login />
    </ProtectedRoute>
  );
}
