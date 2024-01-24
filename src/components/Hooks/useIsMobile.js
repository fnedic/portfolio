import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 600);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
};
