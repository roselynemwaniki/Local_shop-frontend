import Graph from "../../components/dashboard/Graph";

const SalesReport = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{ data: [1000, 1500, 1200, 1800, 2000], backgroundColor: "blue" }],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sales Report</h1>
      <Graph data={data} />
    </div>
  );
};

export default SalesReport;