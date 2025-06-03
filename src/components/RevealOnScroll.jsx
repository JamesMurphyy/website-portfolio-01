import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({
  children,
  setVisible,
  className = "",
  revealOnce = true,
}) => {
  const ref = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleIntersect = ([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("opacity-100", "translate-y-0");
        element.classList.remove("opacity-0", "translate-y-4");

        if (typeof setVisible === "function") setVisible(true);

        if (revealOnce && !hasRevealed) {
          observer.unobserve(element);
          setHasRevealed(true);
        }
      } else if (!revealOnce) {
        element.classList.remove("opacity-100", "translate-y-0");
        element.classList.add("opacity-0", "translate-y-4");

        if (typeof setVisible === "function") setVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [setVisible, revealOnce, hasRevealed]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out opacity-0 translate-y-4 ${className}`}
    >
      {children}
    </div>
  );
};
