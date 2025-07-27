"use client";
import { BreadCrumb } from "primereact/breadcrumb";
import { usePathname } from "next/navigation";

export default function BreadcrumbWrapper() {
  const pathname = usePathname();
  let pathSegments = pathname.split("/").filter(Boolean);

  // Handle exactly "/dashboard" case: show Dashboard breadcrumb only
  if (pathSegments.length === 1 && pathSegments[0] === "dashboard") {
    // Show single breadcrumb item: Dashboard (no links needed)
    return (
      <BreadCrumb
        className="font-semibold"
        model={[{ label: "Dashboard", url: undefined }]}
      />
    );
  }

  // For other routes deeper than dashboard, remove first "dashboard"
  if (pathSegments[0] === "dashboard" && pathSegments.length > 1) {
    pathSegments = pathSegments.slice(1);
  }

  const breadcrumbItems = pathSegments.map((segment, idx) => {
    const url = "/dashboard/" + pathSegments.slice(0, idx + 1).join("/");
    return {
      label: segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      url: idx !== pathSegments.length - 1 ? url : undefined,
    };
  });

  return <BreadCrumb className="font-semibold" model={breadcrumbItems} />;
}
