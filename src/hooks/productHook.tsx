import { useState, useEffect } from "react";

const ProductHook = () => {
  const getDeviceSize = () => {
    if (window.innerWidth < 768) {
      return "mobile";
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  const [deviceSize, setDeviceSize] = useState(getDeviceSize());

  useEffect(() => {
    const handleResize = () => {
      setDeviceSize(getDeviceSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    initial: {
      y: deviceSize === "mobile" ? 100 : deviceSize === "tablet" ? 200 : 200,
      x: deviceSize === "mobile" ? 100 : deviceSize === "tablet" ? 200 : 200,

      opacity: 0,
    },
    animate: (i: number) => ({
      x: 0,
      y: 0,
      opacity: 1,

      transition: {
        delay: 0.1 * i,
      },
    }),
  };

  return {
    variants,
  };
};

export default ProductHook;
