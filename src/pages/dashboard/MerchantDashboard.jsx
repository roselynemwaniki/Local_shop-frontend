import DashboardCard from "../../components/dashboard/DashboardCard";

const MerchantDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Merchant Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title="Sales Today" value="$2,000" />
        <DashboardCard title="Inventory Items" value="350" />
        <DashboardCard title="New Customers" value="15" />
      </div>
    </div>
  );
};

export default MerchantDashboard;