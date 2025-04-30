// import residentialBg from "../../assets/residentialBg.mp4";
// import { RevealOnScroll } from "../RevealOnScroll";

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative main"
//     >
//       {/* added 'main' to classname for video bg */}
//       <RevealOnScroll>
//         <div className="overlay"></div>
//         {/* added 'overlay' to classname for video bg */}

//         <video src={residentialBg} autoPlay loop muted />

//         <div className="text-center z-10 px-4 content">
//           {/* added 'content' to classname for video bg */}

//           <h1 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent leading-right">
//             Debby Murphy Real estate
//           </h1>

//           <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
//             Lorem ipsum is a dummy or placeholder text commonly used in graphic
//             design, publishing, and web development. Its purpose is to permit a
//             page layout to be designed, independently of the copy that will
//             subsequen
//           </p>
//           <div className="flex justify-center space-x-4">
//             <a
//               href="#projects"
//               className="bg-gray-200/20 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
//             >
//               View Reviews
//             </a>

//             <a
//               href="#contact"
//               className="border border-black/50 text-white py-3 px-6 rounded font-medium transition-all duration-200
//              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-gray-200/10"
//             >
//               Contact Me!
//             </a>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

import React from "react";
import backgroundVideo from "../../assets/residentialBg.mp4";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black px-6 pt-14 lg:px-8 min-h-screen"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-[-1] h-full w-full object-cover opacity-80"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {/* <div className="overlay"></div> */}
      {/* Top Gradient Shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center animate-fade-in">
        <p className="text-base font-semibold text-indigo-400 mb-4 uppercase tracking-wide animate-fade-in delay-200">
          Your Dream Home Awaits
        </p>
        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl animate-fade-in delay-300">
          Discover Your Next
          <span className="ml-3 inline-block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent pb-2">
            Perfect Property
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 animate-fade-in delay-500">
          I help buyers, sellers, and investors navigate the real estate market
          with confidence and clarity.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in delay-700">
          <a
            href="/"
            className="rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-indigo-700"
          >
            View Listings
          </a>
          <a
            href="/"
            className="text-base font-semibold text-indigo-300 hover:underline flex items-center group"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Gradient Shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
};
