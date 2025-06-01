import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { propertyList } from "../../assets/propertyData";
import { PropertyCard } from "../PropertyCard";

export const Listings = () => {
  return (
    <section
      id="listings"
      aria-label="Real estate listings section"
      className="flex flex-col items-center justify-center px-4 py-20"
    >
      <RevealOnScroll>
        <h2 className="text-center mt-10 text-4xl font-extrabold text-black sm:text-4xl xl:text-5xl">
          Featured Listings
        </h2>

        <div
          className="mt-20 grid max-w-screen-xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-2 sm:px-8 md:px-10"
          role="list"
        >
          {propertyList.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
