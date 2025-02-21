import DashboardCard from "../../components/dashboard/DashboardCard";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title="Users" value="500" />
        <DashboardCard title="Revenue" value="$100,000" />
        <DashboardCard title="Active Merchants" value="20" />
      </div>
    </div>
  );
};

export default AdminDashboard;