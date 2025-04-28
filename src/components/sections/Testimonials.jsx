import { RevealOnScroll } from "../RevealOnScroll";

export const Testimonials = () => {
  return (
    // <section className="py-12 text-blue-900 sm:py-16 lg:py-20">
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center -mt-40"
    >
      <RevealOnScroll>
        <div className="relative mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <span className="hidden sm:block -z-10 absolute -left-35 opacity-20 -top-5 rounded-full  bg-blue-700 p-6 text-9xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              />
            </svg>
          </span>
          <span className="hidden sm:block -z-10 absolute -right-35 opacity-20 -bottom-50 rounded-full  bg-blue-700 p-6 text-9xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
              />
            </svg>
          </span>

          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-indigo-600">
                What Clients Say About Working With Me
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black sm:text-4xl xl:text-5xl">
                Client Testimonials
              </h2>
            </div>

            {/* <div className="order-3 mt-8 text-center md:mt-16">
              <button className="mb-20 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
                More reviews on TrustPilot
              </button>
            </div> */}

            <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
              <div className="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200 bg-white">
                <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                  <div className="flex-1">
                    <p className="border-blue-500 px-10 text-xl text-black">
                      Found my dream home—stress free!
                    </p>

                    <blockquote className="mt-8 flex-1">
                      <p className="leading-relaxed text-blue-900">
                        Debby made the whole process seamless. From touring
                        homes to closing, she was always there with honest
                        advice and a positive attitude. I couldn’t have done it
                        without her!
                      </p>
                    </blockquote>
                  </div>

                  <div className="-mx-5 mt-8 px-8 py-1">
                    <div>
                      <p className="text-black font-bold">James Khawalski</p>
                      <p className="mt-0.5 text-sm text-black">
                        First-Time Homebuyer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200 bg-white">
                <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                  <div className="flex-1">
                    <p className="border-blue-500 px-10 text-xl text-black">
                      Professional, responsive, and incredibly helpful!
                    </p>

                    <blockquote className="mt-8 flex-1">
                      <p className="leading-relaxed text-blue-900">
                        Selling my condo felt overwhelming at first, but Debby
                        took care of everything. She staged it beautifully and
                        got me multiple offers above asking!
                      </p>
                    </blockquote>
                  </div>

                  <div className="-mx-5 mt-8 px-8 py-1">
                    <div>
                      <p className="text-black font-bold">Jacob Jones</p>
                      <p className="mt-0.5 text-sm text-black">
                        Condo Seller, Downtown Toronto
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200 bg-white">
                <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                  <div className="flex-1">
                    <p className="border-blue-500 px-10 text-xl text-black">
                      She helped us upgrade and invest smart.
                    </p>

                    <blockquote className="mt-8 flex-1">
                      <p className="leading-relaxed text-blue-900">
                        We needed to sell our home and find a bigger space for
                        our growing family—Debby guided us through both
                        seamlessly and even helped us invest in a rental
                        property.
                      </p>
                    </blockquote>
                  </div>

                  <div className="-mx-5 mt-8 px-8 py-1">
                    <div>
                      <p className="text-black font-bold">Jenny Wilson</p>
                      <p className="mt-0.5 text-sm text-black">
                        Homeowner & Investor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
