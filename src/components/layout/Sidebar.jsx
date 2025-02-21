import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-200 p-4">
            <ul>
                <li><Link to="/dashboard" className="block p-2 hover:bg-gray-300">Dashboard</Link></li>
                <li><Link to="/inventory" className="block p-2 hover:bg-gray-300">Inventory</Link></li>
                <li><Link to="/reports" className="block p-2 hover:bg-gray-300">Reports</Link></li>
            </ul>
        </aside>
    );
};
export default Sidebar;