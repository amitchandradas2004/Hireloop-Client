import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen mt-30">
      <DashboardSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
