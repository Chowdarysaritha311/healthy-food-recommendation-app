export default function FoodCard({ food }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-green-800 mb-2">{food.name}</h3>
        <p className="text-sm text-gray-700 mb-1">🔥 {food.calories} kcal</p>
        <p className="text-sm text-gray-600 mb-1">💡 {food.benefits}</p>
        <p className="text-xs text-gray-500">🕒 {food.category}</p>
      </div>
    </div>
  );
}
