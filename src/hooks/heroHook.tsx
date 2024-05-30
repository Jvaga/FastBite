const HeroHook = () => {
  const variantsTitle = {
    hidden: {
      opacity: 0,
    },
    reveal: (i: number) => ({
      opacity: 1,
      transition: { delay: 0.04 * i },
    }),
  };

  const variantsP = {
    start: {
      opacity: 0,
      y: 50,
      scale: 0,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.5,
      },
    }),
  };

  const variantsBtn = {
    animate: () => ({
      scale: 1.1,

      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    }),
  };

  return {
    variantsTitle,
    variantsP,
    variantsBtn,
  };
};

export default HeroHook;
