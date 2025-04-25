// import { RevealOnScroll } from "../RevealOnScroll";

// export const About = () => {
//   const frontendSkills = [
//     "React",
//     "Vue",
//     "TypeScript",
//     "TailwindCSS",
//     "Svelte",
//   ];

//   const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center py-10"
//     >
//       <RevealOnScroll>
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             {" "}
//             About Me
//           </h2>

//           <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
//             <p className="text-gray-300 mb-6">
//               Passionate developer with expertise in building scalable web
//               applications and creating innovative solutions.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4"> Frontend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {frontendSkills.map((tech, key) => (
//                     <span
//                       key={key}
//                       className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
//                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
//                     "
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4"> Backend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {backendSkills.map((tech, key) => (
//                     <span
//                       key={key}
//                       className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
//                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
//                     "
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
//               <ul className="list-disc list-inside text-gray-300 space-y-2">
//                 <li>
//                   <strong> B.S. in Computer Science </strong> - XYZ University
//                   (2016-2020)
//                 </li>
//                 <li>
//                   Relevant Coursework: Data Structures, Web Development, Cloud
//                   Computing...
//                 </li>
//               </ul>
//             </div>
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
//               <div className="space-y-4 text-gray-300">
//                 <div>
//                   <h4 className="font-semibold">
//                     {" "}
//                     Software Engineer at ABC Corp (2020 - Present){" "}
//                   </h4>
//                   <p>
//                     Developed and maintained microservices for cloud-based
//                     applications.
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold">
//                     {" "}
//                     Intern at DEF Startups (2019){" "}
//                   </h4>
//                   <p>
//                     Assisted in building front-end components and integration
//                     REST APIs
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { RevealOnScroll } from "../RevealOnScroll";

const features = [
  {
    name: "Your Trusted Real Estate Partner",
    description:
      "I’m passionate about helping individuals and families find the perfect place to call home. Whether you’re buying your first property, upgrading, or investing, I’m here to guide you every step of the way.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Streamlined Buying & Selling Process",
    description:
      "I believe real estate doesn’t have to be overwhelming. With a clear, step-by-step approach, I simplify the process so you can make confident decisions quickly and stress-free.",
    icon: LockClosedIcon,
  },
  {
    name: "Reliable and Committed Service",
    description:
      "I’m dedicated to understanding your needs and delivering tailored solutions with honesty, transparency, and care—because real estate is not just about property, it’s about people.",
    icon: ServerIcon,
  },
  {
    name: "Local Expertise You Can Count On",
    description:
      "With deep knowledge of the local market, I provide insights that help you make smarter choices—backed by data, neighborhood trends, and years of hands-on experience.",
    icon: ServerIcon,
  },
];

export const About = () => {
  return (
    // <div className="overflow-hidden bg-white py-24 sm:py-32">
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-7xl px-6 lg:px-8 flex items-center justify-center">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  Local Knowledge. Real Results.
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  About Me
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Hi, I’m Debby Murphy, a dedicated real estate professional who
                  puts people first. I take pride in making the buying or
                  selling process smooth, stress-free, and even enjoyable.
                  Whether you're a first-time buyer, seasoned investor, or
                  looking for your forever home, I’m here to guide you with
                  local expertise, honest advice, and a commitment to getting
                  results. Let’s turn your real estate goals into reality.
                </p>
              </div>
            </div>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5 text-indigo-600"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
