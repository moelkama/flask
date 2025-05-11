const ProductCards = ({products}) => {
    return (
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <div 
                key={product.id} 
                className="rounded-lg border border-slate-300 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-black mb-3">{product.name}</h3>
                  
                  {/* Price Section - Two lines */}
                  <div className="mb-4">
                    <p className="text-xl font-semibold text-gray-900">{product.salePrice} Dh</p>
                    <p className="text-lg text-gray-500">{product.originalPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ProductCards;