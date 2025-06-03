import { useEffect, useState, useRef } from "react";
import type { RefObject } from "react";

/**
 * Hook personalizado para detectar quando um elemento entra na viewport.
 * 
 * @param options Configurações do IntersectionObserver.
 * @returns [ref, isIntersecting] 
 */

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}

export default useInView;
