import {
  ArrowsRightLeftIcon,
  HomeModernIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { HandshakeIcon } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

const features = [
  {
    name: "Your Trusted Real Estate Partner",
    description:
      "I'm passionate about helping individuals and families find the perfect place to call home. Whether you're buying your first property, upgrading, or investing, I’m here to guide you every step of the way.",
    icon: HomeModernIcon,
  },
  {
    name: "Streamlined Buying & Selling Process",
    description:
      "Real estate doesn't have to be overwhelming. With a clear, step-by-step approach, I simplify the process so you can make confident decisions quickly and stress-free.",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Reliable and Committed Service",
    description:
      "I'm dedicated to understanding your needs and delivering tailored solutions with honesty, transparency, and care—because real estate is not just about property, it’s about people.",
    icon: HandshakeIcon,
  },
  {
    name: "Local Expertise You Can Count On",
    description:
      "With deep knowledge of the local market, I provide insights that help you make smarter choices—backed by data, neighborhood trends, and years of hands-on experience.",
    icon: MapPinIcon,
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 my-10 sm:py-10 sm:my-28 lg:py-10 lg:my-32 lg:mb-1"
      aria-label="About Debra Murphy - Real Estate Professional"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Text Section */}
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-indigo-600">
                Local Knowledge. Real Results.
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Meet Debra Murphy
              </p>
              <p className="mt-6 text-base sm:text-lg text-gray-700">
                Hi, I'm Debra Murphy—a dedicated real estate agent who puts
                people first. I take pride in making the buying or selling
                process smooth, stress-free, and even enjoyable. Whether you're
                a first-time buyer, seasoned investor, or searching for your
                forever home, I guide you with local expertise, honest advice,
                and a commitment to real results. Let’s turn your real estate
                goals into reality.
              </p>
            </div>

            {/* Feature List */}
            <dl className="space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-10">
                  <dt className="font-semibold text-gray-900 flex items-start gap-3">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-0 top-1 h-6 w-6 text-indigo-600"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
