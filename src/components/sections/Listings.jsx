import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { propertyList } from "../../assets/propertyData";
import { PropertyCard } from "../PropertyCard";

export const Listings = () => {
  return (
    <section
      id="listings"
      aria-label="Real estate listings section"
      className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-20"
    >
      <RevealOnScroll>
        <h2 className="text-center mt-10 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-black">
          Featured Listings
        </h2>

        <div
          className="mt-16 grid w-full max-w-screen-2xl gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
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
