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
      className="relative min-h-screen flex items-center justify-center py-10 -mt-20"
      aria-label="About Debra Murphy - Real Estate Professional"
    >
      <RevealOnScroll>
        <div className="max-w-7xl px-6 lg:px-8 flex items-center justify-center">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* About Text Content */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold text-indigo-600">
                  Local Knowledge. Real Results.
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Meet Debra Murphy
                </p>
                <p className="mt-6 text-lg text-gray-600">
                  Hi, I'm Debra Murphy—a dedicated real estate agent who puts
                  people first. I take pride in making the buying or selling
                  process smooth, stress-free, and even enjoyable. Whether
                  you're a first-time buyer, seasoned investor, or searching for
                  your forever home, I guide you with local expertise, honest
                  advice, and a commitment to real results. Let’s turn your real
                  estate goals into reality.
                </p>
              </div>
            </div>

            {/* Feature Highlights */}
            <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                    />
                    {feature.name}
                  </dt>
                  <dd className="inline"> — {feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
