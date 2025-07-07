const categories = [
  {
    name: "Earthquake Kits",
    icon: "https://cdn-icons-png.flaticon.com/512/3090/3090503.png",
  },
  {
    name: "First Aid",
    icon: "https://cdn-icons-png.flaticon.com/512/4320/4320291.png",
  },
  {
    name: "Water & Food",
    icon: "https://cdn-icons-png.flaticon.com/512/8097/8097611.png",
  },
  {
    name: "Lighting & Power",
    icon: "https://cdn-icons-png.flaticon.com/512/4385/4385351.png",
  },
];

const CategoryGrid = () => {
  return (
    <section className="px-6 md:px-16 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition"
          >
            <img src={cat.icon} alt={cat.name} className="w-16 h-16 mb-2" />
            <p className="text-gray-700 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
