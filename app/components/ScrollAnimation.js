"use client"
import { useEffect, useRef } from 'react';

export function ScrollAnimation({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the visible class which will trigger the animation
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            // Once the animation is triggered, we don't need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element is fully in view
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-animation ${className}`}>
      {children}
    </div>
  );
} 