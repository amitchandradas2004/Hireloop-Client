import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen pt-30">
      <div>
        {" "}
        <DashboardSidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
