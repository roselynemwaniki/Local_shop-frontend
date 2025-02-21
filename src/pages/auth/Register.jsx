import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  const handleRegister = (e, formData) => {
    e.preventDefault();
    console.log("Registering with:", formData);
    // Call API for registration
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 shadow-lg border rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <RegisterForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default Register;