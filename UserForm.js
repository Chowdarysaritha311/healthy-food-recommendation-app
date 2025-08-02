import { useState } from "react";

export default function UserForm({ onSubmit }) {
  const [age, setAge] = useState("");
  const [workType, setWorkType] = useState("Sedentary");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ age: Number(age), workType });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white max-w-lg mx-auto p-6 rounded-xl shadow-lg">
      <label className="block mb-2 font-medium">Enter your age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        placeholder="e.g., 25"
        required
      />

      <label className="block mb-2 font-medium">Select your work type:</label>
      <select
        value={workType}
        onChange={(e) => setWorkType(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option>Sedentary</option>
        <option>Moderate</option>
        <option>Active</option>
      </select>

      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
        Show Recommendations
      </button>
    </form>
  );
}
