import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { propertyList } from "../../assets/propertyData";
import { PropertyCard } from "../PropertyCard";

export const Listings = () => {
  return (
    <section id="listings" className="flex items-center justify-center">
      <RevealOnScroll>
        <h2 className="flex items-center justify-center mt-35 text-4xl font-bold text-black z-10 sm:text-4xl xl:text-5xl">
          Featured Listings
        </h2>
        <div className="mt-20 grid flex-wrap max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 z-10">
          {propertyList.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
