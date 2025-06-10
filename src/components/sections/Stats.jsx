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
    <section className="flex justify-center px-4 -mt-20 -mb-8">
      <RevealOnScroll setVisible={setVisible}>
        <div className="w-full max-w-5xl rounded-2xl border border-indigo-300 bg-white px-10 py-16 shadow-lg backdrop-blur-md">
          <h2 className="mb-10 text-center text-xl font-semibold text-gray-900">
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
