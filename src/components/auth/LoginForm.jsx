import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
    const[formData, setFormData] = 
    useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

return(
    <form onSubmit={(e) => onSubmit(e, formData)} className="space-y-4">
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
          font-bold py-2 px-4 rounded">Login</button>
   </form> 
);
};
export default LoginForm;