import LoginForm from "../../components/auth/LoginForm"; // Ensure this path is correct
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");

  const handleLogin = async (e, formData) => {
    e.preventDefault();
    setError(""); // Reset errors
    console.log("Logging in with:", formData);

    try {
      // Replace with actual API call
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      console.log("Login successful!");
      // Redirect or update UI after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 shadow-lg border rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
