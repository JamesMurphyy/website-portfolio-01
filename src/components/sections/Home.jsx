import React from "react";
import backgroundVideo from "../../assets/SummitParkHomesTrimmed.mp4";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen px-4 pt-24 sm:px-6 lg:px-8"
      aria-label="Homepage Hero Section"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-[-2] h-full w-full object-cover"
        title="Scenic real estate background"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[-1]" />

      {/* Top Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-1/2 w-[36rem] sm:w-[72rem] -translate-x-1/2 rotate-[30deg] 
          bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 aspect-[1155/678]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <header className="mx-auto max-w-4xl text-center py-20 sm:py-28 lg:py-36 animate-fade-in">
        <p className="text-sm sm:text-base font-semibold text-indigo-400 uppercase tracking-widest mb-4 animate-fade-in delay-200">
          Your Dream Home Awaits
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white animate-fade-in delay-300 leading-tight">
          Discover Your Next
          <span className="ml-2 block sm:inline bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Perfect Property
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-300 animate-fade-in delay-500 max-w-2xl mx-auto px-2">
          I help buyers, sellers, and investors navigate the real estate market
          with confidence and clarity.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in delay-700">
          <a
            href="#listings"
            className="rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-indigo-700 w-full sm:w-auto text-center"
            aria-label="View property listings"
          >
            View Listings
          </a>
          <a
            href="#about"
            className="text-base font-semibold text-indigo-300 hover:underline flex items-center group"
            aria-label="Learn more about me"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </header>

      {/* Bottom Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-14rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-1/2 w-[36rem] sm:w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 aspect-[1155/678]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};
