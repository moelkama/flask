import React, { useState } from 'react'
import ProductCards from './product';
import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import maters from './data/materials.json';
import elecs from './data/electrics.json';

const categories = [
  {
    id: 1,
    name: 'Electrics',
    items: elecs,
    categoryName: 'Electrics',
    path: '/electrics',
    categoryImage: '/images/226ff3b9-41e1-48b0-bdb9-851b59885a78.jpg'
  },
  {
    id: 2,
    items: maters,
    categoryName: 'Materials',
    path: '/materials',
    categoryImage: '/images/e57bd100-a65f-449b-a238-38029f14201e.jpg'
  }
];

const Categories = () => {

  console.log('hi\n')
  return (
    <>
    <div className=" mx-auto px-4 py-8">
      {/* <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-400"
          >
            <div className="h-48 bg-gray-100 overflow-hidden">
              <img
                src={category.categoryImage}
                alt={category.categoryName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {category.categoryName}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Categories />,
  },
  ...categories.map((category) => ({
    path: category.path,
    element: <ProductCards products={category.items} />
  }))
]);

function App() {

  return (
     <RouterProvider router={router} />
  )
}

export default App