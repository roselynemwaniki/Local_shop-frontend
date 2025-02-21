const DashboardCard = ({ title, value, icon }) => {
    return (
        <div className="p-4 border rounded shadow-md bg-white flex items-center">
            {icon && <span className="text-2xl">{icon}</span>}
            <div className="ml-4">
                <h4 className="text-gray-600">{title}</h4>
                <p className="text-3xl font-bold">{value}</p>
            </div>
        </div>
    );
};
export default DashboardCard;        