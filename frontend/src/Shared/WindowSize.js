import { useState, useEffect } from "react";
export const GetSize = () => {
  const size = useWindowSize();
  return size;
}
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 800,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  },[]);
  return windowSize;
}