import { OrganizationGuard } from "@/modules/auth/ui/components/organization-gaurd";
import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import {
  SIDEBAR_COOKIE_NAME,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";

export const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value === "true";
  console.log("Default Open:", defaultOpen);
  return (
    <AuthLayout>
      <OrganizationGuard>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DashboardSidebar />
          <main className="flex flex-1 flex-col">{children}</main>
        </SidebarProvider>
      </OrganizationGuard>
    </AuthLayout>
  );
};
