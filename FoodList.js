import FoodCard from "./FoodCard";

export default function FoodList({ user, foodData }) {
  const filtered = foodData.filter((item) => {
    return (
      user.age >= item.ageRange[0] &&
      user.age <= item.ageRange[1] &&
      item.workType.includes(user.workType)
    );
  });

  return (
    <div className="mt-8">
      <h2 className="text-2xl text-center font-semibold text-green-700 mb-6">
        Recommended Foods for You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filtered.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
}
