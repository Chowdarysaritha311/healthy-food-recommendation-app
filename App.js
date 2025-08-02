import { useState } from "react";
import UserForm from "./components/UserForm";
import FoodList from "./components/FoodList";
import foodData from "./data/foodData";

function App() {
  const [user, setUser] = useState(null);

  const handleUserSubmit = (userData) => setUser(userData);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl text-center font-bold text-green-700 mb-6">
        🍏 Healthy Food Recommendation App
      </h1>
      {!user ? (
        <UserForm onSubmit={handleUserSubmit} />
      ) : (
        <FoodList user={user} foodData={foodData} />
      )}
    </div>
  );
}

export default App;
