import { useState } from "react";

const ResetPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      return;
    }
    setError(""); // Clear error on valid submission
    onSubmit(e, email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label htmlFor="email" className="block text-gray-700 font-medium">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {error && <p className="text-red-500 text-sm" aria-live="polite">{error}</p>}
      <button
        type="submit"
        className={`w-full py-2 text-white rounded transition ${
          email ? "bg-yellow-500 hover:bg-yellow-600" : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!email}
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;
