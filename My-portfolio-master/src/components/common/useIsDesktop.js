import { useEffect, useState } from "react";

const useIsDesktop = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth > breakpoint
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
