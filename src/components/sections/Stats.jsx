// import { RevealOnScroll } from "../RevealOnScroll";

// const stats = [
//   { id: 1, name: "Happy Clients Served", value: "+1150" },
//   { id: 2, name: "Neighborhoods Covered", value: "110" },
//   { id: 3, name: "Years of Experience", value: "+20" },
// ];

// export const Stats = () => {
//   return (
//     <section className="flex justify-center -mt-20 -mb-20">
//       <RevealOnScroll>
//         <div className="flex items-center justify-between bg-white py-24 sm:py-32 z-10 border-2 rounded-2xl px-10 shadow-1xs shadow-indigo-400">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//               {stats.map((stat) => (
//                 <div
//                   key={stat.id}
//                   className="mx-6 flex max-w-xs flex-col gap-y-3"
//                 >
//                   <dt className="text-base/7 text-gray-600">{stat.name}</dt>
//                   <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//                     {stat.value}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

// export default Stats;

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Home, MapPin, Award } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  { id: 1, name: "Happy Clients Served", value: "+1150", icon: Home },
  { id: 2, name: "Neighborhoods Covered", value: "110", icon: MapPin },
  { id: 3, name: "Years of Experience", value: "+20", icon: Award },
];

export const Stats = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="flex justify-center -mt-10 -mb-10 px-4">
      <RevealOnScroll setVisible={setVisible}>
        <div className="bg-white backdrop-blur-md border border-indigo-300 shadow-lg rounded-2xl px-10 py-16 w-full max-w-5xl">
          <h2 className="text-center text-xl font-semibold text-gray-900 mb-10">
            My Track Record
          </h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-3">
            {stats.map((stat) => {
              const numericValue = parseInt(stat.value.replace(/\D/g, ""));
              const suffix = stat.value.replace(/[0-9]/g, "");

              return (
                <div
                  key={stat.id}
                  className="flex flex-col items-center gap-y-2"
                >
                  <stat.icon className="h-8 w-8 text-indigo-500 mb-2" />
                  <dt className="text-sm text-black">{stat.name}</dt>
                  <dd className="order-first text-3xl font-bold text-gray-900 sm:text-4xl">
                    {visible ? <CountUp end={numericValue} duration={2} /> : 0}
                    {suffix}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Stats;
