import { useEffect } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to every element with class
 * "reveal" or "reveal-left" and adds the "active" class when the
 * element enters the viewport.  Called at the top of each page
 * component so animations retrigger on page navigation.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
