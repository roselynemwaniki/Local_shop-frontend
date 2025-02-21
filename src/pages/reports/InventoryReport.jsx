import Table from "../../components/dashboard/Table";

const InventoryReport = () => {
  const columns = ["Item", "Stock", "Price"];
  const data = [
    { Item: "Apples", Stock: "100", Price: "$1.00" },
    { Item: "Bananas", Stock: "80", Price: "$0.50" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Report</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default InventoryReport;