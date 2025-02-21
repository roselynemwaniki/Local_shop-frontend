import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">LocalShop</h1>
            <ul className="flex gap-4">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="reports">reports</Link></li>
            </ul>
            </nav>
            );
        };
export default Navbar;        