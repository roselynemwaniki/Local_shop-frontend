import { useState } from "react";

const RegisterForm = ({ onsubmit }) => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        };
return (
    <form onSubmit={(e) => onsubmit(e, formData)} className="space-y-4">
        <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full border p-2"
        onChange={handleChange}
        />
        <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border p-2"
        onChange={handleChange} 
        />
        <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border p-2"
        onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white
        font-bold py-2 px-4 rounded">Register</button>        
    </form>
);
};
export default RegisterForm;
