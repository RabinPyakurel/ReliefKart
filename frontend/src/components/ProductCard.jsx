const ProductCard = ({ product }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain bg-gray-100 p-4"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="font-semibold text-lg text-gray-700">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Reliable product for emergencies.
            </p>
            <span className="font-bold text-blue-600 block mb-4">
              Rs. {product.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
