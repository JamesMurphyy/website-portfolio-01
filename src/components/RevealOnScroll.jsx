import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, setVisible }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          if (setVisible) setVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [setVisible]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
