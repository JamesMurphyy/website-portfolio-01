import React from "react";

export const PropertyCard = ({ property }) => {
  return (
    <article className="mb-4 overflow-hidden rounded-xl border-1 text-black duration-500 ease-in-out shadow-md border-t-2 border-blue-300 shadow-blue-200 hover:shadow-2xl bg-white">
      <img src={property.image} alt={property.name} />
      <div className="p-4">
        <p className="text-lg font-medium pb-6">{property.address}</p>

        <ul className="flex border-y border-gray-200 py-6">
          <li className="mr-4 flex items-center text-sm">
            🏠 {property.sqFt} Sq Ft
          </li>
          <li className="mr-4 flex items-center text-sm">
            🛏️ {property.beds} Beds
          </li>
          <li className="flex items-center text-sm">
            🛁 {property.baths} Baths
          </li>
        </ul>

        <div className="flex justify-between pt-6">
          <div>
            <p className="text-sm text-gray-400">Price</p>
            <p className="font-medium">${property.price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Rating</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    i < property.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
