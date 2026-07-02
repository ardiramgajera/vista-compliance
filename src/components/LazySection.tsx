import React, { useState, useEffect, useRef } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback,
  rootMargin = "600px",
  minHeight = "400px",
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Listen for the custom event dispatched by nav-link clicks.
    // When fired, immediately render this section so getElementById() works.
    const forceRender = () => {
      setIsInView(true);
      observer.disconnect();
    };
    window.addEventListener("forceRenderSections", forceRender);

    return () => {
      observer.disconnect();
      window.removeEventListener("forceRenderSections", forceRender);
    };
  }, [rootMargin]);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: isInView ? "auto" : minHeight,
      }}
    >
      {isInView ? children : fallback || null}
    </div>
  );
};

export default LazySection;
