import { useState } from "react";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e, email) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      // Simulate API call (Replace with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setMessage("A reset link has been sent to your email.");
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md p-6 shadow-lg border rounded-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        
        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <ResetPasswordForm onSubmit={handleResetPassword} />
        
        {loading && <p className="text-gray-500 text-center mt-2">Processing...</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
