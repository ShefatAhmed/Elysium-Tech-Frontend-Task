import SideBar from "@/components/Dashboard/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-0 md:col-span-3">
        <SideBar />
      </div>
      <div className="col-span-12 md:col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
