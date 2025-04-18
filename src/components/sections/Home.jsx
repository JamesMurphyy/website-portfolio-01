import residentialBg from "../../assets/residentialBg.mp4";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative main"
    >
      {/* added 'main' to classname for video bg */}
      <RevealOnScroll>
        <div className="overlay"></div>
        {/* added 'overlay' to classname for video bg */}

        <video src={residentialBg} autoPlay loop muted />
        <div className="text-center z-10 px-4 content">
          {/* added 'content' to classname for video bg */}

          <h1 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent leading-right">
            Debby Murphy Real estate
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development. Its purpose is to permit a
            page layout to be designed, independently of the copy that will
            subsequen
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gray-200/20 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-black/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-gray-200/10"
            >
              Contact Me!
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
