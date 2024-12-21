import React, { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize((prevSize) => ({
        ...prevSize,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return size;
}
