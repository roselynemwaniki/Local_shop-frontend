import { useState } from "react";

const ProfileSettings = () => {
  const [profile, setProfile] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
      <form className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" className="w-full border p-2" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="w-full border p-2" onChange={handleChange} />
        <button type="submit" className="bg-green-500 text-white py-2 px-4">Save</button>
      </form>
    </div>
  );
};

export default ProfileSettings;