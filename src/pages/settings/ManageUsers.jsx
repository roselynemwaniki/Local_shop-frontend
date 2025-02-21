import Table from "../../components/dashboard/Table";

const ManageUsers = () => {
  const columns = ["Name", "Email", "Role"];
  const data = [
    { Name: "John Doe", Email: "john@example.com", Role: "Admin" },
    { Name: "Jane Smith", Email: "jane@example.com", Role: "Merchant" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ManageUsers;