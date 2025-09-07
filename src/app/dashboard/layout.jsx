import DashboardWrapper from "@/components/Wrappers/DashboardWrapper";
import { ProtectedRoute } from "@/components/Auth";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export const metadata = {
  title: "CRM Application",
  description: "Version 2",
};

export default function RootLayout({ children }) {
  return ( 
    <ProtectedRoute requireAuth={true}>
      <DashboardWrapper>{children}</DashboardWrapper>
    </ProtectedRoute>
  );
}
