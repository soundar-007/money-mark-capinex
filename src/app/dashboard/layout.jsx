import DashboardWrapper from "@/components/Wrappers/DashboardWrapper";

export const metadata = {
  title: "CRM Application",
  description: "Version 2",
};

export default function RootLayout({ children }) {
  return (
    <>
      <DashboardWrapper>{children}</DashboardWrapper>
    </>
  );
}
