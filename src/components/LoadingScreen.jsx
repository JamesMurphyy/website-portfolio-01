// import { useEffect, useState } from "react";

// export const LoadingScreen = ({ onComplete }) => {
//   const [text, setText] = useState("");
//   const fullText = "<Hello Wolrd />";

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;

//       if (index > fullText.length) {
//         clearInterval(interval);

//         setTimeout(() => {
//           onComplete();
//         }, 1000);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 z-50 bg-gray-200 text-gray-500 flex flex-col items-center justify-center">
//       <div className="mb-4 text-4xl font-mono font-bold">
//         {/* {text} <span className="animate-blink ml-1"> | </span> */}
//       </div>

//       <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
//         <div className="w-[40%] h-full bg-white shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const LoadingScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      props.onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [props]);

  useEffect(() => {
    if (loading) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [loading, controls]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white h-screen w-full flex justify-center items-center overflow-hidden"
      animate={controls}
    >
      {/* <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="p-4 rounded-md z-10">
        <div className="flex justify-center">
          <>
            <motion.span
              className="w-3 h-3 my-12 mx-1 bg-gray-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [1, 0.6, 1],
                transition: { duration: 1.2, repeat: Infinity },
              }}
            />
            <motion.span
              className="w-3 h-3 my-12 mx-1 bg-gray-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [1, 0.6, 1],
                transition: { duration: 1.2, repeat: Infinity, delay: 0.2 },
              }}
            />
            <motion.span
              className="w-3 h-3 my-12 mx-1 bg-gray-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [1, 0.6, 1],
                transition: { duration: 1.2, repeat: Infinity, delay: 0.4 },
              }}
            />
          </>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
