import DashboardCard from "../../components/dashboard/DashboardCard";

const ClerkDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clerk Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title="Total Sales" value="$5,000" />
        <DashboardCard title="Orders Processed" value="120" />
        <DashboardCard title="Pending Orders" value="8" />
      </div>
    </div>
  );
};

export default ClerkDashboard;